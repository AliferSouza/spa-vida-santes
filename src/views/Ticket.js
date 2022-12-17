import router from "../lib/router/router";
import Home from "../views/Home.js";
import googleForme from "../component/GoogleForme.js";

export default function Tiket(ctx) {
  const data = ctx.dbGetItem("indetificacaoTicket");
  const ticket = ctx.dbGetItem("Ticket");

  const data2 = ctx.gerarQueryString(ctx.dbGetItem("indetificacaoTicket"));
  history.pushState(null, null, data2)




  window.Home = () => {
    router({ Home });
  };

  window.onload = () => {
    window.document.querySelector("#myInp").value = location.href + data2


}
addEventListener("click", function (e) {
    const myInp = window.document.querySelector("#myInp")
    if (e.target.id === "myBTN") {
        myInp.select()
        document.execCommand("Copy")

    }
})

  return `
        <img class="imgLogo2" src="/img/logo.png" height="200px">
       <div class="containerTicket01">      
            
             <div class="containerTicket">
             <div class="colar"></div> 
                 <div class="conteinerImgmiasInformacoes">                 
                 <div class="conteinerImg">              
                 <img class="conteinerImgFormat" src="${
                   data.Foto || "/img/logo.png"
                 }" height="100">                          
             </div>

                 <div class="conteinerInformacoes">
                      <h1 class="conteinerInformacoesColor">SEU - TICKET</h1>
                      <h2 class="conteinerInformacoesColor" >${
                        data.Nome || "SPA"
                      } ${data.Sobrenome || "Vida Sants"}</h2>
                      <h4 class="conteinerInformacoesColor conteinerInformacoesNumero" >Tiket: ${
                        data.valorTicket || "123456789"
                      }</h4>
                 </div>    
                 </div> 
                 </div>
                 </div>
                <br>
                ${
                  ticket
                    ? `   <div class="containerco">
                   <h4 style="color:#fff">Você está participando do sorteio!
                    compartilhe seu Ticket
                    <input id="myInp" class="ticketinput" type="text"> 
                    <br>              
                    <br>
                    <button id="myBTN" class="button">Copiar</button>
                    <div ></h4>`
                    : googleForme()
                } 

  `;
}
