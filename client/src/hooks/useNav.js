import { useNavigate } from 'react-router-dom';


export const useNav = () => {

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");

  }

  const goDetails = (id) => {
    navigate(`/details/${id}`);
  }

  const redirectPage = (id) => {
    navigate(`/home/${id}`);
  }

  const goBack = () => {
    navigate(-1);
  }


  return ({ goHome, goBack, goDetails, redirectPage })
}
