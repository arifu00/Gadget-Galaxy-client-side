import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // console.log(name, photo, email, password);

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)
    ) {
      Swal.fire({
        title: "OPPS!",
        text: `Your Password must be...
            - is less than 6 characters
           - don't have a capital letter
           - don't have a special character `,
        icon: "error",
        confirmButtonText: "OK",
      });

      return;
    } else {
      createUser(email, password)
        .then((result) => {
          Swal.fire({
            title: "Congratulations!",
            text: "Your Registration is Successful",
            icon: "success",
            confirmButtonText: "OK",
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "OOPS!",
            text: `Your Registration is Failed ${error.message}`,
            icon: "success",
            confirmButtonText: "OK",
          });
        });
      e.target.reset();
    }
  };
  return (
    <div>
      <div className="container md:mx-auto ">
        <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto  bg-[#fff] mt-12 px-3  md:px-20 rounded-lg py-20 my-12 shadow-2xl">
          <div className="">
            <h2 className="text-lg md:text-3xl font-semibold text-[#403F3F] text-center mb-10">
              Register your account
            </h2>
            <hr className="mb-6 border-[#E7E7E7]" />
            <form onSubmit={handleRegister} className="">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#403F3F] text-base md:text-xl font-semibold">
                    Your Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="py-4 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#403F3F] text-base md:text-xl font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your Photo URL"
                  className="py-4 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#403F3F] text-base md:text-xl font-semibold">
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
                  <span className="text-[#403F3F] text-base md:text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="py-4 mb-3 px-4 bg-[#F3F3F3] rounded-lg input-bordered text-sm md:text-base font-normal text-[#9F9F9F] focus:outline-blue-400"
                  required
                />
              </div>
              <div className="form-control mt-6 text-base font-normal text-[#706F6F]">
                <label htmlFor="terms">
                  <input
                    type="checkbox"
                    className="mr-3"
                    name="terms"
                    id="terms"
                  />
                  Accept Term & Conditions
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="py-4 bg-[#403F3F] text-white text-xl font-semibold rounded-lg hover:bg-slate-400 ">
                  Register
                </button>
              </div>
              <div className="mt-6 text-center text-sm font-semibold text-[#706F6F]">
                <p>
                  Already Have An Account ?{" "}
                  <NavLink className="text-[#F75B5F]" to="/login">
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
