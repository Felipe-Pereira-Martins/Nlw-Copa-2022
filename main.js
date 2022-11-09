function createGame (player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
     </li>
    `
}

let delay = -0.4;

function createCard (date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2> ${date} <span> ${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>    
    `
}

document.querySelector("#cards").innerHTML = 

     createCard("22/12/2022", 
    "Tuesday", 
    createGame("argentina", "07:00", "saudi_arabia") +
    createGame("denmark", "10:00", "tunisia") +
    createGame("mexico", "13:00", "poland") +
    createGame("france", "16:00","australia")
    ) +

     createCard("23/11/2022",
     "Wednesday",
     createGame("morocco", "07:00", "croatia") +
     createGame("germany", "10:00", "japan") +
     createGame("spain", "13:00", "costa_rica") +
     createGame("belgium", "16:00", "canada") 
     ) +


    createCard("24/11/2022",
     "Thursday",
     createGame("switzerland", "07:00", "cameroon") +
     createGame("uruguay", "10:00", "south_korea") +
     createGame("portugal", "13:00", "ghana") +
     createGame("brazil", "16:00", "serbia")
     ) +

     createCard("25/12/2022", 
     "Friday", 
     createGame("wales", "07:00", "iran") +
     createGame("qatar", "10:00", "senegal") +
     createGame("netherlands", "13:00", "ecuador") +
     createGame("england", "16:00","usa")
     ) +

     createCard("26/12/2022", 
     "Saturday", 
     createGame("tunisia", "07:00", "australia") +
     createGame("poland", "10:00", "saudi_arabia") +
     createGame("france", "13:00", "denmark") +
     createGame("argentina", "16:00","mexico")
     ) +

     createCard("27/12/2022", 
     "Sunday", 
     createGame("japan", "07:00", "costa_rica") +
     createGame("belgium", "10:00", "morocco") +
     createGame("croatia", "13:00", "canada") +
     createGame("spain", "16:00","germany")
     ) +

    createCard("28/11/2022",
     "Monday", 
     createGame("cameroon", "07:00", "serbia") +
     createGame("south_korea", "10:00", "ghana") +
     createGame("brazil", "13:00", "switzerland") + 
    createGame("portugal", "16:00", "uruguay")
     ) +

     createCard("29/12/2022", 
     "Tuesday", 
     createGame("netherlands", "12:00", "qatar") +
     createGame("ecuador", "12:00", "senegal") +
     createGame("wales", "16:00", "england") +
     createGame("iran", "16:00","usa")
     ) +

     createCard("30/12/2022", 
     "Wednesday", 
     createGame("australia", "12:00", "denmark") +
     createGame("tunisia", "12:00", "france") +
     createGame("poland", "16:00", "argentina") +
     createGame("saudi_arabia", "16:00","mexico")
     ) +

     createCard("01/12/2022", 
     "Thursday", 
     createGame("croatia", "12:00", "belgium") +
     createGame("canada", "12:00", "morocco") +
     createGame("costa_rica", "16:00", "germany") +
     createGame("japan", "16:00", "spain")
     )+

    createCard("02/12/2022", 
    "Friday", 
    createGame("south_korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguay") +
    createGame("serbia", "16:00","switzerland") +
    createGame("cameroon", "16:00", "brazil")
    ) 

     
    
