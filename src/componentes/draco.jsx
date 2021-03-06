import {Link} from "react-router-dom";
function Draco(){  
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center pt-4 md:pt-0 md:justify-center bg-gradient-to-b from-red-500 to-pink-500">
            <div className="w-full flex flex-col md:flex-row items-center justify-start md:justify-center md:flex-row-reverse">
                <div className=" w-4/5 md:w-4/12 md:h-screen flex flex-col items-center justify-center">
                    <img src="./dracologo.png" className="md:w-5/12" alt="logo de draco" />
                </div>
                <div className="w-8/12 md:w-2/5 flex flex-col items-center md:items-start justify-center">
                    <h1 className="m-2 w-full text-center font-bold text-3xl md:text-4xl">Draco</h1>
                    <div className="m-2 mb-4 text-xs sm:text-sm text-center md:text-lg" >Sistema de administración y organización comercial completamente adaptable basado en los requisitos de tu negocio, pensado para facilitar solucionar los problemas administrativos mas habituales y diseñado para aumentar el rendimiento de tu emprendimiento.</div>
                    <Link to="/draco" className="m-auto font-bold p-2 md:text-xl rounded border-black border-4 cursor-pointer">Ver más</Link>
                </div>
            </div>
        </div>
    );
}

export default Draco;
