import {useState,useEffect} from "react";
import {HashLink as Link} from "react-router-hash-link";
import {useLocation} from "react-router-dom";
function Menu(){
    let location = useLocation();
    let [abierto,setTogle] = useState(false);
    function togle(){
        setTogle( !abierto );
    }
    useEffect(()=>{
        if (abierto){
            setTogle(false);
        }
    },[location]);
    function actual(loc){
        if (loc === location.hash){
            return "text-pink-400 font-semibold";
        } else {
            return "";
        }
    }
    return (
        <>
        <div className={`fixed transition-all overflow-hidden ${(abierto?
            "top-0 left-0 w-full h-screen bg-gradient-to-r from-white to-pink-200 flex items-center justify-center":
            "w-0 h-0")}`
        }>
            <img src="./jfmt.png" className="transform scale-negativo absolute bottom-0 right-0"/>
            <div className={(abierto?"flex flex-col items-center justify-center":"hidden")}>
                <Link to="/#" className={`menuitem ${actual("")} text-3xl mb-4`}>Inicio</Link>
                <Link to="/#recursos" className={`menuitem ${actual("#recursos")} text-3xl mb-4`}>Recursos</Link>
                <Link to="/#programas" className={`menuitem ${actual("#programas")} text-3xl mb-4`}>Programas</Link>
                <Link to="/#contacto" className={`menuitem ${actual("#contacto")} text-3xl mb-4`}>Contacto</Link>
            </div>
        </div>
        <a href="https://wa.me/+542984247439" className="fixed right-4 top-4 w-12 h-12 border-black border-4 rounded flex items-center justify-center animation-call">
            <i className="text-2xl ri-whatsapp-line" />
        </a>
        <div onClick={()=>togle()} className="fixed cursor-pointer left-4 top-4 w-12 h-12 border-black border-4 rounded flex items-center justify-center">
            <i className={(!abierto?"text-2xl ri-menu-line":"text-2xl ri-close-line")} />
        </div>
        </>
    );
}

export default Menu;
