import componentHome from  '../componentes/cadastraPrincipal.js'
export default function Home() {

    return `
    <div class="container">
    <div class="forms">
    ${componentHome()}
   
    </div>
    </div>
    `

}