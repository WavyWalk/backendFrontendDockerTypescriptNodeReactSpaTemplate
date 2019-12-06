import * as React from "react";
import {useContext} from "react";

type IStateValue<T> = { state: T }

export class StateModel {

    constructor() {
        this.context = React.createContext(null as any)
    }

    context!: React.Context<IStateValue<this>>

    protected dispatch!: () => void

    protected reducer = (state: IStateValue<this>, action: () => void) => {
        return {state: this}
    }

    use(onStateUpdate?: (state: this)=>void) {
        const stateValue = useContext(this.context)
        if (onStateUpdate) {
            React.useEffect(()=>{
                onStateUpdate(stateValue.state)
            }, [stateValue])
        }
        return stateValue.state
    }

    provide = (props: React.PropsWithChildren<any>) => {
        let [{state}, dispatch] = React.useReducer(this.reducer, {state: this})
        this.dispatch = dispatch as any
        return <this.context.Provider value={{state}}>
            {props.children}
        </this.context.Provider>
    }

}