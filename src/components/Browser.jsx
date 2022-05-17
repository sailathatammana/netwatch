//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

//Project Files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";

export default function Browser({ isLogged }) {
  return (
    <BrowserRouter>
      <Switch>{isLogged ? <Logged /> : <Unlogged />}</Switch>
    </BrowserRouter>
  );
}
