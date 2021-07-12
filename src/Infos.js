import { height } from "dom-helpers";
import logo from "./images/logo-tennis.jpg"
const Infos = () => {
    return ( 
        <div className=" p-4 my-3 border bg-light">
        <img src={logo} style={{width: "50", height : "50"}}  />
        <h1 className=""> A propos de nous</h1>
        <p> Nous sommes un site d'organisme communautaire situé à Hull/Gatineau
        </p>
        <p style={{fontSize:"font-size: 25px; padding-left: 1.5rem"}}>Nous procurons la <strong>meilleur</strong> expérience de
            tennis
            à nos clients customers
        </p>
    </div>
     );
}
 
export default Infos;