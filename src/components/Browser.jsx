//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

//Project Files
import Logged from "routes/Logged";
import Unlogged from "routes/Unlogged";
import Header from "./header/Header";
import Footer from "./Footer";

export default function Browser({ isLogged }) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>{isLogged ? <Logged /> : <Unlogged />}</Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
