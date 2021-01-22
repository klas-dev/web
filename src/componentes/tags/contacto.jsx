import  AsistenciaModelo from "./modelos/asistenciaModelo.jsx";

function Nube(){
    return (
        <div className="w-4/5 md:w-full flex flex-col :md:flex-row items-center justify-centeri">
            <div style={{height:"240px"}}  className="w-full h-1/2 flex items-center justify-center">
                <AsistenciaModelo /> 
            </div>
            <div className="w-8/12 md:w-3/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="w-full font-bold text-3xl text-center mb-4">Asistencia</h1>
                <p className="text-center md:text-lg">Poseen asistencia en los horarios laborales, además de soportes de documentación multimedia y escrita.</p>
            </div>
        </div>
    );
}

export default Nube;
