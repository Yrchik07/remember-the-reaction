import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./SignUpPage.module.css";
import RedirectSection from "../../components/RedirectSection/RedirectSection";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is requred"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.signUpPage}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2> Sign Up</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input id="username" {...register("username")} />
          {errors.username && 
            <p className={styles.error}>{errors.username.message}</p>
          }
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
          {errors.email && <p className={styles.errors}>{errors.email.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && <p className={styles.errors}>{errors.password.message}</p>}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password"  id="confirmPassword" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className={styles.errors}>{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
      <RedirectSection
      text="Already have an account?"
      linkText="Sign In"
      linkTo="/signin"
      />
    </div>
  );
};

export default SignUpPage;
