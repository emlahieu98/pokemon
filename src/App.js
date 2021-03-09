
import './App.css';
import PokemonList from "./containers/PokemonList";
import { BrowserRouter,Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <img className="img-banner"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        }
      />
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={PokemonList} />
          <Redirect to={"/"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
