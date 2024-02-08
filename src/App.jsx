import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
