import {Illustration,Anchor,Shape,Box,Group} from "react-zdog";
import {useRef,useEffect,useCallback,useState} from "react";
//import useRefWithEffect from "../../../hooks/useRefWithEffect.jsx";
function DatosModelo(props){
    let [rot,setRot] = useState(null);
    const flecha = [
        {x:0,y:0},
        {x:40,y:0},
        {x:30,y:-20},
        {x:40,y:0},
        {x:30,y:20}
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
        if (rot && !props.rot){
            rotate();
        }
    },[rot])
    
    return (
        <Illustration zoom={1.2} dragRotate={true}>
            <Anchor ref={ref} translate={{y:30}}>
                <Shape stroke={60} color="#c2bcb1" translate={{x:-30}} />
                <Shape closed={false} stroke={10} color="lightblue" path={flecha} />
                <Group>
                    <Box translate={{x:60,y:-5}} width={15} height={30} depth={5} stroke={5} color="rgb(254, 202, 202)" />
                    <Box translate={{x:85,y:-10}} width={15} height={40} depth={5} stroke={5} color="rgb(248, 113, 113)" />
                    <Box translate={{x:110,y:-20}} width={15} height={60} depth={5} stroke={5} color="red" />
                </Group>
            </Anchor>
        </Illustration>
    );
}

export default DatosModelo;
