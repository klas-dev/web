import React, { useState, useEffect } from 'react';

function Hero(props) {
    return (
        <div id="inicio" className="w-full bg-gray-200 h-screen p-4">
            hero
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
            let estado = (pos == i?"m-2 w-4 h-4 rounded-full bg-green-500":"m-2 w-4 h-4 rounded-full bg-red-500");
            return (
                <div className={estado}></div>
            );
        });
    }

    return (
        <div id="ejemplos" className="w-full bg-red-200 h-screen p-4 flex items-center justify-center relative">
            <div className="w-full flex absolute bottom-2 left-0 items-center justify-center">{activo()}</div>
            <div onClick={()=>anterior()}>
                Atr
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="h-full">{lista[pos]}</div> 
            </div>
            <div onClick={()=>siguiente()}>
                Sig
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
            let estado = (pos == i?"m-2 w-4 h-4 rounded-full bg-green-500":"m-2 w-4 h-4 rounded-full bg-red-500");
            return (
                <div className={estado}></div>
            );
        });
    }
    return (
        <div id="programas" className="w-full bg-green-200 h-screen p-4 flex items-center justify-center relative">
            <div className="w-full absolute left-0 bottom-2 flex items-center justify-center">{activo()}</div>
            <div onClick={()=>anterior()}>
                Atr
            </div>
            <div className="flex flex-col items-center justify-center w-full relative">
                <div className="h-full">{lista[pos]}</div> 
            </div>
            <div onClick={()=>siguiente()}>
                Sig
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
        </div>
    );
}
function TogleMenu(props){
    let [estilo,setEstilo] = useState("");
    useEffect(()=>{
        if (!props.togle){
            setEstilo("hidden");
        } else {
            setEstilo("z-40 absolte top-0 left-0 w-screen h-screen bg-red-500 text-white flex flex-col items-center justify-center");
        }
    },[props.togle]);
    return (
        <div className={estilo}>
            <a href="#inicio">Inicio</a>
            <a href="#ejemplos">Ejemplos</a>
            <a href="#programas">Programas</a>
        </div>
    );
}
function Menu(props){
    let [open,setOpen] = useState(false);
    let [vieja,setVieja] = useState("");
    let val = props.val;
    function togle(){
        let nuevo = !open;
        setOpen(nuevo);
    }
    function boton(){
        if (open){
            return <div>M.A</div>
        } else {
            return <div>M.C</div>
        }
    }
    function graph(){
        if (val === 1){
            return <a href='#inicio' className="z-400 cursor-pointer">Arriba</a>
        } else{
            return <div className="z-100 cursor-pointer absolute top-2 left-2" onClick={()=>togle()} >{boton()}</div>
        }
    }
    useEffect(()=>{
        if (open){
            if (vieja !== window.location.href){
                setOpen(false);
                setVieja(window.location.href);
            }
        }
    })
    return (
        <div className="fixed top-0 left-0">
            {graph()}
            <TogleMenu togle={open} />
        </div>
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
        <Hero />
        <Ejemplos />
        <Programas />
        <Pie scroll={scroll} />
        <Menu val={scroll} />
    </div>
  );
}

export default App;
