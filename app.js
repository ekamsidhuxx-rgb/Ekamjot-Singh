let products = [
  {id:1, name:"Oversized Tee", price:799},
  {id:2, name:"Street Hoodie", price:1299},
  {id:3, name:"Cargo Pants", price:999}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
  let item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function loadProducts(){
  let box = document.getElementById("products");
  if(!box) return;

  box.innerHTML = "";

  products.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})" class="btn">Add to Cart</button>
      </div>
    `;
  });
}

function loadCart(){
  let box = document.getElementById("cart");
  if(!box) return;

  box.innerHTML = "";
  let total = 0;

  cart.forEach((c,i)=>{
    total += c.price;
    box.innerHTML += `
      <div class="card">
        ${c.name} - ₹${c.price}
      </div>
    `;
  });

  box.innerHTML += `<h3>Total: ₹${total}</h3>`;
}

loadProducts();
loadCart();
