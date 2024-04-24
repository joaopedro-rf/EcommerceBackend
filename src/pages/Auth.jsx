import React, { useState, useCallback, useRef, useEffect } from "react";
import SignInput from "../components/SignInput";
import { useSignUpMutation } from "../hooks/useSignUpMutation";
import { useSignInMutation } from "../hooks/useSignInMutation";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const [variant, setVariant] = useState("login");
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const telephoneRef = useRef();
  const {
    mutate: mutateSignIn,
    isSuccess: signInSuccess,
    data,
  } = useSignInMutation();
  const { mutate: mutateSignUp, isSuccess: signUpSuccess } =
    useSignUpMutation();
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const refsArray = [emailRef, passwordRef, usernameRef, telephoneRef];

  const clearRefs = useCallback(() => {
    refsArray.forEach((ref) => (ref.current.value = ""));
  }, []);

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login",
    );
    clearRefs();
  }, [clearRefs]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await mutateSignIn({ email, password });
    } catch (error) {
      console.error("Erro ao fazer signup:", error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = usernameRef.current.value;
    const phoneNumber = telephoneRef.current.value;

    try {
      await mutateSignUp({ email, password, name, phoneNumber });
    } catch (error) {
      console.error("Erro ao fazer signup:", error);
    }
  };

  if (signInSuccess) {
    console.log("Sign in successful:", data);
    signIn(data);
    console.log("Valor do local storage: ", localStorage.getItem("user"));
    navigate("/Home");
  }

  useEffect(() => {
    if (signUpSuccess) {
      toggleVariant();
    }
  }, [signUpSuccess, toggleVariant]);

  return (
    <div className="h-screen bg-black bg-cover bg-center desktop:bg-dark">
      <div className="flex items-center justify-center">
        <div className="mt-12 w-full rounded-md bg-black px-4 text-white tablet:w-3/5 tablet:max-w-md tablet:px-16 tablet:py-16">
          <h1 className="pb-8 text-3xl font-bold">
            {variant === "login" ? "Sign In" : "Register"}
          </h1>
          <div className="flex flex-col ">
            <form
              onSubmit={variant === "login" ? handleSignIn : handleSignUp}
              className="form"
            >
              {variant === "register" && (
                <SignInput
                  type="text"
                  id="username"
                  label="Username"
                  ref={usernameRef}
                />
              )}
              <p className="text-red-500"></p>
              <SignInput type="email" id="email" label="Email" ref={emailRef} />
              <p className="text-red-500"></p>
              <SignInput
                type="password"
                id="password"
                label="Password"
                ref={passwordRef}
              />
              {variant === "register" && (
                <SignInput
                  type="text"
                  id="telephone"
                  label="Telephone"
                  ref={telephoneRef}
                />
              )}

              <p className="text-red-500"></p>
              <button
                type="submit"
                className="mb-16 w-full rounded-md bg-dark py-2 font-bold transition duration-300 ease-in-out"
              >
                {variant === "login" ? "Login" : "Sign Up "}
              </button>
            </form>
            <p className="max-w-xl text-zinc-300">
              {variant === "login"
                ? "First time here?"
                : "Already have an account?"}
              <span
                className="ml-5 cursor-pointer font-bold text-white "
                onClick={toggleVariant}
              >
                {variant === "login" ? "Sign up now." : "Sign in."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
