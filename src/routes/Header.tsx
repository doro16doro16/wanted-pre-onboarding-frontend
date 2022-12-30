import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Header = ({ title }: any) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <AiOutlineClose
        onClick={() => {
          navigate(-1);
        }}
      />
      <h3>{title}</h3>
      <i></i>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export default Header;
