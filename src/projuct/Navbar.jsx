import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function Navbar(){
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    alert("Logged out successfully");
    navigate("/login");
  };
 
    return(
        <>
        <div className="m-0 p-0 box-border">
        <nav className="h-24 w-full flex bg-slate-500">
        <div className="h-16 w-[20rem] grid ">
    <NavLink to="/" className="font-thin font-extrabold text-5xl ml-14 pt-5 fixed">
ShopVerse        </NavLink>
       
        </div>
         <ul className="ml-[40rem] flex gap-7 mt-[2rem]" >
            {["Home", "About", "Contact", "Service"].map((text) => (
              <li key={text} >
                <NavLink
                  to={`/${text.toLowerCase() === "home" ? "" : text.toLowerCase()}`}>
                  {text}
                </NavLink>
              </li>
            ))}

            {!isLoggedIn ? (
              <>
                <li >
                  <NavLink to="/Signup">SignUp</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            ) : (
              <li >
                <button onClick={() => handleLogout()}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        </div>
        </>
    )
}
export default Navbar;








