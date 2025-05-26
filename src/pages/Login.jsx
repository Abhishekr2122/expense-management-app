import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { toast } from "react-toastify";
import { useExpenseData } from "../utils/useExpenseData";

export default function Login({ setIsLoggedIn }) {
  const { setUserType, userType } = useExpenseData();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const selectedType = useRef("");

  function handleUserType(user) {
    setUserType(user);
  }

  function handleFormData() {
    if (
      email === "demo@demo.com" &&
      password === "demopassword" &&
      userType != ""
    ) {
      setIsLoggedIn(true);
      toast.success("Loggedin Successfully");
      setEmail("");
      setPassword("");
      selectedType.current = "";
    } else {
      toast.error("Please enter valid credentials");
      console.log("there was some error while submitting the form");
    }
  }

  return (
    <div className="flex">
      <div className="w-[50%] h-screen ">
        <img
          src="/privacy-policy-concept-illustration.png"
          alt="expense"
          className="h-[100%] w-[100%]"
        />
      </div>
      <div className="flex w-[50%] h-screen items-center justify-center bg-gray-700 flex-col gap-3">
        <h1 className="text-4xl text-start w-[50%] text-white font-[500]">
          Welcome back✌️
        </h1>
        <h3 className="text-white w-[50%] font-[500]">
          Sign in to view your budgets, insights, and more.
        </h3>

        <div className="flex  gap-3 w-[50%] justify-center flex-col">
          <p className="text-white text-md underline text-center">Login as</p>
          <div className="flex gap-6 w-full justify-center">
            <button
              className={`  py-1 px-4 cursor-pointer border-1 rounded-md ${
                selectedType.current === "user"
                  ? "bg-white  text-black scale-95"
                  : "bg-transparent text-white"
              }  duration-[1s]`}
              onClick={function () {
                handleUserType("user");
                selectedType.current = "user";
              }}
            >
              User
            </button>
            <button
              className={`  py-1 px-4 cursor-pointer border-1 rounded-md ${
                selectedType.current === "admin"
                  ? "bg-white text-black scale-95"
                  : "bg-transparent text-white"
              }  duration-[1s]`}
              onClick={function () {
                handleUserType("admin");
                selectedType.current = "admin";
              }}
            >
              Admin
            </button>
          </div>
        </div>
        <form
          className="flex flex-col  w-[50%] gap-2 text-white placeholder:white "
          onSubmit={function (e) {
            e.preventDefault();
            handleFormData();
          }}
        >
          <label>Email</label>
          <div className="flex  gap-1 items-center border-1 p-1 rounded-md">
            <MdEmail className="mt-1" />
            {"|"}
            <input
              type="email"
              placeholder="demo@demo.com"
              className="outline-none"
              onChange={function (e) {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <label>Password</label>
          <div className="flex gap-1 itmes-center border-1 p-1 rounded-md">
            <TbLockPassword className="text-lg  mt-1" />

            {"|"}
            <input
              type="text"
              placeholder="demopassword"
              className="outline-none"
              value={password}
              onChange={function (e) {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="bg-white p-2 rounded-sm text-black cursor-pointer mt-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
