import {HashLink as Link} from "react-router-hash-link";

function Paw5Page(props){
    window.scrollTo(0,0);
    return (
    <>
        <div className="w-full text-lg min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-purple-200 to-purple-400">
            <img src="./paw5logo.png" alt="Logo de Paw5" className="m-4 mt-8 w-4/12" />
            <h1 className="text-3xl font-bold text-center">Paw5</h1>
             <h3 className="w-9/12 font-bold text-center mb-2">Sistema de asistencia clínica para veterinarias</h3>
             <p className="w-9/12 mb-8">Permite un acceso rápido, sencillo y claro de los datos de contacto 
de los clientes, junto con un historial clínico y de vacunación de sus 
respectivas mascotas. </p>
            <div className="mb-8 w-8/12 grid grid-cols-3 md:grid-cols-3 grid-rows-auto">
                <i className="ri-cloud-fill text-5xl m-auto" />
                <i className="ri-line-chart-fill text-5xl m-auto" />
                <i className="ri-bar-chart-fill text-5xl m-auto" />
                <i className="ri-phone-fill text-5xl m-auto" />
                <i className="ri-smartphone-fill text-5xl m-auto" />
                <i className="ri-computer-fill text-5xl m-auto" />
            </div>
            <h1 className="font-bold text-2xl mb-2">Herramientas</h1>
            <h3 className="font-bold text-xl">Clientes</h3>
            <p className="w-9/12 mb-4">
                Con un simple formulario se llenan los datos de contacto, y una vez cargado en el sistema permite tener acceso directo al whatsapp, E-mail o cada una de sus mascotas con un solo click desde la planilla personal.
            </p> 
            <div className="mb-4">
                <img src="./paw5/imagen1.png" alt="imagen del historial" className="w-8/12 m-auto mb-2 mt-2" />
            </div>
            <h3 className="font-bold text-xl">Libreta Digital</h3>
            <p className="w-9/12 mb-4">
              Los clientes tienen acceso a una libreta digital donde utilizando su 
número de documento podrán acceder a estas, teniendo acceso a 
todos los datos generales de sus mascotas, el último registro del 
historial y una lista de las vacunas que posee el animal y todo esto 
desde cualquier lugar con acceso a internet. 
            </p>
            <div className="mb-4">
                <img src="./paw5/imagen3.png" alt="imagen del formulario" className="w-8/12 m-auto mb-2 mt-2" />
            </div>
            <h3 className="font-bold text-xl">Mascotas</h3>
            <p className="w-9/12 mb-4">
                Solo con la información básica ya se puede agregar una mascota, 
conectándola directamente con su dueño por medio del documento 
de identidad de este, y generándole un DNI dentro del sistema a 
cada animal para brindarle identidad y permitiéndole al veterinario 
un acceso directo desde el inicio.
            </p>
            <div className="mb-4">
                <img src="./paw5/imagen2.png" alt="imagen del programa" className="w-8/12 m-auto mb-2 mt-2" />
            </div>
            <h3 className="font-bold text-xl">Historial</h3>
            <p className="w-9/12 mb-4">
                Desde la planilla de la mascota, se puede ver directamente el 
historial, permitiendo ver la información brindada en cada 
momento que fue atendido y su registro de vacunación. Con tan 
solo un botón se puede agregar tanto un registro a la historia 
clínica, como a la libreta de vacunaciones a través de un simple 
formulario.
            </p>
            <div className="mb-4">
                <img src="./paw5/imagen4.png" alt="imagen del formulario" className="w-8/12 m-auto mb-2 mt-2" />
            </div>
        </div> 
        <div className="fixed w-full flex items-center justify-between left-0 top-0 p-4">
            <Link to="/#programas" className="cursor-pointer"><img src="./patras.png" className="w-10 h-10" /></Link>
            <a className="w-12 h-12 border-black border-4 rounded flex items-center justify-center" href="https://wa.me/+542984247439"><i className="text-2xl ri-whatsapp-line" /></a>
        </div>
    </>
    );
}

export default Paw5Page;
