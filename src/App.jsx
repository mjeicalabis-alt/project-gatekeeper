import { useState } from "react";

// LOGIN FORM COMPONENT
const LoginForm = ({ handleLogin, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Submit Action — Event Handling
  const onSubmitForm = (e) => {
    e.preventDefault(); // stops page refresh
    handleLogin(username, password);
  };

  return (
    <form onSubmit={onSubmitForm} className="card">
      <h2>Login</h2>

      {/* User Input — Controlled Components */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={error ? "border-red" : "border-gray"}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={error ? "border-red" : "border-gray"}
      />

      <button type="submit">Login</button>

      {/* Form Feedback — Conditional Rendering */}
      {error && <p className="error-text">Invalid username or password</p>}
    </form>
  );
};

// DASHBOARD COMPONENT
const Dashboard = ({ user }) => {
  return (
    <div className="card">
      <h2>{`Welcome, ${user}!`}</h2>
      <p>You have successfully logged in.</p>
    </div>
  );
};

// MAIN APP COMPONENT
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  // Auth Check — Conditional Logic
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setCurrentUser(username);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <Dashboard user={currentUser} />
      ) : (
        <LoginForm handleLogin={handleLogin} error={error} />
      )}
    </>
  );
}

export default App;
