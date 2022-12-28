import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = ({ title }: any) => {
  const navigate = useNavigate();
  return (
    <header>
      <AiOutlineClose
        onClick={() => {
          navigate(-1);
        }}
      />
      <h3>{title}</h3>
      <i></i>
    </header>
  );
};

export default Header;
