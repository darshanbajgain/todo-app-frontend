import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";


const Login = () => {

    const authContext = useAuth();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

    const onChangeUserHandler = (e) => {
        setUsername(e.target.value);
    }
    const onChangePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`);
        } else {
            authContext.setAuthenticated(false)
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="container py-5 my-lg-1">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="Login">
                        <h1>Login</h1>
                        {showErrorMessage && <div className="alert alert-danger">Authentication Failed</div>}
                        <div className="form-group">
                            <label>User Name:</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={onChangeUserHandler} />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={onChangePasswordHandler} />
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary my-4" onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
