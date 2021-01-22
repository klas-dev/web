import {Illustration,Anchor,Shape,Box,Rect,Group} from "react-zdog";
import {useRef,useEffect,useCallback,useState} from "react";
//import useRefWithEffect from "../../../hooks/useRefWithEffect.jsx";
function InterfazModelo(){
    let [rot,setRot] = useState(null);
    const cable = [
        {x:0,y:0},
        {x:0,y:30},
        {arc:[{x:0,y:35},{x:-10,y:35}]},
        {x:-10,y:35}
    ];
    const cable2 = [
        {x:0,y:0},
        {x:0,y:30},
        {arc:[{x:0,y:35},{x:10,y:35}]},
        {x:10,y:35}
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
        <Illustration dragRotate={true} zoom={1.5}>
            <Anchor ref={ref} translate={{y:-25}}>
                <Box stroke={10} color="gray" width={120} height={70} depth={3} />
                <Rect stroke={0} color="lightblue" fill={true} width={120} height={70} translate={{z:5}} />
                <Box stroke={10} color="gray" width={10} height={40} depth={3} translate={{x:0,y:45,z:-5}}/>
                <Box stroke={10} color="gray" width={30} height={3} depth={15} translate={{y:70,z:-3}} />
                <Box stroke={10} group="b" color="darkgray" width={9*2} height={16*2} depth={3} translate={{x:30,z:20,y:45}} />
                <Rect stroke={0} group="b" color="lightblue" fill={true} width={9*2} height={16*2} translate={{x:30,z:25,y:45}} />
            </Anchor>
        </Illustration>
    );
}

export default InterfazModelo;
