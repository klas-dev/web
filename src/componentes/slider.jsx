import {useState} from "react";
function Slider(props){
    let [pos,setPos] = useState(0);
    function elegir(i){
        setPos(i);
    }
    function siguiente(e){
        if (pos<props.children.length-1){
            setPos(pos+1);
        } else {
            setPos(0);
        }
    }
    function anterior(e){
        if (pos > 0){
            setPos(pos-1);
        } else {
            setPos(props.children.length-1);
        }
    }
    function actual(){
        if (props.children && props.children.length > 0){
        let elegido = props.children[pos];
            return elegido;
        } else {
            return "";
        }
    }
    function botones(){
        if (props.children && props.children.length > 0){
            return props.children.map((el,i)=> 
                <div onClick={()=>elegir(i)} key={i} className={(pos === i?
                "w-6 h-6 m-2 bg-black rounded-full":
                "w-6 h-6 m-2 bg-black rounded-full cursor-pointer")
                }>
                <div className={(pos===i?"w-full h-full bg-rosa animate-ping rounded-full":"")}></div>
            </div>
            );
        } else {
            return "";
        }
    }
    return (
        <div id={props.id} className={`${props.conborde?"border-t-4 border-black":""} relative w-full h-screen flex flex-col items-center justify-start`}>
            <div className="w-full h-full flex items-center justify-center">
                {actual()} 
            </div>
            
            
            <div className="absolute top-1/2 left-0 w-full p-4 flex items-center justify-between">
                <button onClick={()=> anterior()} className="w-12 h-12 rounded bg-rosa flex items-center justify-center">
                    <i className="ri-arrow-left-line"/>
                </button>
                <button onClick={()=> siguiente()} className="w-12 h-12 rounded bg-rosa flex items-center justify-center">
                    <i className="ri-arrow-right-line"/>
                </button>
            </div>
            <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
                {botones()}
            </div>
        </div>
    );
}

export default Slider;
