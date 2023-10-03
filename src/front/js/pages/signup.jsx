import React from "react";
import { useState, useEffect } from "react";

export const Signup = () => {
  const [signed, setSigned] = useState(null);

  // useEffect(() => {}, []);

  return (
    <div className="container-fluid d-flex flex-column justify-content-between">
      <div className="card w-80">
        <form action="submit" method="post">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />
          <label htmlFor="confirmPassword">Re-Type Password: </label>
          <input type="password" name="confirmPassword" />
          <button className="btn btn-success ps-3">Submit</button>
        </form>
      </div>
    </div>
  );
};
