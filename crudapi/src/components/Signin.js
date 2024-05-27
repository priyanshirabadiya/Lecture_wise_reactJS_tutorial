// --------------------new

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleCallbackResponse = (response) => {
    console.log("encoded id" + response.credential);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "776151831582-r00q3hoqpgapqqtiuh3c5k3576n0t7gf.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signinDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const submitData = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      alert("please fill all the details");
    } else if (pass !== confirmPass) {
      alert("password must be the same");
    } else {
      alert("successfully registered");
      const crudUsers = JSON.parse(localStorage.getItem("crudUsers")) || [];
      crudUsers.push({ email, pass });
      localStorage.setItem("crudUsers", JSON.stringify(crudUsers));
      console.log(crudUsers);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='mx-[570px] mt-10 mb-10 ' >
        <div id="signinDiv"></div>
      </div>
      <form onSubmit={submitData}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}



