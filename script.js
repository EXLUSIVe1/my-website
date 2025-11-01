import { database } from "./firebase-config.js";
import { ref, onValue, push, set } from "firebase/database";

const productContainer = document.getElementById("productContainer");
const filterCategory = document.getElementById("filterCategory");

const productsRef = ref(database, "products/");
const ordersRef = ref(database, "orders/");

let allProducts = [];
let selectedProduct = null;

// 🔹 Tovarlarni o‘qish
onValue(productsRef, (snapshot) => {
  allProducts = [];
  snapshot.forEach((child) => {
    allProducts.push({ id: child.key, ...child.val() });
  });
  showProducts(allProducts);
});

// 🔹 Filtrlash
filterCategory.addEventListener("input", () => {
  const text = filterCategory.value.toLowerCase();
  const filtered = allProducts.filter(p => p.category.toLowerCase().includes(text));
  showProducts(filtered);
});

// 🔹 Tovarlarni ekranga chiqarish
function showProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((item) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price} so'm</p>
      <p><b>${item.category}</b></p>
      <button onclick="openOrder('${item.id}')">🛒 Buyurtma berish</button>
    `;
    productContainer.appendChild(div);
  });
}

// 🔹 Modalni ochish
window.openOrder = (id) => {
  selectedProduct = allProducts.find(p => p.id === id);
  document.getElementById("orderModal").style.display = "flex";
};

// 🔹 Modalni yopish
window.closeModal = () => {
  document.getElementById("orderModal").style.display = "none";
};

// 🔹 Buyurtmani yuborish
document.getElementById("submitOrder").onclick = () => {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();

  if (!name || !phone) return alert("Iltimos, ism va telefon raqamingizni kiriting!");
  if (!selectedProduct) return alert("Tovar tanlanmagan!");

  const newOrder = {
    customerName: name,
    customerPhone: phone,
    productName: selectedProduct.name,
    productPrice: selectedProduct.price,
    productCategory: selectedProduct.category,
    productImage: selectedProduct.imageUrl,
    date: new Date().toLocaleString()
  };

  const newOrderRef = push(ordersRef);
  set(newOrderRef, newOrder);

  alert("✅ Buyurtma yuborildi! Tez orada siz bilan bog‘lanamiz.");
  document.getElementById("customerName").value = "";
  document.getElementById("customerPhone").value = "";
  closeModal();
};
