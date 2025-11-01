// --- BUYURTMALAR BLOKI ---
import { onValue as onValueOrders } from "firebase/database";
const ordersList = document.getElementById("ordersList");
const ordersRef = ref(database, "orders/");

onValueOrders(ordersRef, (snapshot) => {
  ordersList.innerHTML = "";
  snapshot.forEach((child) => {
    const order = child.val();
    const key = child.key;
    const div = document.createElement("div");
    div.style.background = "#222";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.borderRadius = "10px";
    div.innerHTML = `
      <img src="${order.productImage}" width="80">
      <p><b>${order.customerName}</b> (${order.customerPhone})</p>
      <p>${order.productName} - ${order.productPrice} so'm</p>
      <p><small>${order.date}</small></p>
      <button onclick="deleteOrder('${key}')">❌ O‘chirish</button>
    `;
    ordersList.appendChild(div);
  });
});

window.deleteOrder = (id) => {
  remove(ref(database, "orders/" + id));
};
