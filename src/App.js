import { router } from './lib/router.js'
import Home from './pages/Home.js'
import  Ticket from './pages/Ticket.js'

const URL = location.href.includes("?") 

export default function App(){     
    router({            
        "URL": URL,    
        "Home":Home,
        "Tiket":Ticket
    })      
}

