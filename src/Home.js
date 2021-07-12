import service2 from './images/icons8-calendar.gif';
const Home = () => {

    return ( 
        
        <div className= "create" id = "form">
            <h3>Compléter le formulaire pour confirmer votre réservation</h3>
            <img src={service2} alt="" srcset="" />
            <form action="">

            <label for="Nom" name="fname">Nom*:</label>
            <input type="text" required />

            <label htmlFor="">Prenom*:</label>
            <input type="text" />

            <label for="email">Couriel*:</label>
            <input type="email" class="form-control" id="email" placeholder="user@gmail.com"
            title="We use it to remind you the date of the appointment" required/>
            
            <label for="number">Numéro de téléphone*:</label>
            <input value="" type="text" id="phone" class="form-control" required/>

            <label for="date"> Choisissez une date de <strong>cours</strong> disponible*:</label>
            <input type="text" class="form-control" id="dateInput" required title="Appointement date"/>

            <label for="date"> Choisissez une date de <strong>terrain</strong> disponible*:</label>
            <input type="text" class="form-control" id="date" required title="Appointement date"/>
            
            
            <button type="submit" className="btn btn-primary" id="inscription" onclick="confirmMessage()">Confirmer</button>
            </form>          
        </div>
    );
    
}
 
export default Home;