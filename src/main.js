import router from "./lib/router/router.js"
import Home from "./views/Home.js";
import Ticket from "./views/Ticket.js";







if(localStorage.hasOwnProperty("indetificacaoTicket")){
    router({Ticket})
}else{
    router({Home})
}
   



