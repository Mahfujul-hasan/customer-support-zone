import { Suspense } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection";
import { ToastContainer } from "react-toastify";


const fetchTickets= async()=>{
  const res= await fetch('/data.json');
  return res.json();
}

function App() {
  const fetchPromise=fetchTickets();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={"loading..."}>
          <MainSection fetchPromise={fetchPromise}></MainSection>
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  )
}

export default App
