import { Link, useParams } from "react-router-dom";

const Welcome = () => {

  const { username } = useParams();


  return (
    <div className="container py-5 my-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="py-2">Welcome, let&#39;s get started</h1>
            <h2 className="py-2">Hi, {username}</h2>
            <h3 className="py-2">Check your todo <Link to="/list-todos">here</Link></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
