function Contacto(){
    return (
        <div id="contacto" className="w-full h-screen bg-white flex flex-col items-center justify-center border-t-4 border-black">
            <h1 className="w-8/12 font-bold text-3xl text-center mb-2">Contáctanos por nuestras redes sociales</h1>
            <div className="flex items-center justify-center">
                <a href="http://www.instagram.com/klas.dev.soft" className="m-4 p-4 flex items-center justify-center border-black border-4 rounded">
                    <i className="ri-instagram-line text-3xl" />
                </a>
                <a href="https://www.facebook.com/klas.dev.soft" className="m-4 p-4 flex items-center justify-center border-black border-4 rounded">
                    <i className="ri-facebook-line text-3xl" />
                </a> 
                <a href="https://wa.me/+542984247439" className="m-4 p-4 flex items-center justify-center border-black border-4 rounded">
                    <i className="ri-whatsapp-line text-3xl" />
                </a>
            </div>
            <h1 className="w-8/12 font-bold text-3xl text-center mt-4 mb-2">O por nuestros medios de contacto</h1> 
            <div className="flex items-center justify-center"> 
                <a href="tel:+542984247439" className="m-4 p-4 flex items-center justify-center border-black border-4 rounded">
                    <i className="ri-phone-line text-3xl" />
                </a>
                <a href="mailto:klas.contacto@gmail.com" className="m-4 p-4 flex items-center justify-center border-black border-4 rounded">
                    <i className="ri-mail-line text-3xl" />
                </a> 
            </div>
        </div>
    );
}

export default Contacto;
