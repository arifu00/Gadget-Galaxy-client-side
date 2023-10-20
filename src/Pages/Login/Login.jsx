import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Congratulations!",
          text: "Your Login is Successful",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "OOPS!",
          text: `Password doesn't match`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });

    e.target.reset();
  };
  // google provider
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleSignIn(provider)
      .then((result) => {
        Swal.fire({
          title: "Congratulations!",
          text: `Your Login is Successful`,
          icon: "success",
          confirmButtonText: "OK",
        });

        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "OOPS!",
          text: `Password doesn't match  ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <div>
      <div className="container  md:mx-auto">
        <div className="w-11/12 md:w-3/4 lg:w-1/2 md:mx-auto px-3 bg-[#fff] mt-12  md:px-20 my-12 rounded-lg py-20 shadow-2xl ml-4 ">
          <div className="">
            <h2 className="text-3xl font-semibold text-[#403F3F] text-center mb-10">
              Please Login
            </h2>
            <hr className="mb-6 border-[#E7E7E7]" />
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#403F3F] text-xl font-semibold">
                    Email address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="py-4 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#403F3F] text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="py-4 mb-3 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="py-4 bg-[#403F3F] text-white text-xl font-semibold rounded-lg hover:bg-slate-400 ">
                  Login
                </button>
              </div>
              <div className="mt-6 text-center text-sm font-semibold text-[#706F6F]">
                <p>
                  Don’t Have An Account ?{" "}
                  <NavLink className="text-[#F75B5F]" to="/register">
                    Register
                  </NavLink>
                </p>
              </div>
            </form>
            <div className="text-center flex justify-center mt-3 ">
              <div className="">
                <button
                  onClick={handleGoogleLogin}
                  className="py-4 flex gap-2 items-center btn-outline btn-info px-4 text-white text-xl font-semibold rounded-lg  "
                >
                  <BsGoogle></BsGoogle> Login with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
