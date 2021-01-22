import NubeModelo from "./modelos/nubeModelo.jsx";
function Nube(){
    return (
        <div className="w-4/5 md:w-full flex flex-col :md:flex-row items-center justify-center">
            <div style={{height:"240px"}}  className="w-full h-1/2 flex items-center justify-center">
                <NubeModelo /> 
            </div>
            <div className="w-8/12 md:w-3/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="w-full font-bold text-3xl text-center mb-4">En la Nube</h1>
                <p className="text-center">
                    Trabajamos con las últimas tecnologías, es por eso que nuestros programas te acompañan a todos lados para administrar tu empresa en tiempo real, pidiendo como único requisito un dispositivo para acceder a Internet.
                </p>
            </div>
        </div>
    );
}
export default Nube;
