import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginValidator } from "../../validations/LoginValidations";
import { toast } from "react-toastify";
import { toastOptions } from "../../constants/toastOptions";
import { loginSuccess } from "../../redux/reducers/auth/login";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveToken } from "../../services/tokenServices";
import styles from "./Login.module.css";

const LoginContainer = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidator()),
  });

  const onSubmit = (body) => {
    try {
      dispatch(loginSuccess(body));
      toast.success("Success!", toastOptions);
      saveToken("token", "pass token here");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!", toastOptions);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.loginHeader}>{data.header}</h1>
        <p>{data.subText}</p>
      </div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="text" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">{data.btnText}</button>
      </form>
      <div className={styles.signupArea}>
        <p>
          New here? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginContainer;
