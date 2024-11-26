import { AlphabetContainer, Alphabet } from "./styledComponent";

const AlphabetSideBar = () => {
  const alphabetsList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <AlphabetContainer>
      {alphabetsList.map((alphabets) => (
        <Alphabet key={alphabets} href={`#${alphabets}`}>
          {alphabets}
        </Alphabet>
      ))}
    </AlphabetContainer>
  );
};

export default AlphabetSideBar;
