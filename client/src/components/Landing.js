import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <div class='form-group'>
        <input type='email' placeholder='Email Address' name='email' required />
      </div>
      <div class='form-group'>
        <input type='password' placeholder='Password' name='password' />
      </div>
      <h4>
        Don't have an account?{"  "}
        <Link to='/register'>Register</Link>
      </h4>
    </Fragment>
  );
};

export default Landing;
