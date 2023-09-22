import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function onSubmit(email, password) {
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Account Successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <form
      style={{
        width: "30%",
        margin: "auto",
        marginTop: "10%",
      }}
    >
      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
          onChange={(text) => {
            setEmail(text.target.value);
          }}
        />
      </div>

      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 "
          onChange={(text) => {
            setPassword(text.target.value);
          }}
        />
      </div>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 my-5"
        onClick={() => {
          onSubmit(email, password);
        }}
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
