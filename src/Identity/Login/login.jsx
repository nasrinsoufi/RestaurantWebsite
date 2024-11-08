import logo from "../../assets/images/logo.jpg"
import { useForm } from "react-hook-form";
import { Link, redirect, useNavigation, useRouteError, useSubmit } from "react-router-dom";
import {httpService} from "../../http-service ";
import './login.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = useSubmit();
  const onSubmit = (data) => {
    submitForm(data, { method: "post" });
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const routeErrors = useRouteError();

  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">وارد شوید</h1>
        <p className="lead">به رستوران ما خوش آمدید</p>
        <p className="lead">
          قبلا ثبت نام نکرده اید؟
          <Link to="/register" className="me-2">
           
           ثبت نام کنید
          </Link>
        </p>
      </div>
      

      <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}className="form">
              <div className="form-group">
                <label className="form-label">موبایل</label>
                <input
                  {...register("mobile", {
                    required: true ,
                    minLength: 11,
                    maxLength: 11,
                  })}
                  className={`form-control form-control-lg ${
                    errors.mobile && "is-invalid"
                  }`}
                />
                {errors.mobile && errors.mobile.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    موبایل الزامی است.
                  </p>
                )}
                {errors.mobile &&
                  (errors.mobile.type === "minLength" ||
                    errors.mobile.type === "maxLength") && (
                    <p className="text-danger small fw-bolder mt-1">
                     حداقل 11 رقم را وارد کنید
                    </p>
                  )}
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  {...register("password", { required: true })}
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                   رمز عبور الزامی است.
                  </p>
                )}
              </div>
              <div className="text-center mt-3">
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-lg btn-success"
                >
                  {isSubmitting ? ' در حال ورود...' : 'ورود'}
                </button>
              </div>
              {routeErrors && (
                <div className="alert alert-danger text-danger p-2 mt-3">
                  {routeErrors.response?.data.map((error) => (
                    <p className="mb-0">
                      {error.description}
                    </p>
                  ))}
                </div>
              )}
            </form>
          
          </div>
      
    </>
  );
};

export async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users/login", data);
  if (response.status === 200) {
    localStorage.setItem("token", response?.data.token);
    return redirect('/');
  }
}

export default Login;
