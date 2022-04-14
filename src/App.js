import React from "react"
import './App.css';
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Singup from "./components/Singup";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Featured />
    <Singup />
    <Footer />
    </>
  );
}

export default App;
