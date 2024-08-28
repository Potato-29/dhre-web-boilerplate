import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginValidator } from "../../validations/LoginValidations";
import { toast } from "react-toastify";
import { toastOptions } from "../../constants/toastOptions";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

const SignupContainer = ({ data }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidator()),
  });

  const onSubmit = () => {
    try {
      toast.success("Success!", toastOptions);
      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong!", toastOptions);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.signupHeader}>{data.header}</h1>
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
    </div>
  );
};

export default SignupContainer;
