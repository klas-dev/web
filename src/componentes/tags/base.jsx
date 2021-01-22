import {Illustration,Shape,Anchor} from "react-zdog";
function Nube(){
    return (
        <div className="w-4/5 md:w-full flex flex-col :md:flex-row items-center justify-centeri">
            <div style={{height:"240px"}}  className="w-full h-1/2 flex items-center justify-center">
                <Illustration>
                    <Anchor>
                        <Shape color="black" stroke={20} />
                    </Anchor>
                </Illustration>
            </div>
            <div className="w-8/12 md:w-3/5 flex flex-col items-center md:items-start justify-center">
                <h1 className="w-full font-bold text-3xl text-center">En la Nube</h1>
                <p>aca va el texto dentro de lo que se va a decir de esta capacidad de nuestros programas.</p>
            </div>
        </div>
    );
}

export default Nube;
