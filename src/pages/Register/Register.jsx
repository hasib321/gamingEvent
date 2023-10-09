import { useContext } from "react";
import NavBar from "../Header/NavBar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.text.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //password validation
    if (password.length < 6) {
      swal(
        "Too Short password",
        "password must be at least 6 characters long",
        "warning"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      swal(
        "Need Capital letter",
        "Requires at least one capital letter",
        "warning"
      );
      return;
    } else if (!/[@#$%^&*!]/.test(password)) {
      swal(
        "Need special character",
        "Requires at least one special character",
        "warning"
      );
      return;
    }

    //register user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        swal("Good job!", "You have Registered!", "success");

        //updateProfile
        handleUpdateProfile(name, photoURL).then(() => {
          toast.success("succesfully show profile");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        swal("OPS!", error.message, "warning");
      });
  };
  return (
    <div>
      <div className="bg-[url('/public/register.jpg')] bg-cover bg-center min-h-[90vh]">
        <div className=" min-w-full bg-gradient-to-r from-[#11052cbe] to-[#3e087b70]  min-h-screen">
          <div className="max-w-screen-xl mx-auto">
            <div className="py-5">
              <NavBar></NavBar>
            </div>
            <div>
              <div className="mt-4">
                <div className="hero-content flex-col ">
                  <div className="text-center">
                    <h1 className="text-5xl text-[#f43b86] font-bold">
                      Register!
                    </h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#3e087b53]">
                    <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Name</span>
                        </label>
                        <input
                          type="text"
                          name="text"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Photo URL
                          </span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="Photo URL"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Password
                          </span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <label className="label">
                          <a
                            href="#"
                            className="label-text-alt link link-hover text-white"
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                      </div>
                      <div>
                        <p className="text-white">
                          already have account? please
                          <Link className="text-[#f43b86]" to="/login">
                            <span> Login</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
