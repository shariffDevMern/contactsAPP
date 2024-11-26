import { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import ContactsContext from "../../ContactsContext";
import {
  ProfileBackground,
  CancelBtn,
  Name,
  Form,
  Input,
  AddBtn,
} from "./styledComponents";
import { BgContainer, MenuHeader, Header } from "../../styledComponents";

const profileBgList = [
  "#acf5b0",
  "#e94488",
  "#01d403",
  "#2bd550",
  "#9bfa8e",
  "#43e21f",
  "#12b9bf",
  "#f0ce8f",
  "#e3681e",
  "#99b728",
  "#ef9072",
  "#67f61e",
  "#dc00de",
  "#b95906",
  "#d18c5f",
  "#d09063",
  "#615c50",
  "#df015e",
  "#c7f453",
  "#7211a2",
  "#8fa202",
  "#791f6e",
  "#3c2242",
  "#a66161",
  "#e37bbe",
  "#26d7c6",
  "#6afa96",
  "#187bda",
  "#29686f",
  "#f190ed",
];

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
    <ContactsContext.Consumer>
      {(value) => {
        const { AddContact } = value;
        const onAddContact = (event) => {
          event.preventDefault();
          const contactData = {
            id: uuidV4(),
            name,
            phone: phNo,
            profileBgColor:
              profileBgList[Math.floor(Math.random() * profileBgList.length)],
            email,
          };
          AddContact(contactData);
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
            <Form onSubmit={onAddContact}>
              <Input
                required
                onChange={onChangeName}
                value={name}
                placeholder="Name"
              />
              <Input
                required
                onChange={onChangePhNo}
                value={phNo}
                type="number"
                placeholder="Phone Number"
              />
              <Input
                onChange={onChangeEmail}
                value={email}
                placeholder="Email"
              />
              <AddBtn type="submit">Add</AddBtn>
            </Form>
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default AddContacts;
