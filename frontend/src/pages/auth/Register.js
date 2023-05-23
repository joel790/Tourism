import React, { useState } from "react";
import "./auth.css";
import { useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { name, email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("please fill all fields!");
    }
    if (password.length < 8) {
      return toast.error("password must at least be 8 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    const userData = {
      name,
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.name));
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <div className="auth">
      {isLoading && <Loader />}
      <Card>
        <div className="form">
          <h3>Create Your account</h3>
            <h4>please fill the following</h4>
          <form onSubmit={register}>
            <div className="input-wrapper">
              <span className="icon-prefix">&#x1F4E7;</span>
              <input
                type="text"
                placeholder="Enter Name"
                required
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <span className="icon-prefix">&#x1F4E7;</span>
              <input
                type="text"
                placeholder="Enter Email"
                required
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-wrapper">
              <span className="icon-prefix">&#x1F512;</span>
              <input
                type="password"
                placeholder="Enter Password"
                required
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <button className="--btn --btn-primary">Register</button>
            <br />
            <span>
              <p>
                Already Have an account! &nbsp;
                <Link to="/login" className="link-yellow">
                  SignIn
                </Link>
              </p>
            </span>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Register;
