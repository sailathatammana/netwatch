//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

//Project Files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Header from "./header/Header";

export default function Browser({ isLogged }) {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>{isLogged ? <Logged /> : <Unlogged />}</Switch>
      </BrowserRouter>
    </>
  );
}
