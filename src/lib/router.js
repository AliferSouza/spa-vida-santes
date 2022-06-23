import RenderRouter from './renderRouter.js'

function router(prop) {
    const path = window.location.hash
    const pathe = window.location.hash.split("#")[1]

 

       

    if (prop.URL) {
        var rendeComponente = prop.Tiket
    }else if (path == ""){    
         var rendeComponente =  prop.Tiket 
    }else if (path == "#Home"){
        var rendeComponente =  prop.Home 
   } else{
    var rendeComponente =  prop.Home 
       window.document.querySelector("#root").innerHTML = `<h1>ERRO</h1>`
    }


    RenderRouter(rendeComponente)
}







export { router }