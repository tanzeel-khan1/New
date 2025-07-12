import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(" Logout component mounted"); 

   
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.info(" You have been logged out", {
      position: "top-center",
      autoClose: 2000,
      transition: Slide,
      theme: "dark",
    });

    
    const timer = setTimeout(() => {
      navigate("/");
    }, 2200); 

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <ToastContainer />
      <h2 style={styles.text}>Logging out...</h2>
      <p style={styles.subtext}>Please wait...</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  text: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "16px",
    color: "#ccc",
  },
};

export default Logout;
