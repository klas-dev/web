import {Link} from "react-router-dom";
function Denthist(){
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-green-500">
            <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center">    
        <div style={{height:"240px"}} className="mb-5 md:mb-0 w-6/12 md:w-4/12 flex flex-col items-center justify-end md:justify-center">
            <img className="w-3/5 md:w-4/12" src="./denthistlogo.png" alt="logo de denthist" />
            </div>
            <div className="w-8/12 md:w-2/5 flex flex-col items-center md:items-center justify-center">
            <h1 className="m-2 w-full text-center text-3xl md:text-4xl font-bold">DentHist</h1>
            <p className="m-2 text-sm md:text-lg text-center mb-4">Herramienta administrativa orientada a odontólogos, que lleva un historial clínico dental de los pacientes y un fácil acceso a sus medios de contacto.</p>
            <Link to="/denthist" className="m-auto font-bold md:text-xl p-2 border-black border-4 rounded cursor-pointer">Ver más</Link>
            </div>
        </div>
        </div>
    );
}

export default Denthist;
