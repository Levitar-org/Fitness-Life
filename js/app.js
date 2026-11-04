const WA="5493496660565";
const I={"HERO": "images/hero.jpg", "WP": "images/whey-tri-blend.jpg", "WC": "images/whey-colageno.jpg", "TW": "images/turbo-whey.jpg", "G1": "images/entrenar-1.jpg", "G2": "images/entrenar-2.jpg", "G3": "images/entrenar-3.jpg", "LOGO": "images/logo.png", "G4": "images/entrenar-4.jpg", "CS": "images/colageno-sport.jpg", "CR1": "images/creatina-sin-sabor.jpg", "CR2": "images/creatina-naranja.jpg", "CIT": "images/citrato-magnesio.jpg", "MM": "images/multi-magnesio.jpg", "MQ": "images/magnesio-quelato.jpg", "OM": "images/omega-3-duo.jpg", "VD": "images/vitamina-d.jpg"};
/* Editá productos y precios acá. img:"..." para foto real; k:"bottle" para frasco */
const PRODUCTS=[
 {id:"daily-whey",cat:"Proteínas",name:"Daily 100% Whey Protein",desc:"Proteína de suero de leche para sumar proteína a tu día, en versión diaria y práctica.",ben:["Se prepara fácil: ideal para tu rutina diaria","Sabores: Chocolate o Vainilla","Complementa tu alimentación, no la reemplaza"],c:"#2f80ff",o:[{l:"Chocolate",price:54000},{l:"Vainilla",price:54000}]},
 {id:"whey-colageno",cat:"Proteínas",name:"Whey Protein + Colágeno",desc:"Proteína con colágeno y glucosamina, pensada por la marca para quienes cuidan músculos y articulaciones.",ben:["25 g de proteína y 14 g de colágeno por porción","Con 40 mg de glucosamina, según etiqueta","Suma proteína a tu día de forma práctica"],c:"#27c5d6",img:I.WC,o:[{l:"Chocolate",price:58450},{l:"Vainilla",price:58450}]},
 {id:"turbo-whey",cat:"Proteínas",name:"Turbo Whey Protein",desc:"Reúne proteína, creatina y vitaminas en un solo producto para simplificar tu rutina.",ben:["25 g de proteína por porción, según etiqueta","5 g de creatina y 6 g de BCAA por porción","Todo en uno: práctico para el día a día"],c:"#e5232b",img:I.TW,o:[{l:"Chocolate",price:78000},{l:"Vainilla",price:78000}]},
 {id:"tri-blend",cat:"Proteínas",name:"Tri Blend Whey Protein",desc:"Blend de proteínas isolate, concentrate e hydrolyzed para acompañar tu entrenamiento.",ben:["25 g de proteína por porción, según etiqueta","6 g de BCAA y 13 g de EAA por porción","Ultra soluble: se prepara en segundos"],c:"#e8a33a",img:I.WP,o:[{l:"Chocolate",price:66430},{l:"Vainilla",price:66430}]},
 {id:"creatina",cat:"Creatinas",name:"Creatina Monohidrato 100% pura",desc:"Línea Vitamin Way Sport. Pensada para mejorar el rendimiento muscular en tus entrenamientos.",ben:["Fórmula ultra soluble","5 g de creatina por porción (60 porciones)","Sin sabor 300 g o naranja 378 g"],c:"#ff8a3d",img:I.CR1,o:[{l:"Sin sabor · 300 g",price:24400,img:I.CR1},{l:"Naranja · 378 g",price:24400,img:I.CR2}]},
 {id:"colageno-sport",cat:"Colágeno",name:"Colágeno Sport x360 g",desc:"Colágeno para articulaciones y rendimiento deportivo. Línea Vitamin Way Nutrition.",ben:["Colágeno tipo I, II y III","Con taurina, cafeína, magnesio y vitaminas del complejo B","30 porciones por envase"],c:"#d9e84a",img:I.CS,o:[{l:"Limón · 360 g",price:29900}]},
 {id:"omega3-duo",cat:"Omega 3",name:"Omega 3 Dúo",desc:"Chía + omega 3 marino (1000 mg). Vitamin Way Nutrition, Laboratorios Pharmamerican.",ben:["Según la marca, acompaña el cuidado del colesterol, los triglicéridos y el sistema cardiovascular","Disponible en 30 o 60 cápsulas","Consultá con un profesional antes de sumarlo"],c:"#f2a900",img:I.OM,o:[{l:"30 cápsulas",price:14000},{l:"60 cápsulas",price:null}]},
 {id:"multi-magnesio",cat:"Magnesio",name:"Multi Magnesio en polvo",desc:"Magnesio en formato bebible con 5 fuentes de magnesio y vitamina B6.",ben:["5 fuentes de magnesio + vitamina B6","30 porciones por envase","Se disuelve y se toma como bebida"],c:"#c8e34f",img:I.MM,o:[{l:"Limón · 222 g",price:15000}]},
 {id:"citrato-magnesio",cat:"Magnesio",name:"Citrato de Magnesio en polvo",desc:"Citrato de magnesio en polvo con vitaminas C y D.",ben:["400 mg de citrato por porción","Según la marca, apoya músculos, huesos, balance digestivo y sistema nervioso","Envase de 180 g"],c:"#e9e04a",img:I.CIT,o:[{l:"Limón · 180 g",price:15000}]},
 {id:"magnesio-quelato",cat:"Magnesio",name:"Magnesio Quelato",desc:"Bisglicinato de magnesio con vitamina B6 en cápsulas vegetales.",ben:["Alta absorción y biodisponibilidad, según la marca","30 cápsulas vegetales","Vitamin Way Nutrition · Laboratorios Pharmamerican"],c:"#6c8cff",img:I.MQ,o:[{l:"30 cápsulas vegetales",price:10000}]},
 {id:"vitamina-d",cat:"Vitaminas",name:"Vitamina D",desc:"Vitamina D (4000 UI) con magnesio en cápsulas.",ben:["Según la marca, apoya al sistema inmune","30 cápsulas por envase","Consultá con un profesional antes de sumarla"],c:"#ffb020",img:I.VD,o:[{l:"30 cápsulas",price:10000}]}
];
const CATS=["Todos","Proteínas","Creatinas","Colágeno","Magnesio","Omega 3","Vitaminas"];
const sel={};
const $=s=>document.querySelector(s),fmt=n=>"$"+n.toLocaleString("es-AR");
const tub=c=>`<svg viewBox="0 0 120 150" aria-hidden="true"><ellipse cx="60" cy="142" rx="44" ry="6" fill="#0005"/><rect x="18" y="26" width="84" height="112" rx="10" fill="${c}"/><rect x="12" y="8" width="96" height="24" rx="8" fill="#2a2a33"/><rect x="28" y="56" width="64" height="48" fill="#fff" opacity=".92"/><rect x="36" y="66" width="48" height="6" fill="#08080f"/><rect x="36" y="78" width="34" height="4" fill="#ff3184"/></svg>`;
const bottle=c=>`<svg viewBox="0 0 120 150" aria-hidden="true"><ellipse cx="60" cy="142" rx="34" ry="5" fill="#0005"/><rect x="40" y="6" width="40" height="18" rx="5" fill="#2a2a33"/><rect x="34" y="22" width="52" height="116" rx="16" fill="${c}"/><rect x="40" y="58" width="40" height="52" fill="#fff" opacity=".92"/><rect x="46" y="68" width="28" height="6" fill="#08080f"/><rect x="46" y="80" width="20" height="4" fill="#ff3184"/></svg>`;
const pic=(p,o)=>{const m=(o&&o.img)||p.img;return m?`<img src="${m}" alt="${p.name}${o?" - "+o.l:""}">`:(p.k==="bottle"?bottle(p.c):tub(p.c))};
let cart={},cat="Todos";
$("#heroArt").innerHTML=`<img src="${I.HERO}" alt="Whey Protein, Whey + Collagen y Turbo Whey de Vitaminway"><span class="chip">Pedido directo por WhatsApp</span>`;
function drawProds(){
  $("#seg").innerHTML=CATS.map(c=>`<button data-cat="${c}" aria-pressed="${c===cat}">${c}</button>`).join("");
  $("#prods").innerHTML=PRODUCTS.filter(p=>cat==="Todos"||p.cat===cat).map(p=>{const i=sel[p.id]||0;return `<article class="card" data-pid="${p.id}"><div class="img">${pic(p,p.o[i])}</div><div class="in"><small>${p.cat}</small><h3>${p.name}</h3><p>${p.desc}</p><button class="more" data-more>Leer más</button>${p.o.length>1?`<div class="opts" role="group" aria-label="Opciones de ${p.name}">${p.o.map((o,j)=>`<button class="opt" data-opt="${j}" aria-pressed="${j===i}">${o.l}</button>`).join("")}</div>`:`<span class="var">${p.o[0].l}</span>`}<ul class="ben">${p.ben.map(b=>`<li>${b}</li>`).join("")}</ul><div class="row"><span class="price">${priceTxt(p.o[i].price)}</span><button class="add" data-id="${p.id}">Agregar</button></div></div></article>`}).join("");
}
const priceTxt=n=>n==null?"Consultar":fmt(n);
const lines=()=>Object.entries(cart).map(([k,q])=>{const [id,i]=k.split("|"),p=PRODUCTS.find(x=>x.id===id);return{k,p,o:p.o[i],q}});
const count=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const total=()=>lines().reduce((a,l)=>a+(l.o.price||0)*l.q,0);
const unp=()=>lines().some(l=>l.o.price==null);
function pick(b){const c=b.closest(".card"),id=c.dataset.pid,i=+b.dataset.opt;sel[id]=i;c.querySelectorAll("[data-opt]").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));const o=PRODUCTS.find(x=>x.id===id).o[i];c.querySelector(".price").textContent=priceTxt(o.price);if(o.img){const im=c.querySelector(".img img");im.src=o.img;im.alt=o.l}}
function msg(){
  const l=lines().map(x=>`• ${x.q} x ${x.p.name} (${x.o.l}) — ${x.o.price==null?"precio a confirmar":fmt(x.q*x.o.price)}`);
  const n=$("#name").value.trim(),o=$("#notes").value.trim();
  return ["¡Hola Fitness Life! 👋 Quiero hacer este pedido:","",...l,"",`Total de referencia: ${fmt(total())}${unp()?" (más productos con precio a confirmar)":""}`,n?`Nombre: ${n}`:"",o?`Aclaraciones: ${o}`:"","","¿Me confirman disponibilidad y forma de pago? ¡Gracias!"].filter((x,i,a)=>x||a[i-1]).join("\n");
}
function render(){
  $("#count").textContent=count();$("#total").textContent=fmt(total())+(unp()?" + consulta":"");
  const ls=lines();
  $("#items").innerHTML=ls.length?ls.map(({k,p,o,q})=>`<div class="it"><div class="t">${pic(p,o)}</div><div><h4>${p.name}</h4><span>${o.l} · ${priceTxt(o.price)}</span><div class="qty"><button data-d="-1" data-id="${k}" aria-label="Quitar uno">−</button><output>${q}</output><button data-d="1" data-id="${k}" aria-label="Sumar uno">+</button></div></div><button class="rm" data-rm="${k}">Quitar</button></div>`).join(""):`<div class="empty"><b>Tu pedido está vacío</b>Agregá productos del catálogo para empezar.</div>`;
  const s=$("#send");s.setAttribute("aria-disabled",ls.length?"false":"true");
  s.href=ls.length?`https://wa.me/${WA}?text=${encodeURIComponent(msg())}`:"#";
}
function open(v){$("#drawer").classList.toggle("on",v);$("#shade").classList.toggle("on",v);$("#drawer").setAttribute("aria-hidden",String(!v));}
document.addEventListener("click",e=>{
  const op=e.target.closest("[data-opt]");if(op){pick(op);return;}
  const mo=e.target.closest("[data-more]");if(mo){const o=mo.closest(".card").classList.toggle("open");mo.textContent=o?"Leer menos":"Leer más";return;}
  const g=e.target.closest("[data-cat]");if(g){cat=g.dataset.cat;drawProds();watch();return;}
  const a=e.target.closest(".add");
  if(a){const k=a.dataset.id+"|"+(sel[a.dataset.id]||0);cart[k]=(cart[k]||0)+1;render();a.textContent="Agregado ✓";a.classList.add("ok");setTimeout(()=>{a.textContent="Agregar";a.classList.remove("ok")},1200);return;}
  const q=e.target.closest("[data-d]");
  if(q){const id=q.dataset.id;cart[id]=Math.max(0,(cart[id]||0)+Number(q.dataset.d));if(!cart[id])delete cart[id];render();return;}
  const r=e.target.closest("[data-rm]");if(r){delete cart[r.dataset.rm];render();}
});
$("#open").onclick=()=>open(true);$("#close").onclick=()=>open(false);$("#shade").onclick=()=>open(false);
document.addEventListener("keydown",e=>{if(e.key==="Escape")open(false)});
$("#name").oninput=$("#notes").oninput=render;
$("#send").addEventListener("click",e=>{if($("#send").getAttribute("aria-disabled")==="true")e.preventDefault()});
$("#waDirect").href=`https://wa.me/${WA}?text=${encodeURIComponent("¡Hola Fitness Life! Quiero consultar por sus suplementos.")}`;
drawProds();render();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -5% 0px"});
function watch(){[[".head","head"],[".pillars>div","up"],[".gg figure","zoom"],[".prods .card","up"],[".seg","up"],[".note","up"],[".steps>div","up"],[".faq","up"],[".final","up"]].forEach(([q,v])=>document.querySelectorAll(q+":not([data-r])").forEach(el=>{el.dataset.r=v;el.style.setProperty("--d",Math.min([...el.parentNode.children].indexOf(el),5));io.observe(el)}))}
watch();
const prog=$("#progress"),art=document.querySelector(".hero-art img");let tk=false;
function onS(){tk=false;const m=document.documentElement.scrollHeight-innerHeight;prog.style.width=(m>0?scrollY/m*100:0)+"%";if(art&&scrollY<innerHeight*1.2)art.style.setProperty("--py",(scrollY*.07)+"px")}
addEventListener("scroll",()=>{if(!tk){tk=true;requestAnimationFrame(onS)}},{passive:true});onS();
