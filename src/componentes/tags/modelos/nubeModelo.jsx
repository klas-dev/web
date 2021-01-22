import {Illustration,Anchor,Shape,Box} from "react-zdog";
import {useRef,useEffect,useCallback,useState} from "react";
//import useRefWithEffect from "../../../hooks/useRefWithEffect.jsx";
function NubeModelo(){
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
            <Anchor ref={ref} translate={{y:-10}}>
                <Shape stroke={60} color="#c2bcb1" />
                <Shape stroke={60} color="#c2bcb1" translate={{x:30}} />
                <Shape stroke={60} color="#c2bcb1" translate={{z:30}} />
                <Shape stroke={60} color="#c2bcb1" translate={{x:-30}} />
                <Shape stroke={60} color="#c2bcb1" translate={{z:-30}} />
                <Shape stroke={40} color="#c2bcb1" translate={{x:30,y:-25}} />
                <Shape stroke={40} color="#c2bcb1" translate={{z:30,y:-25}} />
                <Shape stroke={40} color="#c2bcb1" translate={{x:-30,y:-25}} />
                <Shape stroke={40} color="#c2bcb1" translate={{z:-30,y:-25}} />
                <Shape stroke={60} color="#c2bcb1" translate={{y:-30}} />
                <Shape stroke={6} color="lightblue" closed={false} translate={{y:30,x:-10,z:10}} path={cable} />
                <Shape stroke={6} color="lightblue" closed={false} translate={{y:30,x:20,z:-10}} path={cable2} />
                <Box stroke={3} color="darkgray" width={3} height={16} depth={9} translate={{y:65,x:-20,z:10}} />
                <Box stroke={3} color="darkgray" width={3} height={16} depth={9} translate={{y:65,x:30,z:-10}} />
            </Anchor>
        </Illustration>
    );
}

export default NubeModelo;
