import { useState } from "react";

type TNewState<T> = T | ((newState: T) => T);
type TInitialState<T> = T | (() => T);
type TValidation<T> = (newState: T) => boolean;

export default function useStateWithValidation<T>(initialState: TInitialState<T>, validation: TValidation<T>){
    const [state, setState] = useState(initialState);

    const setStateWithValidation = (newState: /*TNewState<T>*/T) => {
        /*if(typeof newState === 'function'){
            if(validation(newState())){
                setState(newState);
            }
            return;
        }*/

        if(validation(newState)) {
            setState(newState);
            return;
        }
        console.log('ixi')
    };

    return [state, setStateWithValidation] as [T, React.Dispatch<React.SetStateAction<T>>];
}