import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
// useNavigate
import MainLayout from "../../../layout/MainLayout";

interface IState {
  user: {
    username: string;
    password: string;
  };
  errors: {
    username: string;
    password: string;
  };
}

const Login: React.FC = () => {
  const [state, setState] = useState<IState>({
    user: {
      username: "",
      password: "",
    },
    errors: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setState({
      ...state,
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
      errors: {
        ...state.errors,
        [event.target.name]: "",
      },
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    let errors = {
      username: "",
      password: "",
    };

    if (!state.user.username) {
      errors.username = "Please enter your username";
    }
    if (!state.user.password) {
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        state.user.password
      )
    ) {
      errors.password =
        "Password must contain at least 8 characters, including (A-Z, a-z, @,#,$, 1-9)";
    }

    if (errors.username || errors.password) {
      setState({ ...state, errors });
    } else {
      console.log(state.user);
      setState({
        ...state,
        errors: {
          username: "",
          password: "",
        },
      });
      // Redirect to the account page after successful login
      navigate("/account");
    }
  };

  return (
    <MainLayout>
      <div className="flex min-h-screen items-center justify-center">
        <div className="px-5 relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Signin to your PopX account
          </h4>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-7">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className={`peer h-full w-full rounded-md border ${
                    state.errors.username ? "border-red-500" : "border-blue-gray-200"
                  } bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  placeholder=""
                  type="username"
                  name="username"
                  value={state.user.username}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
                {state.errors.username && (
                  <div className="text-red-500 text-xs mt-1">
                    {state.errors.username}
                  </div>
                )}
              </div>

              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  name="password"
                  className={`peer h-full w-full rounded-md border ${
                    state.errors.password ? "border-red-500" : "border-blue-gray-200"
                  } bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  placeholder=""
                  value={state.user.password}
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
                {state.errors.password && (
                  <div className="text-red-500 text-xs mt-1">
                    {state.errors.password}
                  </div>
                )}
              </div>
            </div>
            <button
              className="mt-9 block w-full select-none rounded-lg bg-indigo-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
