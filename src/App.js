import Book from "./components/Book";

const App = () => {
  const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-kamen-mudrcu-9788000061917.jpg.webp",
      title: "Harry Potter a Kámen mudrců"
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/333420609/10.jpg.webp",
      title: "Harry Potter a Tajemná komnata"
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-list/mod_eshop/produkty/h/harry-potter-a-vezen-z-azkabanu-9788000063393.jpg.webp",
      title: "Harry Potter a Vězeň z Azkabanu"
    },
    {
      id: 4,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/645233890/sikmy-kostel-3.jpg.webp",
      title: "Šikmý kostel 3"
    }


  ]

  return (
    <div className="all-books">
      <Book myimage={books[0].image} mytitle={books[0].title} />
      <Book myimage={books[1].image} mytitle={books[1].title} />
      <Book myimage={books[2].image} mytitle={books[2].title} />
      <Book myimage={books[3].image} mytitle={books[3].title} />
    </div>
  )
}

export default App;


// tohle není html jazyk, ale JSX = javascript XML
// komponenta je funkce, která vrací JSX (HTML v JavaScriptu)
//komponenta má stejný název jako soubor, ve kterém je napsaná
// komponenta obsahuje return, který vrací JSX (HTML v JavaScriptu)
//na konci souboru musí být export, aby bylo možné komponentu použít v jiných souborech export default App; 
// v returnu  musí něco být, jinak bude chyba, že komponenta nevrací nic