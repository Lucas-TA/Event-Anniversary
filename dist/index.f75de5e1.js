AOS.init();
const eventDate = new Date("Feb 19, 2024 18:00:00");
const eventTimeStamp = eventDate.getTime();
const hours = setInterval(()=>{
    const now = new Date();
    const actualTimeStamp = now.getTime();
    if (eventDate < now) {
        document.getElementById("eventTimeStampMessage").innerHTML = `Evento j\xe1 conclu\xeddo. Prazo de inscri\xe7\xe3o encerrado.`;
        document.getElementById("buttonGetTicket").classList.remove("--primary");
        document.getElementById("buttonGetTicket").classList.add("disabled");
    } else {
        const generalTimeStamp = eventTimeStamp - actualTimeStamp;
        const oneDay = 86400000;
        const oneHour = 3600000;
        const oneMinute = 60000;
        const oneSecond = 1000;
        const daysToEvent = Math.floor(generalTimeStamp / oneDay);
        const hoursToEvent = Math.floor(generalTimeStamp % oneDay / oneHour);
        const minutesToEvent = Math.floor(generalTimeStamp % oneHour / oneMinute);
        const secondsToEvent = Math.floor(generalTimeStamp % oneMinute / oneSecond);
        document.getElementById("eventTimeStampMessage").innerHTML = `Venha para meu anivers\xe1rio!!! Aguardo voc\xea em ${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;
        document.getElementById("buttonGetTicket").classList.remove("disabled");
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
