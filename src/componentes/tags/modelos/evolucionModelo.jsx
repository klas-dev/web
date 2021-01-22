import {Illustration,Anchor,Shape,Box} from "react-zdog";
import {useRef,useEffect,useCallback,useState} from "react";
//import useRefWithEffect from "../../../hooks/useRefWithEffect.jsx";
function EvolucionModelo(){
    let [rot,setRot] = useState(null);
    const grafico = [
        {x:0,y:0},{x:10,y:0,},
        {x:10,y:-10},{x:20,y:-10},
        {x:20,y:-10},{x:30,y:-20},
        {x:30,y:-20},{x:40,y:-40},
        {x:40,y:-40},{x:50,y:-35},
        {x:50,y:-35},{x:60,y:-70}
    ];
    function rotate(){
        rot.rotate.y += 0.01;
        requestAnimationFrame(rotate);
    }
    let ref = useCallback(node=>{
        if (node !== null){
            setRot(node);
        }
    },[]);  

    useEffect(()=>{
        if (rot){
            rotate();
        }
    },[rot])
    
    return (
        <Illustration zoom={1.3} dragRotate={true}>
            <Anchor ref={ref} translate={{y:50}}>
                <Shape stroke={5} closed={false} color="#c2bcb1" path={[{x:-50,y:-60},{x:-50,y:0},{x:50,y:0}]} />
                <Shape translate={{x:-40}} stroke={5} closed={false} color="tomato" path={grafico} />
            </Anchor>
        </Illustration>
    );
}

export default EvolucionModelo;
