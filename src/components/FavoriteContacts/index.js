import {FaStar} from "react-icons/fa";
import { BgContainer, Header, MenuHeader, } from "../../styledComponents";
import ContactsContext from "../../ContactsContext";
import {FavoriteContactsList,FavoriteContainer} from './styledComponents'
import Footer from "../Footer";


const FavoriteContacts = () =>{

        return(<ContactsContext.Consumer>
            {value=>{
                // const {contactsList} = value

                return(

                <BgContainer>
                    <FavoriteContainer>
                    <Header>
                        <MenuHeader>Favorites</MenuHeader>
                        <FaStar/>
                    </Header>
                    
                        <FavoriteContactsList>

                        </FavoriteContactsList>
                    < Footer />
                    
                    </FavoriteContainer>
                </BgContainer>)

            }}
        </ContactsContext.Consumer>)

}

export default FavoriteContacts