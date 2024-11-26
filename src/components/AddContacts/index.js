import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  ProfileBackground,
  CancelBtn,
  Name,
  Form,
  Input,
  AddBtn,
} from "./styledComponents";
import { BgContainer, MenuHeader, Header } from "../../styledComponents";

const AddContacts = (props) => {
  const [name, updateName] = useState("");
  const [phNo, updatePhNo] = useState("");
  const [email, updateEmail] = useState("");
  const navigate = useNavigate();

  const onChangeName = (event) => updateName(event.target.value);
  const onChangePhNo = (event) => updatePhNo(event.target.value);
  const onChangeEmail = (event) => updateEmail(event.target.value);

  const onCancel = () => {
    navigate("/contacts");
  };

  return (
    <BgContainer>
      <ProfileBackground>
        <Header>
          <MenuHeader>New Contact</MenuHeader>

          <CancelBtn onClick={onCancel}>Cancel</CancelBtn>
        </Header>

        <IoMdContact />
        <Name>{name}</Name>
      </ProfileBackground>
      <Form>
        <Input onChange={onChangeName} value={name} placeholder="Name" />
        <Input
          onChange={onChangePhNo}
          value={phNo}
          type="number"
          placeholder="Phone Number"
        />
        <Input onChange={onChangeEmail} value={email} placeholder="Email" />
        <AddBtn>Add</AddBtn>
      </Form>
    </BgContainer>
  );
};

export default AddContacts;
