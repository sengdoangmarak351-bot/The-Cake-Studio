let cart = [];
let total = 0;

function addToCart(name,price){
  cart.push({name,price});
  total += price;
  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

function updateCart(){
  let list = document.getElementById("cart-items");
  list.innerHTML="";
  cart.forEach(item=>{
    let li=document.createElement("li");
    li.innerText=item.name+" - ₹"+item.price;
    list.appendChild(li);
  });
  document.getElementById("total").innerText=total;
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}

function checkout(){
  alert("Demo Payment Successful!");
  cart=[];
  total=0;
  updateCart();
  document.getElementById("cart-count").innerText=0;
}

function reservationSuccess(){
  alert("Table Reserved Successfully!");
}

function customCakeSuccess(){
  alert("Custom Cake Request Submitted!");
}

function scrollToMenu(){
  document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}