import {Tween} from "es6-tween";
import {useState} from "react";
import InterfazModelo from "./modelos/interfazModelo.jsx";
function Nube(){
    let [rot,setRot] = useState(0);
    let y = 0;
    let tl = new Tween(y).to(100,5);
    tl.on("update",(y)=>{
        console.log("cambia");
    })
    tl.start();
    return (
        <div className="w-4/5 md:w-full flex flex-col :md:flex-row items-center justify-center">
            <div style={{height:"240px"}}  className="w-full h-1/2 flex items-center justify-center">
                <InterfazModelo /> 
            </div>
            <div className="w-9/12 md:w-3/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="w-full font-bold text-3xl text-center mb-1">Interfaz gráfica</h1>
                <h1 className="w-full font-bold text-3xl text-center">100%</h1>
                <h1 className="w-full font-bold text-3xl text-center mb-4">responsive</h1>
                <p className="text-center">Adaptados para los distintos tipos de dispositivos para que sus usos sean más simples e intuitivos, permitiéndote ahorrar tiempo y esfuerzo.</p>
            </div>
        </div>
    );
}

export default Nube;
