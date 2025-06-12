import { useState } from "react";
import { useForm } from "react-hook-form";

function Login(){
    const [isLogin, setIsLogin] = useState(true);
    const [loggedInUserName, setLoggedInUserName] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        
    if(isLogin){
    const user = users.find((user)=> user.email === data.email && user.password === data.password);
 if(user){
    isLogin(true);
    alert(`wellcome ${user.name}`);
 }else{
    alert("Not current");
    }
    }else{
        const emailExists = users.find((user) => user.email === data.email );
        if(emailExists){
            alert("alReady hai");
        }else{
            users.push({name:data.name, email:data.email, password:data.password});
            localStorage.setItem("users", JSON.stringify(users));
            setLoggedInUserName(true);
            alert("sign succsfull");
            reset();
        }
    }
    }
    const handleLogout = () => {
        setLoggedInUserName(null);
        setIsLogin(true);
        reset();
    }
   if(loggedInUserName){
    return(
        <div>
            <h1>
            wellcome, {loggedInUserName}
            </h1>
            <button onClick={handleLogout}>logout</button>
        </div>
    )
   }
   return(
    <>
    <div>
        <h2>
        {isLogin ? "login" : "signup"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
                <div>
                <input
                type="text"
                placeholder="name"
                {... register("name", {
                    required : !isLogin ? "name is required" : false,
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
            placeholder="email"
            {... register("email",{ required: "email is req"})}
            />
            {errors.email && (
                <p>
                {errors.email.message}
                </p>
            )}
          </div>
        <div>
            <input
            type="text"
            placeholder="password"
            {... register (
                "password",
            {
                required : "password is req",
                minLength: {
                    value: 4,
                 message: "Password must be at least 4 characters",
                },
            })}
            />
            {errors.password && (
              <p>
                {errors.password.message}
              </p>
            )}
        </div>
        <button type="submit">{!isLogin ? "login" : "signup"}</button>
        </form>

        <div>
            <p>
            {isLogin ? "mere pass account nhi hai" : "mere pass hai"}{""}
               <button
               type="text"
               onClick={() => {
                setIsLogin(!isLogin);
                reset();
               }} >
             {isLogin ? "signup" : "login"}
                </button> 
            </p>
        </div>
    </div>
    </>
   )
}
export default Login;