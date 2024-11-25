import {
  ContactItem,
  Letter,
  List,
  Item,
  Profile,
  ContactName,
} from "./styledComponents";

const ContactsList = (props) => {
  const { contactData } = props;
  const { contacts } = contactData;
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

  return (
    <ContactItem>
      <Letter>{contactData.id}</Letter>
      <hr />
      <List>
        {contacts.map((eachContact) => {
          const randomIndex = Math.floor(Math.random() * profileBgList.length);
          return (
            <Item key={eachContact.id}>
              <Profile bgColor={profileBgList[randomIndex]}>
                {contactData.id}
              </Profile>
              <ContactName>{eachContact.name}</ContactName>
            </Item>
          );
        })}
      </List>
    </ContactItem>
  );
};

export default ContactsList;
