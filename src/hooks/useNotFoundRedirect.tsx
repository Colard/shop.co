import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNotFoundRedirect = (redirectNeeded: boolean = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectNeeded) {
      navigate("/404");
    }
  }, [redirectNeeded]);
};

export default useNotFoundRedirect;
