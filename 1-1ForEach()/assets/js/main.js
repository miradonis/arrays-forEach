console.log("test");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

getraenke.sort();


getraenke.forEach((getraenk, index) => {
    console.log(index,getraenk);
    document.write(index, getraenk);
});