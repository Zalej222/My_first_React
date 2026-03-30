# 📚 React Book List App

Jednoduchá React aplikace zobrazující seznam knih s obrázkem, názvem, popisem a tlačítkem pro objednání.

---

## 🚀 Funkce aplikace

* zobrazení seznamu knih
* každá kniha obsahuje:

  * obrázek
  * název
  * popis
  * tlačítko „Objednat“
* responzivní layout pomocí Flexboxu
* komponentová struktura (React)

---

## 🧩 Použité technologie

* React
* JSX
* CSS (Flexbox)
* JavaScript (ES6)

---

## 📁 Struktura projektu

```
src/
│
├── components/
│   ├── Book.js
│   ├── Book.css
│   ├── OrderButton.js
│   └── OrderButton.css
│
├── App.js
├── index.js
└── index.css
```

---

## ⚙️ Jak aplikace funguje

### 1. App.js

Obsahuje pole knih a vykresluje komponenty Book.

Používá se `map()` pro dynamické vykreslení:

```jsx
{books.map((book) => (
  <Book key={book.id} myimage={book.image} mytitle={book.title} />
))}
```

---

### 2. Book komponenta

Zobrazuje jednotlivou knihu:

* přijímá props (`myimage`, `mytitle`)
* obsahuje:

  * obrázek
  * nadpis
  * text
  * tlačítko

---

### 3. OrderButton komponenta

Zobrazuje tlačítko:

```jsx
<button className="btn">Objednat</button>
```

---

## 🎨 Stylování

### Layout knih

```css
.all-books {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

---

### Karta knihy

```css
.one-book {
    width: 300px;
}
```

---

### Obrázek

```css
.one-book img {
    width: 45%;
    height: 200px;
    object-fit: cover;
}
```

---

### Zarovnání textu

```css
.main-heading {
    min-height: 60px;
}
```

➡️ zajišťuje, že popisy začínají ve stejné výšce

---

### Container (šířka stránky)

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

---

## 🧠 Důležité poznatky

* `className` místo `class` v Reactu
* CSS musí být importované v komponentě
* `%` šířka se počítá z rodiče
* `min-height` pomáhá zarovnat obsah
* `flex-wrap` umožňuje zalamování prvků

---

## ▶️ Spuštění projektu

1. instalace balíčků:

```
npm install
```

2. spuštění:

```
npm start
```

---

## 🚀 Možná rozšíření

* přidání ceny knihy
* klikací tlačítko (onClick)
* košík
* filtrování knih
* responzivní design pro mobil

---

## ✨ Autor

Projekt vytvořen jako součást učení Reactu a CSS layoutů.
