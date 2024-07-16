"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useNavigate } from "next/navigation";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const emailRef = useRef(null);
  const otpRef = useRef(null);

  const [verifiedUser, setVerifiedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const router = useRouter();

  const checkMailExists = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getbyemail/${emailRef.current.value}`
    );
    console.log(res.status);
    const data = await res.json();
    // console.log(data);
    setVerifiedUser(data);
    return res.status === 200;
  };

  const sendOTP = async () => {
    if (!(await checkMailExists())) {
      toast.error("Email not registered", { variant: "error" });
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/sendotp`, {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.status);
    if (res.status === 201) {
      toast.success("OTP sent");
    } else {
      toast.error("OTP not sent");
    }
  };

  const verifyOTP = async () => {
    const res = await fetch(`
     ${process.env.NEXT_PUBLIC_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`
    );
    // console.log(res.status);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      toast.error("OTP not verified");
    }
  };

  const resetForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch(
       `${process.env.NEXT_PUBLIC_API_URL}/user/update/${verifiedUser._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
          password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            toast.success("Password reset successful");
            router.push("/login");
          } else {
            toast.error("Password reset failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <section className="bg-[#f2e8cf]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-bold text-[#bc4749]"
          >
            RESET PASSWORD
          </a>
          <div className="w-full p-6 bg-[#bc4749] rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
            <h2 className="mb-1 text-xl justify-center text-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Change Password
            </h2>
            {/* <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5"> */}
            <div>
              <label
                htmlFor="email"
                className=" bg-[#bc4749] block mb-2 text-sm font-medium text-black"              >
                Your email
              </label>
              <input
              style={{ backgroundColor: "#f2e8cf" }}
                type="email"
                ref={emailRef}
                className=" text-black sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <button
                type="Submit"
                onClick={sendOTP}
                className="text-white bg-blue-900 mt-2 hover:border-blue rounded-xl py-1 px-5 hover:scale-105 hover:bg-blue-500 font-semibold duration-300"
              >
                Send OTP
              </button>
            </div>
            <div>
              <input
              style={{ backgroundColor: "#f2e8cf" }}
                type="text"
                label="Enter OTP"
                ref={otpRef}
                placeholder="Enter OTP"
                className="text-black sm:text-sm rounded-lg block p-2.5 mt-2"
              />
            </div>
            <div>
              <button
                onClick={verifyOTP}
                className="text-white mb-2 bg-blue-900 mt-2 hover:border-blue rounded-xl py-1 px-5 hover:scale-105 hover:bg-blue-500 font-semibold duration-300"
              >
                Verify OTP
              </button>
            </div>
            {showForm && (
              <form onSubmit={resetForm.handleSubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className="bg-[#bc4749] block mb-2 text-sm font-medium text-black"
                  >
                    New Password
                  </label>
                  <input
                    style={{ backgroundColor: "#f2e8cf" }}
                    type="password"
                    name="password"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.password}
                    className="text-black sm:text-sm rounded-lg block w-full p-2.5 mb-2"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="bg-[#bc4749] block mb-2 text-sm font-medium text-black"
                  >
                    Confirm password
                  </label>
                  <input
                    style={{ backgroundColor: "#f2e8cf" }}
                    type="password"
                    name="cpassword"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.cpassword}
                    className="text-black sm:text-sm rounded-lg block w-full p-2.5 mb-2"
                    required=""
                  />
                </div>
                <div className="flex justify-center">
                <button
                  type="submit"
                 className="w-3/4 mx-auto text-white mb-2 bg-blue-900 mt-2 hover:border-blue rounded-xl py-1 px-5 hover:scale-105 hover:bg-blue-500 font-semibold duration-300"
                >
                  Reset password
                </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;