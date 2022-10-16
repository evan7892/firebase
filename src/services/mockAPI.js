const data = [
    {
      id: 1,
      title: "Mouse Logitech G203",
      price: 12000,
      stock: 6,
      category: "mouse",
      detail:
        "Hermoso mouse gamer con luces rgb para una mejor xp",
      img: "/assets/mouse.jpg",
    },
    {
      id: 2,
      title: "Teclado Infarex K10 XPG",
      price: 25000,
      detail:
        "Teclado gamer mécanico con increibles switches blue",
      img: "/assets/teclado.jpg",
      stock: 3,
      category: "teclados",
    },
    {
      id: 3,
      title: "Diademas Astro A10",
      price: 15000,
      detail:
        "Hermosas Diademas onikuma gamers con cancelación de ruido y un sonido envolvente",
      img: "/assets/diademas.jpg",
      stock: 2,
      category: "diademas",
    },
    {
      id: 4,
      title: "Microfono Blue Yeti",
      price: 98000,
      stock: 2,
      category: "microfonos",
      detail:
        "Microfono profesional casting Blue yeti para streaming",
      img: "/assets/microfono.jpg",
    },
    {
      id: 5,
      title: "Camara web Logitech Brio 4k",
      price: 25002,
      detail:
        "Hermosa cámara web logitech 4k, con la mejor resolución del mercado.",
      img: "/assets/camara.jpg",
      stock: 3,
      category: "camaras",
    },
    {
      id: 6,
      title: "Monitor LG 22",
      price: 2500,
      detail:
        "Hermoso monitor perfecto para el gaming",
      img: "/assets/monitor.jpg",
      stock: 7,
      category: "monitores",
    },
    {
        id: 7,
        title: "Combo 3 en 1 Redragon",
        price: 2500,
        detail:
          "Hermoso combo 3 en 1 teclados, mouse y diademas",
        img: "/assets/combo.jpg",
        stock: 7,
        category: "combos",
      },
      {
        id: 8,
        title: "Chasis Aerocool",
        price: 2500,
        detail:
          "Chasis Aerocool economico con diseño gamer",
        img: "/assets/chasis.jpg",
        stock: 7,
        category: "chasis",
      },
  ];
  export default function getItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1500);
    });
  }


  export function getItemsByCategory(cat) {
    return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
        return item.category === cat;
      });
      setTimeout(() => {
        console.log("Encontramos:", itemFind);
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 1500);
    });
  }
  
  export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
      let itemFind = data.find((item) => {
        return item.id === parseInt(idItem);
      });
      setTimeout(() => {
        if (itemFind) resolve(itemFind);
        else reject(new Error("item no encontrado"));
      }, 1500);
    });
  
  }