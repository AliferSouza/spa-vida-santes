import router from "../lib/router/router";
import Ticket from "../views/Ticket.js";

export default function Home(ctx) {
    const estadoSeletFoto = [] || []
       
    addEventListener("click", e =>{                  
        if(e.target.tagName === "IMG"){  
         estadoSeletFoto.push(e.target.src)  
        
        }    
    })

    function geraStringAleatoria(tamanho) {
        var stringAleatoria = '';
        var caracteres = '0123456789';
        for (var i = 0; i < tamanho; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    }  

     window.salvarLoja = (dados) => {    
        const Nome = document.querySelector(".Name").value
        const Sobrenome = document.querySelector(".Sobrenome").value           
        const valorTicket =  geraStringAleatoria(8)
      


        if (!Nome || !Sobrenome || !valorTicket) {
            alert("Valores obrigatorios para todos os campos")
        } else {          
            const miniSite = {
                            Nome,
                            Sobrenome, 
                            Foto: estadoSeletFoto.join(),                        
                            valorTicket
                         }
            ctx.dbSetItem("indetificacaoTicket", miniSite)
          
            router({Ticket})

   
                   
          
       
        }
    }

    

    return `    
      <img class="imgLogo" src="../img/logo.png" height="300px">
    <div class="form login">
   
    <span class="title">Crie seu tiket</span>

    <div>
        <div class="input-field">
            <input type="text" class="Name" placeholder="Nome" required>
        </div>

        <div class="input-field">
            <input type="text" class="Sobrenome" placeholder="Sobrenome" required>                          
        </div>   

        <div class="input-field">

        <fieldset class="radio-image escolhaFoto">
                <label for="M">
                    <input type="radio"  name="sexo" id="M" value="M">
                    <img src="/img/avatar01.png" class="escolha" alt="" height="45px">
                </label>
                <label for="F">
                    <input type="radio"  name="sexo" id="F" value="F">
                    <img src="/img/avatar02.png" class="escolha" alt=""  height="45px">
                </label>

                <label for="A">
                    <input type="radio"  name="sexo" id="A" value="A">
                    <img src="/img/avatar03.png" class="escolha" height="45px">
                </label>
                <label for="B">
                    <input type="radio"  name="sexo" id="B" value="B">
                    <img src="/img/avatar04.png" class="escolha" height="45px"> 
                </label>
        </fieldset>
                            
        </div>  


        <div class="input-field button">
            <input type="button" class="button" value="Salvar" onclick="salvarLoja()">
        </div>
     
</div>    

</div>
    `
}