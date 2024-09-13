import styled from "styled-components";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";


const Caja = styled.div`
height: 100vh;
width: 100%;
border: 3px solid blue;
`

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Intro/>


    </>
  );
}

export default App;
