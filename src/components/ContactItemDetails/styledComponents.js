import styled from "styled-components";

export const ProfileBackground = styled.div`
  background-image: linear-gradient(to bottom, white, #3f6252);
  height: 40vh;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding:10px;
`;

export const HeaderMenu= styled.div`
display:flex;
justify-content:space-between;
width:100%;
align-items:center;
`

export const HeaderBtn = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
  border-radius:10px;
  padding:10px;
  background-color: #3f6252;
  border-style:none;
  color: #a6ffd5;
  `


export const Profile = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  padding: 5px;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: white;
`;

export const UserDetailsContainer = styled.div`
  padding: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  border: 1px solid #3f6252;
  border-radius: 5px;
  ::placeholder {
    color: #3f6252;
    opacity: 0.8;
  }

  svg {
    height: 30px;
    width: 30px;
    background-color: #3f6252;
    padding: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    color: #a6ffd5;
  }
`;

export const InputBox = styled.input`
  background-color: transparent;
  border-style: none;
  outline: none;
  padding-left: 10px;
  color: #3f6252;
  font-size: 20px;
  flex-grow: 1;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

export const FeatureButton = styled.button`
  background-color: #3f6252;
  border-radius: 10px;
  width: 100%;
  border-style: none;
  color: #a6ffd5;
  padding: 20px;
  svg {
    height: 30px;
    width: 30px;
  }
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
