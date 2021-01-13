import React, { useState, useEffect } from 'react';

function Hero(props) {
    return (
        <div id="inicio" className={`snap-scroll w-full h-screen p-4 flex items-center justify-center bg-gradient-to-br from-white to-pink-400`}>
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
        <div id="ejemplos" className="snap-scroll w-full h-screen p-4 flex items-center justify-center relative bg-gradient-to-tr from-white to-pink-400">
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
        <div id="programas" className="snap-scroll w-full h-screen p-4 flex items-center justify-center relative bg-gradient-to-br from-white to-pink-400">
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
            return "bg-purple-100 rounded";
        } else {
            return "";
        }
    }
    return (
        <div className="w-full h-screen bg-white flex items-center justify-center p-4 snap-scroll">
            <div className="w-full flex items-start justify-between">
                <div className="w-1/3 p-4 flex flex-col items-center justify-start">
                    <img src="texto.png" className="mb-2" />
                    <h3 className="font-bold text-sm mb-2">Amamos lo que hacemos.</h3>
                    <p className="font-light text-xs">Nos gustan los retos, queremos solucionar problemas y encontrar la mejor manera de hacer mas confortable tu día a día en el trabajo.</p>
                </div> 
                <div className="w-full flex p-4 flex-col items-center justify-start">
                    <div className="w-full text-md font-bold flex items-center justify-center mb-4">
                        La tecnologia ayuda al hombre a construir de manera mas confortable y rapida sus tareas, solucionando problemas y mejorando trabajos. Nosotros somos constructores de tecnologia, te ayudamos a potenciar el rendimiento de tu negocio.
                    </div>
                    <div className="w-full flex items-start justify-between mb-4">
                        <div className={`transition-all w-full flex flex-col items-center justify-start ${estilo()}`}>
                            <h4 className="font-bold">contactate con nosotros</h4>
                            <a>klas.contacto@gmail.com</a>
                            <a>+54 2984247439</a>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start">
                            <h4 className="font-bold">Software Propio</h4>
                            <a>Draco</a>
                            <a>Paw5</a>
                            <a>Denthist</a>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start">
                            <h4 className="font-bold">redes</h4>
                            <div className="w-full m-2 flex items-center justify-center">
                                <a className="cursor-pointer m-2 p-2 border-black border-2 flex items-center justify-center rounded">
                                    <i className="ri-facebook-line" />
                                </a>
                                <a className="cursor-pointer m-2 p-2 border-black border-2 flex items-center justify-center rounded">
                                    <i className="ri-instagram-line" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-sm font-light flex items-center justify-center">
                        K L A S 2021 Mar del plata, Argentina - Diseño y desarrollo de software.
                    </div>
                </div>
            </div>
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
        if (!open && val == 1){
            return <div className=" border-black  transform transition-all hover:scale-110 motion-reduce:transform-none border-4 m-2 p-2 flex items-center justify-center rounded"><i className="ri-arrow-drop-up-line"/></div>
        }
    }
    function goInicio(){
        window.scrollTo(0,0);
    }
    function graph(){
            return <div className="z-100 cursor-pointer absolute top-0 left-0" onClick={()=>togle()} >{boton()}</div>
    }
    useEffect(()=>{
        if (open){
            setEstilo("w-screen h-screen");
        } else {
            setEstilo("w-0 h-0 hidden")
        }
    })
    var aclass = "text-2xl m-2 text-white transition-all transform hover:scale-110 motion-reduce:transform-none";
    return ( 
        <>
            <div className={`fixed bg-pink-400 transition-all flex items-center justify-center flex-col ${estilo}`}>
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
    let hideBar = ()=>{
        setTimeout(function(){
		    window.scrollTo(0, 1);
	    }, 0);
    }
    useEffect(()=>{
        window.addEventListener("load", hideBar);
        window.addEventListener('scroll', scrollPos, false);
        return () => {
            window.removeEventListener("load",hideBar);
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
