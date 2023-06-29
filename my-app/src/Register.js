import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  background-color: white;
  width: 25%;
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
  margin-bottom: 1rem;
  width: 100%;
`;
const InputPerDataProfilepic = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: space-around;
  margin-left: 45px;
  width: 120%;
`;
const Input = styled(Field)`
  padding: 0.5rem;
  width: 95%;
  border-radius: 0.25rem;
  border: 1px solid gray;
  font-size: 1rem;
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

const RegisterPage = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    address: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    mobile: Yup.string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    about: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    photo: Yup.string(),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password2: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .oneOf([Yup.ref("password"), ""], "Both Passwords Must Match"),
  });
  return (
    <Container>
      <FormContainer>
        <Title>Register</Title>
        <Formik
          initialValues={{
            name: "",
            address: "",
            email: "",
            mobile: "",
            password: "",
            password2: "",
            about: "",
          }}
          validationSchema={registerSchema}
          onSubmit={async (values, { resetForm }) => {
            const { password2, ...updatedValues } = values;
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedValues),
            };
            try {
              const res = await fetch(
                `http://localhost:4000/register`,
                requestOptions
              );
              const data = await res.json();
              if (data.isRegistered) {
                alert(data.msg);
              } else {
                alert(data.msg);
              }
            } catch (err) {
              alert(err);
            }
          }}
        >
          {({ errors, touched }) => (
            <FormData>
              <InputPerData>
                <Input type="text" name="name" placeholder="Full Name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
              </InputPerData>
              <InputPerData>
                <Input type="text" name="address" placeholder="Address" />
                {errors.address && touched.address ? (
                  <div>{errors.address}</div>
                ) : null}
              </InputPerData>
              <InputPerData>
                <Input type="text" name="mobile" placeholder="Mobile" />
                {errors.mobile && touched.mobile ? (
                  <div>{errors.mobile}</div>
                ) : null}
              </InputPerData>
              <InputPerData>
                <Input type="text" name="about" placeholder="About" />
                {errors.about && touched.about ? (
                  <div>{errors.about}</div>
                ) : null}
              </InputPerData>

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

              <InputPerData>
                <Input
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.password2 && touched.password2 ? (
                  <div>{errors.password2}</div>
                ) : null}
              </InputPerData>
              <Button type="submit">Register</Button>
              <Link to="/login  ">
                <Button>Log In</Button>
              </Link>
            </FormData>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default RegisterPage;
