let fallingSpeed = 0.1;
let currentPopup = null; // To keep track of the current popup
let currentIndex = 0; // Initialize current index outside of the event listener to persist its value across clicks
let loverText = 'Mo &hearts; Rosa';

function setLoverText() {
  document.querySelector('#message-container p').innerHTML = loverText;
}

// Call the function to initially set the loverText content
setLoverText();

const images = [
    'images/image1.jpeg',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpeg'
];

const messages = [
  "Te amo, mi amor ❤️",
  "Eres mi todo 💜",
  "Por siempre y para siempre 💖",
  "Juntos, somos imparables 🚀",
  "Iluminas mi mundo 🌟",
  "En tus ojos, encuentro mi hogar 🏡",
  "Contigo, cada momento es mágico ✨",
  "El amor es infinito... 🌌",
  "Eres el sueño hecho realidad 💭",
  "Eternamente tuyo/a, en amor y maravilla 🌹",
  "Cada día te amo más 🌞",
  "Mi corazón es tuyo 💘",
  "Eres la razón de mi sonrisa 😊",
  "A tu lado, todo es perfecto 🌈",
  "Nuestro amor es una aventura 🗺️",
  "Contigo, el tiempo vuela ⏳",
  "Eres mi refugio seguro 🏰",
  "Mi amor por ti es incondicional 💖",
  "Juntos hasta el fin del mundo 🌍",
  "Amarte es mi destino ⭐",
  "Eres mi felicidad 🍀",
  "A tu lado, soy la mejor versión de mí 🌹",
  "Nuestro amor es como un cuento de hadas 🏰",
  "Gracias por existir en mi vida 💫",
  "Contigo, cada día es una bendición 🙏",
  "Eres mi alma gemela 👫",
  "Nuestros corazones laten al unísono 💕",
  "Enamorarse de ti fue lo mejor que me pasó 🍃",
  "Tu amor me hace invencible 🛡️",
  "Cada momento contigo es un regalo 🎁",
  "Tu amor es mi luz en la oscuridad 🕯️",
  "Eres el amor de mi vida 💞",
  "Contigo, cada sueño se hace realidad 🌠",
  "Mi amor por ti crece cada día más 🌺",
  "Eres mi todo en este mundo 🌎",
  "Amarte es fácil porque eres maravilloso/a 💐",
  "Contigo, la vida es bella 🦋",
  "Eres mi razón para ser mejor 🌟",
  "Nuestro amor es eterno como el mar 🌊",
  "Juntos, creamos recuerdos preciosos 📸",
  "Tu amor es mi tesoro más preciado 💍",
  "Cada palabra tuya es música para mis oídos 🎶",
  "Eres lo mejor que me ha pasado ❤️",
  "Amarte hace que cada día valga la pena 🌅",
  "Nuestro amor es un viaje maravilloso 🚀",
  "A tu lado, siento que puedo volar 🕊️",
  "Eres mi ancla en este mar de vida ⚓",
  "Nuestro amor trasciende el tiempo ⏱️",
  "Eres mi sueño hecho realidad, cada día 💤",
  "Contigo, mi amor es infinito 🌀",
];

