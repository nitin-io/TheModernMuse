import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = ({ path = "login" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pageStyle = {
    display: "grid",
    height: "100vh",
    placeContent: "center",
  };

  useEffect(() => {
    setTimeout(() => {
      navigate(`/${path}`, { state: location.pathname });
    }, 3000);
  }, [navigate, location, path]);

  return (
    <div style={pageStyle}>
      <p>Redirecting...</p>
    </div>
  );
};

export default Redirect;
