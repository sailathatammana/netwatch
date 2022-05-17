//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

//Project Files
import Logged from "routes/Logged";
import UnLogged from "routes/UnLogged";

export default function Browser({ isLogged }) {
  return (
    <BrowserRouter>
      <Switch>{isLogged ? <Logged /> : <UnLogged />}</Switch>
    </BrowserRouter>
  );
}
