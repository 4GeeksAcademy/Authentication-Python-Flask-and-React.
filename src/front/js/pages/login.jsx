import React from "react";
import { useForm } from "../component/useForm";
import "../../styles/login.css";

export const Login = () => {
  const [logged, setLogged] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = logged;
  const loggedUser = async (ev) => {
    ev.preventDefault();
    await login(email, password);
  };

  // useEffect(() => {},[])
  return (
    <div className="log container-fluid d-flex flex-column align-items-center">
      <div className="card w-50 bg-secondary">
        <form onSubmit={loggedUser}>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            className="form-control px-2"
            value={email}
            onChange={setLogged}
          />
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="form-control px-2"
            value={password}
            onChange={setLogged}
          />
          <div className="d-grid col-6 mx-auto py-2">
            <button className="btn btn-success btn-lg" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
