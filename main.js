// PRODUCTOS
const products = [
{ name:"Taza Sublimada Personalizada", price:"$3.50", image:"https://i.pinimg.com/1200x/f0/50/53/f050532e6e4a456100058c38300b8c48.jpg"},
{ name:"Jarra Nevada Personalizada", price:"$10.00", image:"https://i.pinimg.com/736x/21/44/bf/2144bfa6e7f6227264fe6214ef9523cc.jpg"},
{ name:"Taza Magica Sublimada", price:"$5.00", image:"https://i.pinimg.com/1200x/23/fc/be/23fcbec5253d1058ee929b4cc3453627.jpg"},
{ name:"Cojines Personalizados", price:"$12.00", image:"https://i.pinimg.com/736x/30/12/c9/3012c95fb3068c855d4484470f216618.jpg"},
{ name:"Camiseta Blanca Sublimada", price:"$8.50", image:"https://i.pinimg.com/736x/d5/85/d2/d585d2901c661461b23cead2d87ce362.jpg"},
{ name:"Camisa Estampada", price:"$13.00", image:"https://i.pinimg.com/736x/f2/77/09/f27709fa7194d7b0bffa46558b0e7624.jpg"},
{ name:"Termos Personalizados", price:"$10.00", image:"https://i.pinimg.com/736x/19/ab/41/19ab41f63f392313806cafdb9249c2b0.jpg"},
{ name:"LandYard Personalizados", price:"$3.00", image:"https://i.pinimg.com/736x/f0/c8/84/f0c8848e812440e9e1442431993c73af.jpg"}
];

const container=document.getElementById("productContainer");

function renderProducts(){
    products.forEach(product=>{
        container.insertAdjacentHTML("beforeend", `
        <div class="card">
            <img src="${product.image}" loading="lazy" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button onclick="buy('${product.name}','${product.price}')">Comprar</button>
        </div>
        `);
    });
}

function buy(name, price){
    const phone = "50374018164";
    const message = `Hola, quiero comprar ${name} - ${price}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

// SALUDO SEGÚN HORA
function setGreeting(){
    const hour = new Date().getHours();
    let greeting;

    if(hour >= 5 && hour < 12){
        greeting="🌅 Buenos Días";
    }
    else if(hour >= 12 && hour < 18){
        greeting="☀ Buenas Tardes";
    }
    else{
        greeting="🌙 Buenas Noches";
    }

    const greetingEl = document.getElementById("greeting");
    greetingEl.innerText = greeting;
    greetingEl.style.opacity = 0;
    greetingEl.offsetHeight; // trigger reflow
    greetingEl.style.animation = "fadeDown 0.6s ease forwards";
}

// TRANSICIÓN INTRO -> MAIN
window.onload = function(){
    setGreeting();
    renderProducts();

    setTimeout(()=>{
        document.getElementById("intro").classList.add("hide");
        document.getElementById("mainContent").classList.add("show");
        document.body.style.overflow="auto";
    }, 2500);
}

// PARTICULAS
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = window.innerWidth < 600 ? 40 : 80;

for(let i=0;i<particleCount;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2+1,
        dx: (Math.random()-0.5)*0.5,
        dy: (Math.random()-0.5)*0.5
    });
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle = 'rgba(139,92,246,0.7)';
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});