function Hero(){
    return (
        <div id="inicio" className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-t from-white to-pink-300">
            
            <div className="w-full md:w-2/5 mb-4 md:mb-0 flex flex-col items-center justify-center">
                <img src="./logo.png" alt="KLAS" className="mb-3 w-8/12" />
            <h1 className="m-0 p-0 font-semibold text-lg flex items-center text-center justify-center">Desarrollo y diseño de software</h1>
            </div>
            <div className="w-3/4 md:w-2/5 p-3 m-2 md:p-5 md:ml-12 flex flex-col items-center justify-center border-black border-4 rounded">
                <h2 className="font-bold text-xl mb-2">¿Quiénes somos?</h2>
                <p className="text-base md:text-justify" style={{textJustify:"inter-character"}}>Nosotros somos constructores de tecnología, nos gustan los retos por lo que buscamos solucionar problemas de distinta índole y asi encontrar la manera más eficaz para agilizar tu trabajo y potenciar el rendimiento de tu negocio.</p>
            </div>
        </div>
    );
}
export default Hero;
