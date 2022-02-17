import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin, actLogout } from "../slices";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(actLogin({ email, password }));
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return { email, password, submit, onChangeEmail, onChangePassword };
};

export const useNavbar = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actLogout());
  };
  return { logout };
};

export const useAuth = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return { user, loading };
};
