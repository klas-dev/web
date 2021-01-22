import {Link} from "react-router-dom";

function DracoPage(props){ 
    return (
        <>
        <div className="w-full min-h-screen bg-gradient-to-b from-red-500 to-pink-400 flex flex-col items-center justify-start">
            <img src="./dracologo.png" alt="Logo de Draco" />
            <h1 className="font-bold text-3xl text-center">Draco</h1>
            <h3 className="w-9/12 font-bold text-center mb-2">Sistema de administracion y organización comercial</h3>
            <p className="w-9/12 mb-8">Este sistema busca abarcar todas las áreas administrativas de un negocio de manera sencilla y práctica.</p>
            <div className="mb-8">logos3d</div>
            <h1 className="font-bold text-2xl mb-2">Herramientas</h1>
            <h3 className="font-bold text-xl">Administración</h3>
            <p className="w-9/12 mb-2">
                Se encarga de presentar los balances, brindandote estadísticas de todo lo que necesites visualizar, gestionar el personal; Agregando a cada empleado con sus datos de contacto y permitiendo ver un historial de los movimientos que este genera dentro del negocio; Y el manejo de los productos y servicios; Pudiendo cargar el stock en las diferentes sucursales, editar los costos, crear agrupaciones de productos y administrar descuentos.
            </p>
            <p className="italic w-9/12 mb-4">
                Es un herramienta restringida solo para el uso de la cuenta principal del administrador.
            </p>
            <div className="mb-4">imagenes del programa</div>
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
            <div className="mb-4">imagenes del programa</div>
        </div>
        <div className="fixed w-full flex items-center justify-between left-0 top-0 p-4">
            <Link to="/" className="cursor-pointer"><img src="./patras.png" className="w-10 h-10" /></Link>
            <a className="w-12 h-12 border-black border-4 rounded flex items-center justify-center" href="https://wa.me/+542984247439"><i className="text-2xl ri-whatsapp-line" /></a>
        </div>
        </>
    );
}

export default DracoPage;