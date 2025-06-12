import { useNavigate } from "react-router-dom";
const Second = () => {
  const navigate = useNavigate();

  const goContact = () => {
    navigate("/First"); 
  };

  return (
    <>
      <button onClick={goContact}>Go to UserCard</button>
    </>
  );
}

export default Second;
