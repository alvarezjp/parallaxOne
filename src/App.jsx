import styled from "styled-components";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Gallery from "./components/Gallery/Gallery";
import ContactMe from "./components/ContactMe/ContactMe";


const Caja = styled.div`
height: 100vh;
width: 100%;
border: 3px solid blue;
`

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Intro/>
      <Gallery/>
      <ContactMe/>


    </>
  );
}

export default App;
