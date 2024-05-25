
import { useEffect, useState } from "react";
import { retrieveTodosForAllUsers, deleteTodoApi } from "./api/TodoApi";
import { useAuth } from "./security/AuthProvider";
import { useNavigate } from "react-router-dom";


const ListTodos = () => {

    // //your todos list objects
    // const todos = [{ id: 1, description: "Learn AWS" },
    // { id: 2, description: "Learn AWS" }
    // ]

    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const authContext = useAuth();
    const username = authContext.username;
    const navigate = useNavigate();


    function refreshTodos() {
        retrieveTodosForAllUsers(username)
            .then((response) => {
                console.log(response)
                setTodos(response.data)
            })
            .catch((error) => console.log(error))
    }


    useEffect(
        () => refreshTodos(), []
    )

    const deleteTodo = (id) => {
        console.log("clicked" + id);
        deleteTodoApi(username, id)
            .then(
                () => {
                    setMessage(`Todo with id: ${id} is deleted.`)
                    refreshTodos()
                }
            )
    }

    const updateTodo = (id) => {
        console.log("clicked" + id);
        navigate(`/list-todos/${id}`)
        
    }

    const addTodo = () => {
        navigate('/list-todos/-1')
    }

    return (
        <div className="container my-4 py-4">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center my-2 py-2">List of Todos</h2>
                    {
                        message && <div className="alert alert-warning">{message}</div>
                    }
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Is Done?</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    {/* <td>{todo.targetDate.toDateString()}</td> */}
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="contianer d-flex justify-content-center">
            <div className="btn btn-success m-4 py-2" onClick={addTodo}>Add New Todo </div>
            </div>
        </div>
    );
};

export default ListTodos;
