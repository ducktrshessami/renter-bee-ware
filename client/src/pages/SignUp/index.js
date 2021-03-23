import React from 'react';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import SignupForm from "../../components/SignUpForm";

function SignUp() {
  const history = useHistory();
  API.isAuthenticated()
    .then(res => {
      if (res) {
        history.push("/");
      }
    })
    .catch(console.error);
  return (
    <SignupForm />
  )
}

export default SignUp;