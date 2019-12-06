import {useEffect, useRef, useState} from "react";

export class SubscriptionState {

    protected lastSubscribedComponentId = 0

    protected subscribedComponents: { [id: number]: any } = {}

    public use(onStateUpdate?: (state: this)=>void): this {
        return (() => {
            const [state, updateState] = useState({state: this})
            useEffect(() => {
                let id = this.getNextSubscribedComponentId()
                this.subscribe(id, updateState)
                return () => {
                    this.unsubscribe(id)
                }
            }, [])
            if (onStateUpdate) {
                useEffect(()=>{
                    onStateUpdate(state.state)
                }, [state])
            }
            return this
        })()
    }

    protected getNextSubscribedComponentId() {
        return this.lastSubscribedComponentId += 1
    }

    protected subscribe(id: number, updateFunction: any) {
        this.subscribedComponents[id] = updateFunction
    }

    protected unsubscribe(id: number) {
        delete this.subscribedComponents[id]
    }

    protected updateSubscribedComponents(value: any) {
        for (let updateFunction of Object.values(this.subscribedComponents)) {
            updateFunction(value)
        }
    }
}
