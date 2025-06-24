import styled from "styled-components";
import PropTypes from "prop-types";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { useEffect, useState } from "react";

const Login = ({ onLogin }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  useEffect(() => {
    console.log("Mounting");
    // функция очистки Unmounting

    return () => {
      // Убрать addEventListeners
      // Очистить таймер
      // Чтобы не было утечки памяти
      console.log("Unmounting");
      alert("вы покидайете сайт");
    };
  }, []);

  const emailChangeHandler = (event) => {
    setEmailValue(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPasswordValue(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(emailValue.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(passwordValue.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailValue, passwordValue);
  };

  const isFormValid = () => {
    return !(emailValue.includes("@") && passwordValue.trim().length > 6);
  };

  return (
    <StyledLoginWrapper>
      <form onSubmit={submitHandler} noValidate>
        <ControlWrapper className={emailIsValid === false ? "invalid" : ""}>
          <StyledLable htmlFor="email">E-Mail</StyledLable>
          <StyledInput
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </ControlWrapper>
        <ControlWrapper className={passwordIsValid === false ? "invalid" : ""}>
          <StyledLable htmlFor="password">Password</StyledLable>
          <StyledInput
            type="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </ControlWrapper>
        <StyledActions>
          <Button disabled={isFormValid()} type="submit">
            Login
          </Button>
        </StyledActions>
      </form>
    </StyledLoginWrapper>
  );
};

export default Login;

Login.propTypes = {
  onLogin: PropTypes.func,
};

const StyledLoginWrapper = styled(Card)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

const StyledLable = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
`;

const StyledActions = styled.div`
  text-align: center;
`;
const StyledInput = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ControlWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }
`;
