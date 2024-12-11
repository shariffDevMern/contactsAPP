import { v4 as uuidV4 } from "uuid";
import Popup from "reactjs-popup";
import { BiSolidPhoneOutgoing } from "react-icons/bi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Cookies from "js-cookie";
import CallModal from "../CallModal";
import { BgContainer, Header, MenuHeader } from "../../styledComponents";
import {
  RecentContainer,
  RecentList,
  CallInfoContainer,
  InfoButton,
  CallItem,
  DateText,
  CallDate,
  NoHistoryView,
  NoHistoryText,
  AddUnknownContactBtn,
  ClearRecentBtn,
} from "./styledComponents";
import ContactsContext from "../../ContactsContext";
import ContactCard from "../ContactCard";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import {
  AlertBtnContainer,
  AlertButton,
  AlertMessage,
  PopUpContainer,
} from "../Contacts/styledComponents";

const RecentContacts = () => {
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
  return (
    <ContactsContext.Consumer>
      {(value) => {
        const { recentCalls, contactsList, updateRecentCalls } = value;

        function getContactsFromRecentCalls(contactsList, recentCalls) {
          // Flatten the contactsList to make searching easier
          const allContacts = contactsList.flatMap((group) => group.contacts);

          // Iterate through recentCallsList and build the resulting array
          const result = recentCalls.map((call) => {
            // Check if the number exists in allContacts
            const contact = allContacts.find((c) => c.phone === call.number);

            if (contact) {
              // If found, return the contact object
              return {
                ...contact,
                timestamp: timeAgo(call.timestamp),
                isUnknown: false,
              };
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
                timestamp: timeAgo(call.timestamp),
                isUnknown: true,
              };
            }
          });

          return result;
        }

        const updatedContacts = getContactsFromRecentCalls(
          contactsList,
          recentCalls,
        );
        

        const renderNoHistoryView = () => {
          return (
            <NoHistoryView>
              <NoHistoryText>No History To Show</NoHistoryText>
            </NoHistoryView>
          );
        };

        const handleCall = (currentNum) => {
          updateRecentCalls((prevCalls) => [
            ...prevCalls,
            { number: currentNum, timestamp: new Date() },
          ]);
        };

        const onStoreNumberInCookies = (currentNum) => {
          Cookies.set("phoneNo", currentNum, { expires: 1 });
        };

        const clearRecents = () => {
          updateRecentCalls([]);
          localStorage.setItem("recentCalls", JSON.stringify([]));
        };

        return (
          <BgContainer>
            <RecentContainer>
              <Header>
                <MenuHeader>Recents</MenuHeader>
                {updatedContacts.length>0 && <Popup
                  modal
                  trigger={
                    <div>
                      <ClearRecentBtn>Clear Recents</ClearRecentBtn>
                    </div>
                  }
                  position="bottom left"
                >
                  {(close) => (
                    <>
                      <PopUpContainer>
                        <AlertMessage>Are you sure ?</AlertMessage>
                        <AlertBtnContainer>
                          <AlertButton onClick={()=>close(clearRecents())} delete>
                            Yes
                          </AlertButton>
                          <AlertButton onClick={()=>close()}>No</AlertButton>
                        </AlertBtnContainer>
                      </PopUpContainer>
                    </>
                  )}
                </Popup>}
                
              </Header>
              {updatedContacts.length === 0 ? (
                renderNoHistoryView()
              ) : (
                <RecentList>
                  {updatedContacts.map((eachCalls) => (
                    <CallItem>
                      <Popup
                      
                        modal
                        trigger={
                          <div className="recent-call">
                            <div
                              onClick={() => {
                                handleCall(eachCalls.phone);
                              }}
                            >
                              <ContactCard
                                contactObj={eachCalls}
                                
                              />
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
                        {eachCalls.isUnknown ? (
                          <Link to="/add-contact" className="link">
                            <AddUnknownContactBtn
                              onClick={() => {
                                onStoreNumberInCookies(eachCalls.phone);
                              }}
                            >
                              <FaPlus />
                            </AddUnknownContactBtn>
                          </Link>
                        ) : (
                          <Link
                            className="link"
                            to={`/contacts/${eachCalls.id}`}
                          >
                            <InfoButton>
                              <IoIosInformationCircle />
                            </InfoButton>
                          </Link>
                        )}

                        <CallDate>
                          <BiSolidPhoneOutgoing />
                          <DateText>{eachCalls.timestamp}</DateText>
                        </CallDate>
                      </CallInfoContainer>
                    </CallItem>
                  ))}
                </RecentList>
              )}

              <Footer />
            </RecentContainer>
          </BgContainer>
        );
      }}
    </ContactsContext.Consumer>
  );
};

export default RecentContacts;
