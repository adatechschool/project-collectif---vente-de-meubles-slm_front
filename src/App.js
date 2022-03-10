import React from "react";
import Navigation from "./components/Navbar/Navbar";
import ProductGrid from "./components/ProductGrid"

const App = () => {

  const catalogue = [
    {
      name: "Étagère en bois de sipalu",
      type: "Étagère",
      imgSrc: "https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "1700"
      
    },
    { 
      name:"Canapé cuire Ikéa",
      type:"Canapé",
      imgSrc:"https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "1205"
    },
    {
      name:"Table en marbre",
      type: "Table",
      imgSrc: "https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "6000"
    },
    {
      name: "Une chaise ordinaire",
      type: "Chaise",
      imgSrc: "https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "25"
    }
  ]

  return (
    <>
      <Navigation />
      <ProductGrid catalogue={catalogue}/>
      <Footer />
    </>
  )
}
export default App;

