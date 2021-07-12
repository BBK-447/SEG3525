import face from './images/facebook.jpg';
import inst from './images/icons8-instagram-48.png';
import faceInst from './images/facebook.jpg'
const Communication = () => {
    return (
        <div className="Communication">
            <h3 id='com' > <strong>Communauté</strong> </h3>
            <p className="com">
                <a href="https://fr-ca.facebook.com/"><img src={faceInst} />
                </a>
            </p>
            <i style={{fontSize : "large"}}>
                <strong>Créer des liens aussi solides que votre passion sur notre facebook et
                instagram!!!</strong>
            </i>
        </div>
    );
}

export default Communication;