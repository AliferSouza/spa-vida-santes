export default function googleForme(props) {

window.ticket = () => {
    const Nome = document.querySelector(".Ticket").value  
        
        const miniSite = {Nome}

        localStorage.setItem('Ticket', JSON.stringify(miniSite))
        window.location.reload()
   
    }



    return `
    
    <form class="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgWnpWmXuXTgt5rGsbJbgUQZTXOt5cQ8pG8MGUdBX0uXNF0g/formResponse">
    <h1>Participe do sorteio</h1>
    <h3>Responda o formulario abaixo></h3>
    
        <div class="input-field">
            <input type="text" class="Whatsapp" name="entry.413606652" placeholder="Whatsapp" required>
        </div>

        <div class="input-field">
            <input type="text" class="Ticket" name="entry.124432569" placeholder="Ticket" required>                          
        </div>     

        <div class="input-field button2">
            <button  class="button2" type="submit" onclick="ticket()">Participar do sorteio</button>
        </div>
    </form>   
    
    `
}