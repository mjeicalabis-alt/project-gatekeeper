import { useState } from "react";

// LOGIN FORM
const LoginForm = ({ handleLogin, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  return (
    <form onSubmit={onSubmitForm} className="card fade-in">
      <h2>Project Gatekeeper</h2>
      <p className="subtitle">Sign in to continue</p>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={`input ${error ? "border-red" : "border-gray"}`}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`input ${error ? "border-red" : "border-gray"}`}
      />

      <button type="submit" className="btn">
        Login
      </button>

      {error && <p className="error-text">Invalid username or password</p>}
    </form>
  );
};

// DASHBOARD
const Dashboard = ({ user }) => {
  return (
    <div className="card fade-in">
      <h2>{`Welcome, ${user}!`}</h2>
      <p>You are now logged in.</p>
      <div className="stats">
        <div className="stat-box">Hello, you have messages: 5</div>
      </div>
    </div>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

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
    <div className="app-container">
      {isLoggedIn ? (
        <Dashboard user={currentUser} />
      ) : (
        <LoginForm handleLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

export default App;
