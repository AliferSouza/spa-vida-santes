import dadosURL from '../lib/resolverUrlParamentro.js'
import googleForme from '../componentes/GoogleForme.js'
import cadastraPrincipal from '../componentes/cadastraPrincipal.js'
import renderDados from '../lib/renderValor.js'

var urlNavegador =  location.hash


const Url = dadosURL()


export default function Tiket() {
    const data = JSON.parse(localStorage.getItem('indetificacaoTicket') || "[]")
    const verificarValor = localStorage.hasOwnProperty("indetificacaoTicket")
    const Ticket = localStorage.hasOwnProperty("Ticket")    

    window.Home = () => {    
       window.document.querySelector("#root").innerHTML =  cadastraPrincipal()            
}


 



    if (verificarValor) {
        return `             
        <img class="imgLogo2" src="./src/img/logo.png" height="500px">
       <div class="containerTicket01">      
            
             <div class="containerTicket">
             <div class="colar"></div> 
                 <div class="conteinerImgmiasInformacoes">                 
                 <div class="conteinerImg">              
                 <img class="conteinerImgFormat" src="${data.Foto}" height="100">                          
             </div>

                 <div class="conteinerInformacoes">
                      <h1 class="conteinerInformacoesColor">BEM - VINDO</h1>
                      <h2 class="conteinerInformacoesColor" >${data.Nome} ${data.Sobrenome}</h2>
                      <h4 class="conteinerInformacoesColor conteinerInformacoesNumero" >Tiket: ${data.valorTicket}</h4>
                 </div>    
                 </div> 
                 </div>
                 </div>
                <br><br>
               ${Ticket === true ? `<h4 style="color:#fff">Você está participando do sorteio!</h4>`: googleForme() } `
    } else {

        return `
        <img class="imgLogo2" src="./src/img/logo.png" height="500px">
       <div class="containerTicket01">      
            
             <div class="containerTicket">
             <div class="colar"></div> 
                 <div class="conteinerImgmiasInformacoes">                     
                 <div class="conteinerImg">         
                 <img class="conteinerImgFormat" src="${Url.Foto || "http://127.0.0.1:5502/src/img/logo.png"}" height="100">          
            </div>

            <div class="conteinerInformacoes">
                <h1 class="conteinerInformacoesColor">BEM - VINDO</h1>
                <h2 class="conteinerInformacoesColor" >${Url.Nome || "SPA"} - ${Url.Sobrenome || "Vida Sants"}</h2>
                <h4 class="conteinerInformacoesColor conteinerInformacoesNumero"> Tiket: ${Url.valorTicket || "123456789"}</h4>
            </div>           

      </div>      
      </div>

        <br>
        <br>
                <button class="button" style="padding:20px" onclick="Home()"> Crie o seu ticket</button>
              
        
        <br>
        <br>
    </div>

  `
    }
}