import {HashLink as Link} from "react-router-hash-link";
function DenthistPage(props){
    window.scrollTo(0,0);
    return (
        <>
        <div className="w-full text-lg min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-200 to-green-400">
            <img src="./denthistlogo.png" alt="Logo de Paw5" className="m-4 mt-8 w-4/12 md:w-1/12 md:mb-8" />
            <h1 className="text-3xl font-bold text-center">DentHist</h1>
             <h3 className="w-9/12 font-bold text-center mb-2">Herramienta administrativa orientada a odontólogos</h3>
             <p className="w-9/12 mb-8">
                Historial clínico dental general de observaciones, 
tratamientos y datos de todos los pacientes. Te permite trabajar de 
forma didáctica gracias a su diseño, ahorrarte tiempo y costos y 
llevar así un control de la evolución del paciente de manera 
eficiente.
             </p>
             <div className="mb-8 w-8/12 grid grid-cols-3 md:grid-cols-3 grid-rows-auto">
                <i className="ri-cloud-fill text-5xl m-auto" />
                <i className="ri-line-chart-fill text-5xl m-auto" />
                <i className="ri-bar-chart-fill text-5xl m-auto" />
                <i className="ri-phone-fill text-5xl m-auto" />
                <i className="ri-smartphone-fill text-5xl m-auto" />
                <i className="ri-computer-fill text-5xl m-auto" />
            </div>
             <div className="w-full flex items-center justify-center">
                 <img src="./denthist/imagen1.png" alt="imagen de denthist" className="w-8/12 md:w-4/12 md:mb-4" />
             </div>
        </div> 
        <div className="fixed w-full flex items-center justify-between left-0 top-0 p-4">
            <Link to="/#programas" className="cursor-pointer"><img src="./patras.png" className="w-10 h-10" /></Link>
            <a className="w-12 h-12 border-black border-4 rounded flex items-center justify-center" href="https://wa.me/+542984247439"><i className="text-2xl ri-whatsapp-line" /></a>
        </div>
        </>
    );
}

export default DenthistPage;
