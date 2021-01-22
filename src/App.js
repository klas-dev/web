import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Inicio from "./paginas/inicio.jsx";
import DracoPage from "./paginas/dracoPage.jsx";
import DenthistPage from "./paginas/denthistPage.jsx";
import Paw5Page from "./paginas/paw5Page.jsx";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact><Inicio /></Route>
              <Route path="/draco" exact><DracoPage/></Route>
              <Route path="/paw5" exact><Paw5Page/> </Route>
              <Route path="/denthist" exact><DenthistPage/></Route>
        </Switch>
      </Router>
  );
}

export default App;
