import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./security/AuthProvider";
import { createTodoApi, retrieveOneTodoApi, updateTodoApi } from "./api/TodoApi";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";

const UpdateTodoPage = () => {

  const authContext = useAuth();
  const username = authContext.username;
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const navigate = useNavigate();

  useEffect(
    () => retrieveOneTodoForUpdate(),
    [id]
  )

  function retrieveOneTodoForUpdate() {

    if (id != -1) {
      retrieveOneTodoApi(username, id)
        .then(response => {
          setDescription(response.data.description)
          setTargetDate(response.data.targetDate)
        })
        .catch(error => console.log(error))
    }

  }

  function onSubmit(value) {

    const todo = {
      id: id,
      username: username,
      description: value.description,
      targetDate: value.targetDate,
      done: false
    }

    if (id == -1) {
      createTodoApi(username, todo)
        .then(response => {
          navigate('/list-todos')
          console.log(response)
        })
        .catch(error => console.log(error))
    }
    else {
      updateTodoApi(username, id, todo)
        .then(response => {
          navigate('/list-todos')
          console.log(response)
        })
    }

  }

  function validate(value) {
    let erros = {}
    if (value.description.length < 8) {
      erros.description = "Enter atlease 8 characters for description"
    }
    if (value.targetDate == "" || !moment(value.targetDate).isValid()) {
      erros.targetDate = "Please enter a date"
    }
    return erros;
  }



  return (
    <div className="container  my-4 py-4">
      <h1 className="text text-center">
        Enter your Todo Details:
      </h1>
      <div className="d-flex justify-content-center m-5">
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {
            (props) => (

              <Form>
                <fieldset className="form-group">
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="alert alert-warning"

                  />
                  <ErrorMessage
                    name="targetDate"
                    component="div"
                    className="alert alert-warning"
                  />
                  <label>Description</label>
                  <Field type="text" className="form-control" name="description" />
                </fieldset>
                <fieldset className="form-group">
                  <label>TargetDate</label>
                  <Field type="date" className="form-control" name="targetDate" />
                </fieldset>
                <button className="btn btn-success m-5 py-2 px-4" type="submit">Save</button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default UpdateTodoPage;