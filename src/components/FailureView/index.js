import { useNavigate } from "react-router-dom";
import { RiContactsBook2Fill } from "react-icons/ri";
import { ErrorMsgContainer, ErrorMsg, OptionButton } from "./styledComponents";

const FailureView = () => {
  const navigate = useNavigate();
  const goToContacts = () => {
    navigate("/contacts");
  };

  return (
    <ErrorMsgContainer>
      <ErrorMsg>Oops! Contact Not Exist</ErrorMsg>
      <OptionButton onClick={goToContacts} exit>
        Go to <RiContactsBook2Fill />
      </OptionButton>
    </ErrorMsgContainer>
  );
};

export default FailureView;
