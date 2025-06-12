import { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedInUserName, setLoggedInUserName] = useState(null); // Logged-in user ka naam store karne ke liye

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) { // LOGIN LOGIC
      const user = users.find(
        (u) => u.email === data.email && u.password === data.password
      );
      if (user) {
        setLoggedInUserName(user.name); // Logged-in user ka naam set karein
        // alert(`Welcome ${user.name}!`); // Ise hata sakte hain agar page par message dikhana hai
        reset(); // Form fields ko reset karein
      } else {
        alert("Galat email ya password.");
        // Optionally, clear password field on failed login
        // setValue("password", ""); // Agar 'setValue' import kiya hai
      }
    } else { // SIGNUP LOGIC
      const emailExists = users.find((user) => user.email === data.email);
      if (emailExists) {
        alert("Yeh email pehle se register hai. Kripya alag email istemal karein ya login karein.");
      } else {
        users.push({ name: data.name, email: data.email, password: data.password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup safal hua! Kripya login karein.");
        setIsLogin(true); // Login form par switch karein
        reset(); // Form fields ko reset karein
      }
    }
  };

  const handleLogout = () => {
    setLoggedInUserName(null); // Logged-in user ka naam clear karein
    setIsLogin(true); // Form ko login mode mein rakhein
    reset(); // Form fields ko reset karein
  };

  // Agar user logged in hai, toh welcome message aur logout button dikhayein
  if (loggedInUserName) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {loggedInUserName}!
        </h2>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  // Warna, Login/Signup form dikhayein
  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field - sirf Signup ke liye */}
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded"
                {...register("name", {
                  // 'name' field sirf signup mein required hai
                  required: !isLogin ? "Name is required" : false,
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be at least 4 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-blue-600 underline"
              onClick={() => {
                setIsLogin(!isLogin);
                reset(); // Form toggle karte waqt fields reset karein
              }}
            >
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
