import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(true);
  }, []);
  if (redirect) {
    return <Navigate to="/" replace />;
  }
};

export default ErrorPage;
