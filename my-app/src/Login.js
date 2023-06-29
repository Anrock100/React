import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import RegisterPage from "./Register";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormData = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputPerData = styled.div`
  margin-bottom: 16px;
`;

const Input = styled(Field)`
  width: 90%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #0077cc;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #0077cc;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005ea6;
  }
`;

const ResetLink = styled.a`
  color: #0077cc;
  text-decoration: none;
  margin-top: 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Container>
      <FormContainer>
        <h2>Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async (values, { resetForm }) => {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            };
            const res = await fetch(
              `http://localhost:4000/login`,
              requestOptions
            );
            const data = await res.json();
            if (data.isLogedin) {
              alert(data.msg);
            } else {
              alert(data.msg);
            }
            // resetForm({ values: '' })
          }}
        >
          {({ errors, touched }) => (
            <FormData>
              <InputPerData>
                <Input name="email" type="email" placeholder="Email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </InputPerData>

              <InputPerData>
                <Input name="password" type="password" placeholder="Password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </InputPerData>
              <Button type="submit">Login</Button>
              <Link to="/register">
                <Button>Register Now!</Button>
              </Link>
            </FormData>
          )}
        </Formik>
        <Link to="/forgetpassword">Forgot password?</Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
