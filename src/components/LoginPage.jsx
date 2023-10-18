// LoginPage.jsx

import React from "react";

function LoginPage({ loggedIn, setLoggedIn }) {
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {loggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default LoginPage;
