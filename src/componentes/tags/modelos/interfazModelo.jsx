import {Illustration,Anchor,Shape,Box,Rect,Group} from "react-zdog";
import {useRef,useEffect,useCallback,useState} from "react";
//import useRefWithEffect from "../../../hooks/useRefWithEffect.jsx";
function InterfazModelo(props){
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
        if (rot && !props.rot){
            rotate();
        }
    },[rot])
    
    return (
        <Illustration dragRotate={true} zoom={1.5}>
            <Anchor ref={ref} translate={{y:-25}}>
                <Box stroke={10} color="gray" width={120} height={70} depth={3} />
                <Rect stroke={0} color="lightblue" fill={true} width={120} height={70} translate={{z:5}} />
                <Group>
                    <Rect stroke={0} color="rgb(252,165,165)" fill={true} width={10} height={10} translate={{z:8,y:25,x:-10}} />
                    <Rect stroke={0} color="rgb(248,113,113)" fill={true} width={10} height={20} translate={{z:8,y:20,x:10}} />
                    <Rect stroke={0} color="red" fill={true} width={10} height={30} translate={{z:8,y:10,x:30}} />
                </Group>
                <Group>
                    <Box stroke={10} color="gray" width={10} height={40} depth={3} translate={{x:0,y:45,z:-5}}/>
                    <Box stroke={10} color="gray" width={30} height={3} depth={15} translate={{y:70,z:-3}} />
                </Group>
                <Group>
                    <Rect stroke={0} color="rgba(0,0,0,0)" width={170} height={170} translate={{z:20}} />
                    <Box stroke={10} color="darkgray" width={9*2} height={16*2} depth={3} translate={{x:30,z:20,y:45}} />
                </Group>
                <Rect stroke={0} color="lightblue" fill={true} width={9*2} height={16*2} translate={{x:30,z:25,y:45}} />
                <Group>
                    <Rect stroke={0} color="rgb(252,165,165)" fill={true} width={2} height={10} translate={{z:30,x:25,y:45}} />
                    <Rect stroke={0} color="rgb(248,113,113)" fill={true} width={2} height={15} translate={{z:30,x:30,y:42.5}} />
                    <Rect stroke={0} color="red" fill={true} width={2} height={20} translate={{z:30,x:35,y:40}} />
                </Group>
            </Anchor>
        </Illustration>
    );
}

export default InterfazModelo;
