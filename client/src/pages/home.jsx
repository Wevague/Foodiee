import React from "react";
import Navbar from "../components/navbar";
import Options from "../components/header";
import Menus from "../components/menus";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Options />
      </header>
      <main>
        <Menus />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default HomePage;
