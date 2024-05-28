document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('loader-container').style.display = 'none';
        document.getElementById('text-container').style.display = 'block';
        document.getElementById('button-container').style.display = 'block';
        document.getElementById('background').classList.remove('hidden');
        document.getElementById('background').classList.add('fade-in');

        // Mostrar el contenedor del botón de Spotify después de la carga
        document.getElementById('spotify-container').classList.remove('hidden');
    }, 3000);
});

var audioPlayed = false;

document.getElementById('show-poem-button').addEventListener('click', function() {
    
    if (!audioPlayed) {
        var audio = new Audio('audio.mp3');
        audio.volume = 0; 
        audio.play();
        var increaseVolumeInterval = setInterval(function() {
            if (audio.volume < 0.5) {
                audio.volume += 0.01; 
            } else {
                clearInterval(increaseVolumeInterval); 
            }
        }, 100); 

        audioPlayed = true;
    }
});

    const poems = [
        "Te quiero no solo por cómo eres, sino por cómo soy yo cuando estoy contigo. - Mario Benedetti",
        "Te amo como se aman ciertas cosas oscuras, secretamente, entre la sombra y el alma.",
        "Soy feliz porque no pido nada, y por ti lo tengo todo.",
        "El Mundo es hermoso con vos",
        "Te amo y no es para tanto, es para SIEMPRE.",
        "Encontré mi lugar en el color de tus ojos.",
        "I truly love you, with all my heart.",
        "Y si vivo cien años, cien años pienso en ti.",
        "I Still fall for you everyday.",
        "Pienso en ti en cada canción de amor.",
        "Haces mis días mejores.",
        "You Make me feel safe.",
        "No amaré ninguna alma como amo la tuya.",
        "Todo lo bonito de la vida lo encuentro en tu sonrisa.",
        "Me haces bien de mil maneras ♥",
        "Amor, el mundo tiene sus maravillas, pero vos sos la maravilla de mi mundo.",
        "Amo tu voz.",
        "Amo tu pelo.",
        "Amo tus ojos.",
        "Amo tu nombre.",
        "Te Amo.",
        "No busco un momento con vos, con vos quiero todos los momentos.",
        "Donde sea, cuando sea, pero con vos.",
        "Eras, Eres y serás el amor de mi vida.",
        "Amo cada pedacito tuyo ♥",
        "I will give you every part of me.",
        "El brillo de tu sonrisa opaca el universo entero.",
        "Sos el paisaje más soñado.",
        "Me enamoré de tus ojos.",
        "Tu risa es música.",
        "Me encantas.",
        "Me enamoré de tu magia.",
        "Te amo mucho.",
        "Im in love with your smile.",
        "Im in love with your voice.",
        "Im in love with your body ♥.",
        "Im in love with your laugh.",
        "Im in love with your eyes.",
        "Si hay más vidas, después de esta, espero coincidir con vos en cada una de ellas",
        "Nuestra conexión no tiene explicación",
        "Me enamoré de tus ojos",
        "Con vos todo florece ♥",
        "Llegaste para llenar con tu sonrisa cada espacio de mi alma",
        "Y me miraste de la manera que siempre quise que me miraran",
        "Llenaste mis ojos de brillo y mi corazón de amor",
        "Te amo más de lo que creí que podía amar",
        "Te amo con cada estrella de la galaxia",
        "Te amo desde la luna a Saturno",
        "Tus lunares son mis estrellas ♥",
        "Vos y nadie más",
        "Amo todo lo que sos y un poco más",
        "Entonces te vi, y todas las canciones de amor tuvieron sentido",
        "Sos mi lugar favorito",
        "Qué lindo compartir la vida con vos",
        "Mi puntito de paz",
        "Me enamoras cada día más",
        "Ni la luna es tan hermosa como vos",
        "Te amo 24 horas por segundo ♥",
        "My heart is yours",
        "Esperaría 100 vidas por caminar una juntos",
        "Vos, nadie más",
        "Amarte es mi rutina favorita ♥",
        "Your lips, My lips, Apocalypse",
        "The moon knows we are in love",
        "All yours",
        "Sua boca tem sabor de poesia, quero ser poeta, todo dia",
        "El amor de mis vidas",
        "You made me a poet",
        "Damn, Your eyes",
        "Je t´aime",
        "Kiss the stars, Kiss my Scars",
        "She looks like a dream",
        "The prettiest girl i've ever seen",
        "I Could spend hours in your eyes",
        "Je t´aime pour la vie la mort et l´eternité.",
        "Me haces feliz de mil maneras ♥",
        "Desde que contemple tu belleza, miro a la luna y la nota algo ordinaria.",
        "Que suerte haberte conocido.",
        "Eras, eres y seras ♥",
        "Que lindo es pasar tiempo con vos, que hermoso es todo lo que estamos viviendo",
        "Acordarme de ese 28 de septiembre y ponerme feliz",
        "Voy a estar siempre para vos amor",
        "Que lindo es estar juntos",
        "Nadie se compara con vos",
        "Let's be cat parents ♥",
        "Pienso en el futuro juntos y se que vamos bien",
        "Mi corazon ♥, te quiere mucho",
        "Te adoro ♥",
        "I will give you every part  of me",
        "Porque antes yo nunca te noté, y ahora siento que no se que hacerte, para que dejes de enamorarme",
        "You're amazing and I love u ♥",
        "Sos la calma entre mi caos",
        "Te amo con toda la profundidad, amplitud y altura que mi alma pueda alcanzar",
        "Quiero cuidar de vos, quiero que cuides de mi, quiero que cuidemos todo lo nuestro ♥",
        "You're the most beatiful girl in the world ♥",
        "Tu risa es musica",
        "Fuiste la primera persona de la que me enamore, y muy fuerte ♥",
        "Your smile make my day",
        "TE AMOOOOOOOOOOOOOOOOOOO",
        "Ojala te pudieras ver con mis ojos",
        "Me enamore de tu magia ♥",
        "Amor de mi vida",
        "Sos el amor de mi vida",
        "Te amo con cada pedazito del cuerpo",
        "Sos unica",
        "TE AMO MICAELA ♥",
        "Cada dia me enamoro mas de vos",
        "Quiero ser la sonrisa que te dura toda la vida" 
       ];
   
    function getRandomPoem() {
        return poems[Math.floor(Math.random() * poems.length)];
    }
    
    const poemContainer = document.getElementById('poem-container');
    const poemContent = document.getElementById('poem-content');
    const playlistContainer = document.getElementById('playlist-container');
    const playlistContent = document.getElementById('playlist-content');
    const showPoemButton = document.getElementById('show-poem-button');
    

    
    
    function showRandomPoem() {
        const poem = getRandomPoem();
        poemContent.textContent = poem;
        poemContainer.classList.remove('hidden');
    }
    
    showPoemButton.addEventListener('click', function() {
        showRandomPoem();

    });