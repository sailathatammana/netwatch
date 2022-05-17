// NPM packages
import { Link, useHistory } from "react-router-dom";

import { useAuth } from "state/AuthProvider";
import { logout } from "scripts/authentification";

export default function Home() {
  // Global state
  const { setIsLogged } = useAuth();
  const history = useHistory();

  // Methods
  async function onLogout() {
    await logout();
    setIsLogged(false);
    history.push("/");
  }
  return (
    <>
      <h1>User Home Page</h1>
      <Link to="/admin">Admin</Link>
      <br />
      <button className="sign-out" onClick={onLogout}>
        Sign out
      </button>
    </>
  );
}
