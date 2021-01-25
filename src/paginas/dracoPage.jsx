import {HashLink as Link} from "react-router-hash-link";
function DracoPage(props){ 
    window.scrollTo(0,0);
    return (
        <>
        <div className="w-full text-lg min-h-screen bg-gradient-to-b from-red-500 to-pink-400 flex flex-col items-center justify-start">
            <img src="./dracologo.png" alt="Logo de Draco" />
            <h1 className="font-bold text-4xl text-center">Draco</h1>
            <h3 className="w-9/12 font-bold text-center mb-2">Sistema de administracion y organización comercial</h3>
            <p className="w-9/12 text-center mb-8">Este sistema busca abarcar todas las áreas administrativas de un negocio de manera sencilla y práctica.</p>
            <div className="mb-8 w-8/12 grid grid-cols-3 md:grid-cols-3 grid-rows-auto">
                <i className="ri-cloud-fill text-5xl m-auto" />
                <i className="ri-line-chart-fill text-5xl m-auto" />
                <i className="ri-bar-chart-fill text-5xl m-auto" />
                <i className="ri-phone-fill text-5xl m-auto" />
                <i className="ri-smartphone-fill text-5xl m-auto" />
                <i className="ri-computer-fill text-5xl m-auto" />
            </div>
            <h1 className="font-bold text-2xl mb-2">Herramientas</h1>
            <h3 className="font-bold text-xl">Administración</h3>
            <p className="w-9/12 mb-2">
                Se encarga de presentar los balances, brindandote estadísticas de todo lo que necesites visualizar, gestionar el personal; Agregando a cada empleado con sus datos de contacto y permitiendo ver un historial de los movimientos que este genera dentro del negocio; Y el manejo de los productos y servicios; Pudiendo cargar el stock en las diferentes sucursales, editar los costos, crear agrupaciones de productos y administrar descuentos.
            </p>
            <p className="italic w-9/12 mb-4">
                Es un herramienta restringida solo para el uso de la cuenta principal del administrador.
            </p>
            <div className="mb-4">
                <img src="./draco/imagen1.png" alt="imagen del programa de admin" className="w-8/12 md:w-3/12 m-auto mb-2 mt-2" />
            </div>
            <h3 className="font-bold text-xl">Sucursal</h3>
            <p className="w-9/12 mb-4">
                Aquí se puede manejar el movimiento de la caja con sus ingresos y 
egresos, generar notas para los empleados, marcar el movimiento 
de productos de una sucursal a la otra, utilizar los datos del 
personal, generar un registro de los clientes, realizar sorteos, 
generar documentos con firma electrónica, ver un historial de los 
movimientos del cliente y gestionar turnos por medio de un 
calendario. El sistema realiza las cuentas automáticamente.
            </p>
            <div className="mb-4">
                <img src="./draco/imagen2.png" alt="imagen del programa de admin" className="w-8/12 md:w-3/12 m-auto mb-2 mt-2" />
            </div>
        </div>
        <div className="fixed w-full flex items-center justify-between left-0 top-0 p-4">
            <Link to="/#programas" className="cursor-pointer"><img src="./patras.png" alt="" className="w-10 h-10" /></Link>
            <a className="w-12 h-12 border-black border-4 rounded flex items-center justify-center" href="https://wa.me/+542984247439"><i className="text-2xl ri-whatsapp-line" /></a>
        </div>
        </>
    );
}

export default DracoPage;
