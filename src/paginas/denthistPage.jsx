import {HashLink as Link} from "react-router-hash-link";
function DenthistPage(props){
    window.scrollTo(0,0);
    return (
        <>
        <div className="w-full min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-green-200 to-green-400">
            <img src="./denthistlogo.png" alt="Logo de Paw5" className="m-4 mt-8 w-4/12" />
            <h1 className="text-3xl font-bold text-center">DentHist</h1>
             <h3 className="w-9/12 font-bold text-center mb-2">Herramienta administrativa orientada a odontólogos</h3>
             <p className="w-9/12 mb-8">
                Historial clínico dental general de observaciones, 
tratamientos y datos de todos los pacientes. Te permite trabajar de 
forma didáctica gracias a su diseño, ahorrarte tiempo y costos y 
llevar así un control de la evolución del paciente de manera 
eficiente.
             </p>
            <div className="mb-8">logos3d</div>
        </div> 
        <div className="fixed w-full flex items-center justify-between left-0 top-0 p-4">
            <Link to="/#programas" className="cursor-pointer"><img src="./patras.png" className="w-10 h-10" /></Link>
            <a className="w-12 h-12 border-black border-4 rounded flex items-center justify-center" href="https://wa.me/+542984247439"><i className="text-2xl ri-whatsapp-line" /></a>
        </div>
        </>
    );
}

export default DenthistPage;
