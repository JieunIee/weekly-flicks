import React from "react";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center bg-body-gray text-white min-h-screen-with-header">
      <div className="flex flex-col justify-center bg-card-gray rounded overflow-hidden shadow-lg w-454 h-96">
        <div className="text-2xl p-4">Login</div>
        <form className="flex flex-col items-end p-4 space-y-5">
          <input
            type="text"
            placeholder="E-mail"
            className="bg-form-gray p-2 w-full h-10"
          />
          <input
            type="text"
            placeholder="Password"
            className="bg-form-gray p-2 w-full h-10"
          />
          <button type="submit" className="bg-button-red w-1/2 h-10 mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
