import service1 from './images/icons8-service-bell-64.png'
const Cours = () => {
    return (
        <div>
            <h2 id="course">Nos cours offerts </h2>
            <img src={service1} alt="" srcset="" />
            <table class="table table-info table-hover">
                <thead>
                    <tr>
                        <th scope="col">
                            <h2>Cours</h2>
                        </th>
                        <th scope="col">
                            <h2>Price</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Débutant </td>
                        <td>150$</td>
                    </tr>

                    <tr>
                        <td>Intermediare </td>
                        <td>170$</td>
                    </tr>

                    <tr>
                        <td>Professionnel</td>
                        <td>180$</td>
                    </tr>
                </tbody>
            </table>
            <label for = "cour"><h3>Choisissez un cours:</h3>

            <select name="cour" id="cours">
                <option value="cours1" id="cours1">Choisissez un cours</option>
                <option value="cours1" id="cours1">Debutant</option>
                <option value="cours2" id="cours2">Intermediaire</option>
                <option value="cours3" id="cours3">Avancee</option>
            </select>
            </label>

            <h2 id="ground">Tous nos terrains </h2>
            <img src={service1} alt="" srcset="" />
            <table class="table table-info table-hover" id="ground">
                <thead>
                    <tr>
                        <th scope="col">
                            <h2>Terrains</h2>
                        </th>
                        <th scope="col">
                            <h2>Prix</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Terrain 1</td>
                        <td>150$</td>
                    </tr>

                    <tr>
                        <td>Terrain 2</td>
                        <td>170$</td>
                    </tr>

                    <tr>
                        <td>Terrain 3</td>
                        <td>180$</td>
                    </tr>
                </tbody>
            </table>
            <label for="expert">
                <h3>Choisissez un terrain:</h3>
            </label>
            <select name="expert" id="terrain">
                <option value="terre1" id="">Choisissez un terrain</option>
                <option value="terre2" id="terrain1">terrain 1</option>
                <option value="terre3" id="terrain2">terrain 2</option>
                <option value="terre4" id="terrain3">terrain 3</option>
            </select>
        </div>
    );
}

export default Cours;