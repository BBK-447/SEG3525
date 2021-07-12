//import './App.css';

import Navbar  from './Navbar';
import Home from './Home';
import Cours from './Cours';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intervew from './Intervew';
import Infos from './Infos';
import Communication from './Communication';

function App() {


  return (
    <div className='App'>
        <div className="content">
          <Navbar/> 
          <Infos/>     
          <Cours/>
            <Home/>
            <Intervew/>
            <Communication/>
        </div>
    </div>
    
  );
}

export default App;
