import urlParamentro from './objectToQueryString.js'

export default function renderValor(){
    const resultadoDoBanco = JSON.parse(localStorage.getItem('indetificacaoTicket') || "[]")
    
    const dados = urlParamentro(resultadoDoBanco)   

    return dados

}
    
