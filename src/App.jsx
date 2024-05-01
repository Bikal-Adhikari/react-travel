import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import { Routes, Route } from "react-router-dom";
import { getData } from "./helpers/axiosHelper";

const initialToursState = {
  id: "",
  name: "",
  info: "",
  image: "",
  price: "",
  duration: "",
  highlights: [],
  includes: [],
};
function App() {
  const [data, setData] = useState(initialToursState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getData();
        setData(responseData); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once after initial render
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tours" element={<Tours data={data} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
