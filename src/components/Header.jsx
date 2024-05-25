import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";

const Header = () => {

  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  function loggedOut() {
    authContext.logout();
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <h3 className="navbar-brand p-2 m-2" >Todo App</h3>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto p-2 mb-2 mb-lg-0">
            <li className="nav-item mx-2 px-2 py-2">
              {
                isAuthenticated &&
                <Link className="nav-link" to="/welcome/darshan">Home</Link>
              }
            </li>
            <li className="nav-item mx-2 px-2 py-2">
              {
                isAuthenticated &&
                <Link className="nav-link" to="/list-todos">Yours Todo Lists</Link>
              }
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav me-auto p-2 mb-2 mb-lg-0">
            <li className="nav-item">
              {
                isAuthenticated &&
                <Link className="nav-link my-2 py-2 px-2" to="/logout" onClick={loggedOut}>LogOut</Link>
              }

            </li>
            <li className="nav-item">
              {
                !isAuthenticated &&
                <Link className="nav-link  my-2 py-2 px-2" to="/"> LogIn</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
