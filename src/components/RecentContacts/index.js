import {v4 as uuidV4} from 'uuid'
import Popup from 'reactjs-popup'
import { BiSolidPhoneOutgoing } from "react-icons/bi";
import { IoIosInformationCircle } from "react-icons/io";
import CallModal from '../CallModal'
import { BgContainer,Header,MenuHeader } from "../../styledComponents"
import { RecentContainer,RecentList,CallInfoContainer,InfoButton,CallItem,DateText,CallDate } from "./styledComponents"
import ContactsContext from "../../ContactsContext"
import ContactCard from "../ContactCard"

const RecentContacts = () =>{
  function timeAgo(timestamp) {
    const now = new Date();
    const then = new Date(timestamp);
    const diffInSeconds = Math.floor((now - then) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(diffInSeconds / 3600);
    const days = Math.floor(diffInSeconds / 86400);

    if (diffInSeconds < 60) {
        return `${diffInSeconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else {
        return `${days} days ago`;
    }
}
    return(
        <ContactsContext.Consumer>
        {value=>{
            const { recentCalls, contactsList,updateRecentCalls} = value;
            
            function getContactsFromRecentCalls(contactsList, recentCalls) {
              // Flatten the contactsList to make searching easier
              const allContacts = contactsList.flatMap((group) => group.contacts);
            
              // Iterate through recentCallsList and build the resulting array
              const result = recentCalls.map((call) => {
                // Check if the number exists in allContacts
                const contact = allContacts.find((c) => c.phone === call.number);
                

      
                if (contact) {
                  // If found, return the contact object
                  return {...contact,timestamp:timeAgo(call.timestamp)};
                } else {
                  // If not found, create a new contact object
                  return {
                    id: uuidV4(), // Initial value for ID
                    name: "Unknown Number", // Use number as name
                    phone: call.number,
                    profileBgColor: "lightgray", // Default background color
                    email: "",
                    isChecked: false,
                    isFavorite: false,
                    timestamp:timeAgo(call.timestamp)
                  };
                }
              });
            
              return result;
            }
            
            const updatedContacts = getContactsFromRecentCalls(contactsList, recentCalls);
            console.log(updatedContacts)

            const handleCall = (currentNum) => {
              updateRecentCalls((prevCalls) => [
                ...prevCalls,
                { number:currentNum , timestamp: new Date() },
              ]);
            };
            
            return(<BgContainer>
                <RecentContainer>
                <Header>
                <MenuHeader>Recents</MenuHeader>
                </Header>
                <RecentList>
                {updatedContacts.map(eachCalls=>(
                  <CallItem>
                  <Popup

                  modal
                  trigger={
                    <div>
                    <div onClick={()=>{
                      handleCall(eachCalls.phone)
                    }}>
                    <ContactCard contactObj={eachCalls} key={eachCalls.id} />
                    </div>
                    </div>
                  }
                >
                  {(close) => (
                    <CallModal
                      closingFunc={close}
                      callDetails={{ dialedNumber: eachCalls.phone }}
                      
                    />
                  )}
                </Popup>
                <CallInfoContainer>
                  <InfoButton>
                  <IoIosInformationCircle/>
                  </InfoButton>
                  <CallDate>
                    <BiSolidPhoneOutgoing/>
                    <DateText>
                      {eachCalls.timestamp}
                    </DateText>
                  </CallDate>
                </CallInfoContainer>
                </CallItem>
                  )
    )}
                  
                  
                </RecentList>
                </RecentContainer>
            </BgContainer>)
        }}
    
    </ContactsContext.Consumer>)


}

export default RecentContacts