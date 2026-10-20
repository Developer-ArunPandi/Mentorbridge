import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
       e.preventDefault();
       navigate("/admin", { replace: true });
    }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="name">Name</label>
      <input type="text" name="userName" id="name"   placeholder='enter your name'/><br />
      <label htmlFor="email">Email</label>
      <input type="email" name="userEmail" id="email"  placeholder='enter your email'/><br />
      <label htmlFor="password">Password</label>
      <input type="password" name="userPassword" id="password"   placeholder='enter your password'/><br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
