import React, { useState, useEffect } from 'react';

function Hero(props) {
    return (
        <div id="inicio" className={`w-full h-screen p-4 flex items-center justify-center bg-gradient-to-br from-white to-pink-400`}>
            <div className="flex flex-col w-full items-center justify-start">
                <img className="" src="logo.png" />
            </div>
            <div className="flex flex-col w-full items-center justify-start">
                <div className="font-xs">Desarrollamos soluciones inteligentes.</div>
                <div className="flex items-center justify-center m-2 p-2 rounded border-black text-black border-4 cursor-pointer hover:border-white hover:text-white transform transition-all hover:scale-110 motion-reduce:transform-none"><i className="ri-whatsapp-line"/> Contactate con nosotros</div>
            </div>
        </div>
    );
}
function Ejemplos(props){
    let [pos,setPos] = useState(0);
    let lista = ["tab1","tab2","tab3"];
    function siguiente(){
        let nueva = (pos+1 >= lista.length-1?lista.length-1:pos+1);
        setPos(nueva);
    }
    function anterior(){
        let nueva = (pos - 1<=0?0:pos-1);
        setPos(nueva);
    }
     function activo(){
        return lista.map((item,i)=>{
            let estado = (pos == i?"relative m-2 w-4 h-4 rounded-full bg-black":"m-2 w-4 h-4 rounded-full bg-black");
            return (
                <> 
                <div className={estado}>
                     {(pos === i?<div className="absolute top-0 left-0 bg-red-500 opacity-70 animate-ping rounded-full h-4 w-4"></div>:<div></div>)}
                </div>
                </>
            );
        });
    }

    return (
        <div id="ejemplos" className="w-full h-screen p-4 flex items-center justify-center relative bg-gradient-to-tr from-white to-pink-400">
            <div className="w-full flex absolute bottom-2 left-0 items-center justify-center">{activo()}</div>
            <div className="m-2 p-2" onClick={()=>anterior()}>
                <i className="ri-arrow-drop-left-line text-3xl font-bold transition-all active:bg-red-400 rounded-full cursor-pointer" />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="h-full">{lista[pos]}</div> 
            </div>
            <div onClick={()=>siguiente()}>
                <i className="ri-arrow-drop-right-line text-3xl font-bold transition-all active:bg-red-400 rounded-full cursor-pointer" />
            </div>
        </div>
    );
}
function Programas(props){
    let [pos,setPos] = useState(0);
    let lista = ["tab1","tab2","tab3"];
    function siguiente(){
        let nueva = (pos+1 >= lista.length-1?lista.length-1:pos+1);
        setPos(nueva);
    }
    function anterior(){
        let nueva = (pos - 1<=0?0:pos-1);
        setPos(nueva);
    }
     function activo(){
        return lista.map((item,i)=>{
            let estado = (pos == i?"relative m-2 w-4 h-4 rounded-full bg-black":"m-2 w-4 h-4 rounded-full bg-black");
            return (
                <> 
                <div className={estado}>
                     {(pos === i?<div className="absolute top-0 left-0 bg-red-500 opacity-70 animate-ping rounded-full h-4 w-4"></div>:<div></div>)}
                </div>
                </>
            );
        });
    }

    return (
        <div id="programas" className="w-full h-screen p-4 flex items-center justify-center relative bg-gradient-to-br from-white to-pink-400">
            <div className="w-full flex absolute bottom-2 left-0 items-center justify-center">{activo()}</div>
            <div className="m-2 p-2" onClick={()=>anterior()}>
                <i className="ri-arrow-drop-left-line text-3xl font-bold transition-all active:bg-red-400 rounded-full cursor-pointer" />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="h-full">{lista[pos]}</div> 
            </div>
            <div onClick={()=>siguiente()}>
                <i className="ri-arrow-drop-right-line text-3xl font-bold transition-all active:bg-red-400 rounded-full cursor-pointer" />
            </div>
        </div>
    );
}

function Pie(props){
    function estilo(){
        if (props.scroll === 1){
            return "bg-red-100";
        } else {
            return "";
        }
    }
    return (
        <div className="w-full bg-blue-200 p-4">
            pie de pagina <span className={estilo()}>telefono pa</span>
            <img src="texto.png" />
        </div>
    );
}

function Menu(props){
    let [open,setOpen] = useState(false);
    let [estilo,setEstilo] = useState("bg-red-300 w-full h-screen");
    let val = props.val;
    function togle(){
        let nuevo = !open;
        setOpen(nuevo);
    }
    function boton(){
        if (open){
            return <div className=" text-white  transform transition-all hover:scale-110 motion-reduce:transform-none border-white border-4 m-2 p-2 flex items-center justify-center rounded "><i className="ri-close-line text-3xl" /></div>
        } else {
            return <div className=" border-black  transform transition-all hover:scale-110 motion-reduce:transform-none border-4 m-2 p-2 flex items-center justify-center rounded"><i className="ri-menu-2-line text-3xl" /></div>
        }
    }
    function graph(){
        if (val === 1){
            return <a href='#inicio' className="z-400 transform transition-all hover:scale-110 motion-reduce:transform-none cursor-pointer text-3xl border-black border-4 m-2 p-2 flex items-center justify-center rounded"><i className="ri-arrow-drop-up-line" /></a>
        } else{
            return <div className="z-100 cursor-pointer absolute top-0 left-0" onClick={()=>togle()} >{boton()}</div>
        }
    }
    useEffect(()=>{
        if (open){
            setEstilo("transition-all fixed left-0 top-0 w-screen h-screen bg-red-300 flex items-center justify-center flex-col");
        } else {
            setEstilo("transition-all w-0 h-0 bg-white")
        }
    })
    var aclass = "text-2xl m-2 text-white transition-all transform hover:scale-110 motion-reduce:transfrom-none";
    return ( 
        <>
            <div className={estilo}>
                <a className={aclass} onClick={()=>togle()} href="#inicio">Inicio</a>
                <a className={aclass} onClick={()=>togle()} href="#ejemplos">Ejemplos</a>
                <a className={aclass} onClick={()=>togle()} href="#programas">Programas</a>
            </div>
            <div className="fixed top-0 left-0">
                {graph()} 
            </div>
        </>
    );
}
function App() {
    let [scroll,setScroll] = useState(0);
    let scrollPos = ()=>{
        setScroll(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollPos, false);
        return () => {
            window.removeEventListener('scroll', scrollPos);
        };
    },[])

    return (
    <div className="w-full flex flex-col items-center justify-start relative"> 
        <Hero scroll={scroll} />
        <Ejemplos />
        <Programas />
        <Pie scroll={scroll} />
        <Menu val={scroll} />
    </div>
  );
}

export default App;
