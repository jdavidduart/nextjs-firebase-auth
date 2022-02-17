import React from "react";
import { useLogin, useAuth } from "../hooks";

const Login = () => {
  const { email, password, submit, onChangeEmail, onChangePassword } =
    useLogin();
  const { user, loading } = useAuth();
  return (
    <div>
      {loading ? <p>LOADING...</p> : <p></p>}
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="email" value={email} onChange={onChangeEmail} />
        <input type="password" value={password} onChange={onChangePassword} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
