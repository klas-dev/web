import Menu from "../componentes/menu.jsx";
import Hero from "../componentes/hero.jsx";
import Slider from "../componentes/slider.jsx";
import Contacto from "../componentes/contacto.jsx";
import Pie from "../componentes/pie.jsx";

import Nube from "../componentes/tags/nube.jsx";
import Datos from "../componentes/tags/datos.jsx";
import ContactoInteligente from "../componentes/tags/contacto.jsx";
import Escala from "../componentes/tags/escala.jsx";
import Interfaz from "../componentes/tags/interfaz.jsx";

import Draco from "../componentes/draco.jsx";
import Paw from "../componentes/paw5.jsx";
import Denthist from "../componentes/denthist.jsx";
export default function Inicio(){
    return (
        <div className="relative w-full flex flex-col items.center justify-start">
           <Hero /> 
            <Slider>
                <Nube />
                <Escala />
                <Datos />
                <ContactoInteligente />
                <Interfaz />
            </Slider>
            <Slider conborde={true}>
                <Draco />
                <Paw />
                <Denthist />
            </Slider>
            <Contacto />
            <Pie />
            <Menu />
        </div>
    );
}
