import DatosModelo from "./modelos/datosModelo.jsx";
function Datos(){
    return (
        <div className="w-4/5 md:w-full flex flex-col :md:flex-row items-center justify-centeri">
            <div style={{height:"240px"}}  className="w-full h-1/2 flex items-center justify-center">
                <DatosModelo />
            </div>
            <div className="w-8/12 md:w-3/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="w-full font-bold text-3xl text-center mb-4">Datos inteligentes</h1>
                <p className="text-center text-lg">Convierte tus datos en estadísticas y valores tangibles por vos, para que puedas centrarte en hacer crecer tu negocio.</p>
            </div>
        </div>
    );
}

export default Datos;
