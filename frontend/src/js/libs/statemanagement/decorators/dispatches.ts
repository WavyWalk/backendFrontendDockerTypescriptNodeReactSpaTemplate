
interface iDispatchesOptions {
    async?: boolean
}

export function dispatches(options: iDispatchesOptions = {}) {
    return function (target: any, propertyKey: string, descriptor?: any) {
        let original = descriptor.value
        if (options.async) {
            descriptor.value = async function(...args: any[]) {
                // @ts-ignore
                await original.apply(this, args)
                // @ts-ignore
                this.dispatch()
            }
            return
        }
        descriptor.value = async function(...args: any[]) {
            // @ts-ignore
            await original.apply(this, args)
            // @ts-ignore
            this.dispatch()
        }
        return
    }
}