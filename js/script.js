const contenedor = document.getElementById("contenedor");
const buscador = document.getElementById("buscador");
const btnLocales = document.getElementById("btnLocales");
const btnApi = document.getElementById("btnApi");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const cerrar = document.getElementById("cerrar");

const API_KEY = "live_W3AFgO4kLlHZEpxtLV2WWR3gKw2KPHqRyhrJeNWBiymnfP1bbF9UCfqrpnJ8d5x2";

const felinos = [
{
nombre:"León",
cientifico:"Panthera leo",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Vulnerable",
curiosidad:"El rugido de un león puede oírse hasta a 8 km de distancia.",
dato:"Los leones son los únicos felinos que viven en grupos sociales complejos llamados manadas.",
InfoEspecie:{
habitat:"Sabana africana y regiones de bosque abierto con abundante agua y presas. Necesitan zonas de sombra y arbustos para acechar a sus presas.",
alimentacion:"Carnívoros; cazan grandes herbívoros como ñus, cebras, antílopes y búfalos. La caza es realizada principalmente por las leonas en grupo.",
habilidad:"Gran fuerza y coordinación social que permite abatir presas más grandes. Los machos protegen el territorio y la manada.",
rasgos:"Cuerpo robusto, melena prominente en machos y rugido poderoso. Presentan dimorfismo sexual.",
vidaSocial:"Viven en manadas con varias hembras emparentadas, crías y pocos machos adultos.",
comportamiento:"Diurnos y crepusculares; descansan durante el día y cazan al amanecer o atardecer. Marcan territorios con vocalizaciones y olor."
},
imagen:"assets/images/leon.jpg",
galeria:[
"assets/images/leon1.jpg",
"assets/images/leon2.jpg",
"assets/images/leon3.jpg"
]
},

{
nombre:"Tigre",
cientifico:"Panthera tigris",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"En peligro",
curiosidad:"Cada tigre tiene un patrón de rayas único, como una huella digital.",
dato:"Pueden cruzar grandes ríos y nadar durante varias horas.",
InfoEspecie:{
habitat:"Bosques tropicales, manglares, pastizales y bosques templados de Asia.",
alimentacion:"Carnívoro; caza ciervos, jabalíes, búfalos y a veces aves o peces.",
habilidad:"Cazador solitario extremadamente sigiloso, con gran fuerza física y agilidad.",
rasgos:"Pelaje anaranjado con rayas negras. Gran capacidad para nadar.",
vidaSocial:"Solitario; se junta solo durante el apareamiento o crianza de cachorros.",
comportamiento:"Nocturno y crepuscular; marca territorio con orina y vocalizaciones."
},
imagen:"assets/images/tigre.jpg",
galeria:[
"assets/images/tigre1.jpg",
"assets/images/tigre2.jpg",
"assets/images/tigre3.jpg"
]
},

{
nombre:"Jaguar",
cientifico:"Panthera onca",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Casi amenazado",
curiosidad:"Tiene la mordida más potente de todos los felinos en proporción a su tamaño.",
dato:"Puede triturar caparazones de tortugas con su mordida.",
InfoEspecie:{
habitat:"Selvas tropicales y subtropicales, sabanas y bosques desde México hasta Argentina, siempre cerca del agua.",
alimentacion:"Carnívoro oportunista; caza ciervos, pecaríes, aves, reptiles e incluso peces.",
habilidad:"Fuerte y excelente nadador; caza tanto en tierra como en agua.",
rasgos:"Pelaje dorado con rosetas negras; cuerpo más robusto que el leopardo.",
vidaSocial:"Solitario; los encuentros sociales se limitan al apareamiento.",
comportamiento:"Acecha a sus presas desde posiciones cubiertas y embosca."
},
imagen:"assets/images/jaguar.jpg",
galeria:[
"assets/images/jaguar1.jpg",
"assets/images/jaguar2.jpg",
"assets/images/jaguar3.jpg"
]
},

{
nombre:"Leopardo",
cientifico:"Panthera pardus",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Vulnerable",
curiosidad:"Son excelentes trepadores y suelen subir sus presas a los árboles.",
dato:"La variedad completamente negra se conoce como pantera negra.",
InfoEspecie:{
habitat:"Muy adaptable; selvas, sabanas, bosques y zonas rocosas.",
alimentacion:"Caza mamíferos pequeños y medianos de forma furtiva.",
habilidad:"Trepador formidable; puede arrastrar presas grandes a los árboles.",
rasgos:"Pelaje con rosetas negras sobre fondo dorado; cuerpo compacto y musculoso.",
vidaSocial:"Solitario excepto en época de celo.",
comportamiento:"Nocturno y oportunista; marca territorio con orina y arañazos."
},
imagen:"assets/images/leopardo.jpg",
galeria:[
"assets/images/leopardo1.jpg",
"assets/images/leopardo2.jpg",
"assets/images/leopardo3.jpg"
]
},

{
nombre:"Guepardo / Chita",
cientifico:"Acinonyx jubatus",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Vulnerable",
curiosidad:"Es el animal terrestre más rápido, alcanzando hasta 104 km/h.",
dato:"Sus garras semi retráctiles actúan como tacos para mejorar el agarre al correr.",
InfoEspecie:{
habitat:"Llanuras abiertas y sabanas de África y algunas regiones de Irán.",
alimentacion:"Caza gacelas y antílopes pequeños usando su velocidad.",
habilidad:"Velocidad y aceleración excepcionales en distancias cortas.",
rasgos:"Cuerpo esbelto y ligero, con manchas negras sobre fondo dorado.",
vidaSocial:"Solitario o en pequeños grupos familiares.",
comportamiento:"Diurno y cazador de emboscada a alta velocidad."
},
imagen:"assets/images/guepardo.jpg",
galeria:[
"assets/images/guepardo1.jpg",
"assets/images/guepardo2.jpg",
"assets/images/guepardo3.jpg"
]
},

{
nombre:"Puma / León de montaña",
cientifico:"Puma concolor",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Casi amenazado",
curiosidad:"Es capaz de dar saltos de hasta 5 metros de altura y 8 metros de longitud.",
dato:"Es el felino más extendido de América, desde Canadá hasta el sur de Argentina.",
InfoEspecie:{
habitat:"Bosques, montañas, praderas y desiertos de América.",
alimentacion:"Carnívoro; caza ciervos, conejos, roedores y aves.",
habilidad:"Gran saltador y corredor; excelente acechador solitario.",
rasgos:"Cuerpo ágil y musculoso, pelaje uniforme que varía del beige al rojizo.",
vidaSocial:"Solitario; solo se reúne con otros pumas para apareamiento.",
comportamiento:"Territorial; marca su área con orina y vocalizaciones; actividad crepuscular y nocturna."
},
imagen:"assets/images/puma.jpg",
galeria:[
"assets/images/puma1.jpg",
"assets/images/puma2.jpg",
"assets/images/puma3.jpg"
]
},

{
nombre:"Lince",
cientifico:"Lynx lynx",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Preocupación menor",
curiosidad:"Sus orejas tienen mechones negros que mejoran la audición y expresión facial.",
dato:"Cada lince tiene huellas de patas únicas que permiten identificación individual.",
InfoEspecie:{
habitat:"Bosques templados y boreales de Europa y Asia.",
alimentacion:"Carnívoro; se alimenta de liebres, roedores y aves.",
habilidad:"Gran sigilo y agilidad; trepa y salta con facilidad.",
rasgos:"Orejas puntiagudas con mechones, pelaje moteado y cola corta.",
vidaSocial:"Solitario; mantiene territorios amplios.",
comportamiento:"Cazador nocturno y crepuscular; se camufla entre la vegetación."
},
imagen:"assets/images/lince.jpg",
galeria:[
"assets/images/lince1.jpg",
"assets/images/lince2.jpg",
"assets/images/lince3.jpg"
]
},

{
nombre:"Pantera negra",
cientifico:"Panthera pardus (melanístico)",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Vulnerable",
curiosidad:"El pelaje negro es causado por melanismo; las rosetas todavía se pueden distinguir bajo luz intensa.",
dato:"A veces se confunde con jaguares negros, dependiendo de la región.",
InfoEspecie:{
habitat:"Selvas, bosques y zonas rocosas de Asia y África.",
alimentacion:"Carnívoro oportunista; caza mamíferos pequeños y medianos.",
habilidad:"Excelente trepador; acecha y embosca a sus presas.",
rasgos:"Pelaje negro uniforme con marcas apenas visibles, cuerpo musculoso y ágil.",
vidaSocial:"Solitario excepto en época de reproducción.",
comportamiento:"Nocturno y cauteloso; usa el camuflaje para acechar."
},
imagen:"assets/images/pantera.jpg",
galeria:[
"assets/images/pantera1.jpg",
"assets/images/pantera2.jpg",
"assets/images/pantera3.jpg"
]
},

{
nombre:"Caracal",
cientifico:"Caracal caracal",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Preocupación menor",
curiosidad:"Puede atrapar aves en pleno vuelo con un salto de 3 metros.",
dato:"Sus orejas tienen mechones negros distintivos que ayudan en la comunicación.",
InfoEspecie:{
habitat:"Sabana, semi-desiertos y bosques del África subsahariana y Medio Oriente.",
alimentacion:"Carnívoro; caza aves, roedores y pequeños mamíferos.",
habilidad:"Gran saltador y corredor; captura presas con precisión.",
rasgos:"Pelaje corto rojizo, orejas puntiagudas con mechones negros y cola corta.",
vidaSocial:"Solitario; territorial y principalmente nocturno.",
comportamiento:"Caza al amanecer o atardecer; extremadamente ágil y sigiloso."
},
imagen:"assets/images/caracal.jpg",
galeria:[
"assets/images/caracal1.jpg",
"assets/images/caracal2.jpg",
"assets/images/caracal3.jpg"
]
},

{
nombre:"Ocelote",
cientifico:"Leopardus pardalis",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Preocupación menor",
curiosidad:"Cada ocelote tiene un patrón único de manchas y rayas en el pelaje.",
dato:"Puede trepar árboles con facilidad para escapar de depredadores o descansar.",
InfoEspecie:{
habitat:"Selvas tropicales y bosques secos de América Central y del Sur.",
alimentacion:"Carnívoro; se alimenta de roedores, aves, reptiles y peces.",
habilidad:"Gran trepador y nadador; acecha sigilosamente.",
rasgos:"Pelaje dorado con manchas negras y rayas; cuerpo ágil y flexible.",
vidaSocial:"Solitario; mantiene territorios definidos.",
comportamiento:"Caza principalmente de noche; se comunica con vocalizaciones y marcas de olor."
},
imagen:"assets/images/ocelote.jpg",
galeria:[
"assets/images/ocelote1.jpg",
"assets/images/ocelote2.jpg",
"assets/images/ocelote3.jpg"
]
},

{
nombre:"Serval",
cientifico:"Leptailurus serval",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Preocupación menor",
curiosidad:"Sus patas largas le permiten saltar verticalmente hasta 3 metros para capturar aves.",
dato:"Tiene la mayor relación tamaño-pata de todos los felinos, facilitando su caza en hierba alta.",
InfoEspecie:{
habitat:"Sabana, humedales y zonas de pastizal en África subsahariana.",
alimentacion:"Carnívoro; caza aves, roedores y pequeños mamíferos.",
habilidad:"Saltador y corredor excepcional; gran agilidad en hierbas altas.",
rasgos:"Pelaje amarillo con manchas negras; orejas grandes y patas largas.",
vidaSocial:"Solitario; evita competencia directa con otros servales.",
comportamiento:"Caza principalmente al amanecer y al atardecer; usa oído y visión para localizar presas."
},
imagen:"assets/images/serval.jpg",
galeria:[
"assets/images/serval1.jpg",
"assets/images/serval2.jpg",
"assets/images/serval3.jpg"
]
},

{
nombre:"Gato de Pallas / Manul",
cientifico:"Otocolobus manul",
clase:"Mammalia",
orden:"Carnivora",
familia:"Felidae",
estado:"Casi amenazado",
curiosidad:"Tiene un pelaje muy denso que le permite sobrevivir en climas extremadamente fríos.",
dato:"Sus ojos no cambian mucho de tamaño según la luz, por lo que depende del sigilo más que de la visión nocturna.",
InfoEspecie:{
habitat:"Estepas y zonas rocosas de Asia Central.",
alimentacion:"Carnívoro; se alimenta de pequeños roedores, aves y lagartos.",
habilidad:"Gran acechador; se mueve lentamente para acercarse a sus presas.",
rasgos:"Pelaje grisáceo espeso, patas cortas y cuerpo robusto; cara redondeada.",
vidaSocial:"Solitario; vive y caza individualmente.",
comportamiento:"Caza durante el día y la noche; permanece oculto entre rocas y vegetación baja."
},
imagen:"assets/images/pallas.jpg",
galeria:[
"assets/images/pallas1.jpg",
"assets/images/pallas2.jpg",
"assets/images/pallas3.jpg"
]
}

];

/* ========== MOSTRAR CARDS ========== */

function mostrarFelinos(lista){
  contenedor.innerHTML="";
  lista.forEach((f,index)=>{
    contenedor.innerHTML+=`
      <div class="card" onclick="abrirModal(${index})">
        <img src="${f.imagen}">
        <h3>${f.nombre}</h3>
      </div>
    `;
  });
}

mostrarFelinos(felinos);

/* ========== MODAL ========== */

function abrirModal(index){
  const f = felinos[index];
  modal.style.display="flex";

  modalBody.innerHTML=`
    <h2>${f.nombre}</h2>
    <p><strong>Nombre científico:</strong> ${f.cientifico}</p>
    <p><strong>Clase:</strong> ${f.clase}</p>
    <p><strong>Orden:</strong> ${f.orden}</p>
    <p><strong>Familia:</strong> ${f.familia}</p>
    <p><strong>Estado:</strong> ${f.estado}</p>
    <p><strong>Curiosidad:</strong> ${f.curiosidad}</p>
    <p><strong>Dato interesante:</strong> ${f.dato}</p>
    <hr>
    <h3>Información de la especie</h3>
    <p><strong>Hábitat:</strong> ${f.InfoEspecie.habitat}</p>
    <p><strong>Alimentación:</strong> ${f.InfoEspecie.alimentacion}</p>
    <p><strong>Habilidad:</strong> ${f.InfoEspecie.habilidad}</p>
    <p><strong>Rasgos:</strong> ${f.InfoEspecie.rasgos}</p>
    <p><strong>Vida social:</strong> ${f.InfoEspecie.vidaSocial}</p>
    <p><strong>Comportamiento:</strong> ${f.InfoEspecie.comportamiento}</p>

    <div class="galeria">
      <img src="${f.galeria[0]}">
      <img src="${f.galeria[1]}">
      <img src="${f.galeria[2]}">
    </div>
  `;
}

cerrar.onclick = ()=> modal.style.display="none";
window.onclick = (e)=>{ if(e.target==modal) modal.style.display="none"; };

/* ========== BUSCADOR ========== */

buscador.addEventListener("input",()=>{
  const texto = buscador.value.toLowerCase();
  const filtrados = felinos.filter(f=>f.nombre.toLowerCase().includes(texto));
  mostrarFelinos(filtrados);
});

/* ========== API ========== */

btnApi.addEventListener("click", async () => {

  const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=6&has_breeds=1`, {
    headers: { 'x-api-key': API_KEY }
  });

  const data = await res.json();

  contenedor.innerHTML = "";

  data.forEach(cat => {

    const breed = cat.breeds[0];

    contenedor.innerHTML += `
      <div class="card">
        <img src="${cat.url}">
        <h3>${breed.name}</h3>
        <p><strong>Origen:</strong> ${breed.origin}</p>
        <p><strong>Temperamento:</strong> ${breed.temperament}</p>
        <p><strong>Esperanza de vida:</strong> ${breed.life_span} años</p>
      </div>
    `;
  });

});

btnLocales.addEventListener("click",()=>{
  mostrarFelinos(felinos);
});