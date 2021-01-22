import EvolucionModelo from "./modelos/evolucionModelo.jsx";

function Nube(){
    return (
        <div className="w-4/5 md:w-full flex flex-col :md:flex-row items-center justify-centeri">
            <div style={{height:"240px"}}  className="w-full h-1/2 flex items-center justify-center">
                <EvolucionModelo />
            </div>
            <div className="w-8/12 md:w-3/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="w-full font-bold text-3xl text-center mb-4">Evolución</h1>
                <p className="text-center text-lg">Estamos en constante evolución junto con las nuevas tecnologías y nuestros programas se actualizan constantemente, sumándosele nuevas herramientas.</p>
            </div>
        </div>
    );
}

export default Nube;
