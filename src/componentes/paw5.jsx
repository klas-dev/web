
import {Link} from "react-router-dom";
function Paw(){
  
    
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-200 to-purple-500">
            <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center">
                <div style={{height:"240px"}} className="w-4/12 flex flex-col items-center justify-end md:justify-center mb-4">
                    <img src="./paw5logo.png" className="w-10/12 md:w-2/5" alt="logo de paw5" /> 
                </div>
                <div className=" w-8/12 md:w-2/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="m-2 w-full text-center text-3xl font-bold">Paw5</h1>
                <p className="m-2 text-sm text-center mb-4">Sistema de asistencia clínica para veterinarias, que lleva un registro clinico de los animales y permite un contacto directo con sus respectivos dueños.</p> 
                <Link to="/paw5" className="m-auto p-2 border-black border-4 rounded cursor-pointer">Ver más</Link>
            </div>
            </div>
        </div>
    );
}

export default Paw;
