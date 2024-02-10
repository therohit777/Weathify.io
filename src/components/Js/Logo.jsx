import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/weather");
  }, 5800);

  return (
    <div className="App1">
      <div className="collect89">
        <div className="logo animate"></div>
        <div className="texthead77">Weather App</div>
      </div>
    </div>
  );
};
