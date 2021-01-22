import {Illustration,Anchor,Shape,Box,Hemisphere,Cylinder} from "react-zdog";
import {useRef,useEffect,useCallback,useState} from "react";
//import useRefWithEffect from "../../../hooks/useRefWithEffect.jsx";
function AsistenciaModelo(){
    let [rot,setRot] = useState(null);
    const telefono=[
        {x:-20,y:0},
        {x:20,y:0}
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
                <Shape closed={false} stroke={10} color="lightpink" path={telefono} translate={{y:-60}} />
                <Hemisphere stroke={5} color="lightpink" diameter={20} rotate={{x:1.57}} translate={{x:-30,y:-53}} />
                <Hemisphere stroke={5} color="lightpink" diameter={20} rotate={{x:1.57}} translate={{x:30,y:-53}} />
                <Box stroke={5} color="pink" width={3} height={25} depth={3} translate={{x:10,y:-43}} /> 
                <Box stroke={5} color="pink" width={3} height={25} depth={3} translate={{x:-10,y:-43}} /> 
                <Hemisphere stroke={0} color="pink" rotate={{x:1.57}} diameter={100} />
                <Cylinder stroke={5} diameter={40} lenght={3} color="pink" backface="lightpink" translate={{y:-20,z:40}} rotate={{x:0.63}} />
            </Anchor>
        </Illustration>
    );
}

export default AsistenciaModelo;
