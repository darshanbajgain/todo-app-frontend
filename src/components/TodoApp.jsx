import Error404 from "./Error404";
import Login from "./Login";
import Welcome from "./Welcome";
import ListTodos from "./ListTodos";
import Header from "./Header";
import Footer from "./Footer";
import LogOut from "./LogOut";
import UpdateTodoPage from "./UpdateTodoPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider, { useAuth } from "./security/AuthProvider";


const TodoApp = () => {


  const AuthenticatedRoute = ({ children }) => {

    const authContext = useAuth();

    if (authContext.isAuthenticated)
      return children;
    else
      return <Navigate to="/" />;

  }

  return (
    <div className="d-flex flex-column vh-100">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <div className="flex-grow-1">
            <Routes>
              <Route path='/' element={<Login />}></Route>
              <Route path='/login' element={<Login />}></Route>

              <Route path='/welcome/:username' element={
                <AuthenticatedRoute>
                  <Welcome />
                </AuthenticatedRoute>
              }></Route>

              <Route path='/list-todos' element={
                <AuthenticatedRoute>
                  <ListTodos />
                </AuthenticatedRoute>
              }></Route>

              <Route path='/list-todos/:id' element={
                <AuthenticatedRoute>
                  <UpdateTodoPage />
                </AuthenticatedRoute>
              }></Route>

             

              <Route path='/logout' element={
                <AuthenticatedRoute>
                  <LogOut />
                </AuthenticatedRoute>
              }></Route>

              <Route path='*' element={<Error404 />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ AuthProvider>
    </div>
  );
};

export default TodoApp;
