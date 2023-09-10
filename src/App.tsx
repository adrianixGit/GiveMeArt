import { Wrapper, BgCorner } from "../src/styles/Wrapper.styled";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Progress } from "./components/Progress";
import { PersonalizeArtContainer } from "./components/PersonalizeArtContainer";
import { GetInspired } from "./components/GetInspired";
import bg from "./assets/bg.png";
function App() {
  return (
    <Wrapper>
      <BgCorner src={bg}></BgCorner>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Progress />
      <PersonalizeArtContainer />
      <GetInspired />
    </Wrapper>
  );
}

export default App;
