import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BgContainer, Header, MenuHeader } from "../../styledComponents";
import ContactsContext from "../../ContactsContext";
import { FavoriteContactsList, FavoriteContainer } from "./styledComponents";
import Footer from "../Footer";
import ContactCard from "../ContactCard";

const FavoriteContacts = () => {
  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { contactsList } = value;
        const matchedContacts = [];
        if (contactsList.length !== 0 || contactsList !== null) {
          contactsList.forEach((group) => {
            const matchingContacts = group.contacts.filter(
              (contact) => contact.isFavorite === true,
            );
            matchedContacts.push(...matchingContacts);
          });
        }

        return (
          <BgContainer>
            <FavoriteContainer>
              <Header>
                <MenuHeader>Favorites</MenuHeader>
                <FaStar />
              </Header>

              <FavoriteContactsList>
                {matchedContacts.map((eachContact) => (
                  <Link
                    to={`/contacts/${eachContact.id}`}
                    className="link"
                    key={eachContact.id}
                  >
                    <ContactCard contactObj={eachContact} />
                  </Link>
                ))}
              </FavoriteContactsList>
              <Footer />
            </FavoriteContainer>
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default FavoriteContacts;
