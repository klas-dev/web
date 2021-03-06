function Pie(){
    let ano = new Date().getFullYear();
    return (
        <footer style={{height:"240px"}} className="w-full p-4 flex flex-col items-center justify-center bg-pink-200 border-black border-t-4">
            <div className="w-full flex flex-col md:flex-row items-center justify-between" >
                <img src="./texto.png" className="w-4/12 mb-4 md:ml-32 md:w-36" />
                <div className="flex flex-col items-start md:items-end justify-center">
                    <h2 className="text-sm font-bold md:text-lg mb-2">Construye el futuro de tu negocio junto a nosotros...</h2>
                    <a className="text-sm">klas.contacto@gmail.com</a>
                    <a className="text-sm">+54 298 424 743 9</a>
                </div>
            </div>
            <div className="mt-8 w-full flex items-center justify-center text-light text-center text-xs">
                <span className="font-bold">K L A S</span>&nbsp;{ano} Mar del Plata, Argentina.
            </div>
            <div className="w-full flex items-center justify-center text-light text-center text-xs">
                Diseño y desarrollo de software.
            </div>
        </footer>
    );
}

export default Pie;
