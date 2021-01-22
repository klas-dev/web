import {useRef,useCallback} from "react";

function useHookWithEffect(){
    const ref = useRef(undefined);
    const setRef = useCallback((node)=>{
        if (ref.current){
        }
        if (node){
        }
        ref.current = node;
    },[])
    return [setRef]
}

export default useHookWithEffect;
