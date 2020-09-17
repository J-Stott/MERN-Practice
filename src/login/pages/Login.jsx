import React, { useState, useContext } from "react";
import classes from "./LoginForm.module.css";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Util/validators";

import { useForm } from "../../shared/Hooks/form-hook";

import {AuthContext} from "../../shared/context/auth-context";

const Login = () => {
  const [loginState, setLoginState] = useState(true);

  const auth = useContext(AuthContext);

  const onToggleLoginStateHandler = () => {
    if (!loginState) {
      const isValid =
        formState.inputs.email.isValid && formState.inputs.password.isValid;

        const formData = {
            email: {...formState.inputs.email},
            password: {...formState.inputs.password}
        }

      setFormData(
        formData,
        isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setLoginState((prevMode) => {
      return !prevMode;
    });
  };

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
    console.log(auth.isLoggedIn);
  };

  const renderInputs = () => {
    const nameInput = !loginState && (
      <Input
        element="input"
        type="text"
        label="Name"
        id="name"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name"
      />
    );

    return (
      <React.Fragment>
        {nameInput}
        <Input
          element="input"
          type="email"
          label="Email Address"
          id="email"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
        />
        <Input
          element="input"
          type="password"
          label="Password"
          id="password"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
          errorText="Please enter a password with a minimum of 8 characters"
        />
      </React.Fragment>
    );
  };

  return (
    <div className={classes["login-form"]}>
      <form onSubmit={submitHandler}>
        {renderInputs()}
        <Button type="submit" disabled={!formState.isValid}>
          {loginState ? "Login" : "Sign Up"}
        </Button>
      </form>
      <div className="center">
        <Button inverse type="submit" onClick={onToggleLoginStateHandler}>
          {loginState ? "Switch to Sign Up" : "Switch to Login"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
