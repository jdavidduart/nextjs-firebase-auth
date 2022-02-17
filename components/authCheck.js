import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../hooks";

const useCheckAuth = () => {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [user]);
};

const AuthCheck = ({ children }) => {
  useCheckAuth();
  return <Fragment>{children}</Fragment>;
};

export default AuthCheck;
