const contextAplication = {
    pathname: location.pathname,
    pathCompleto: location.pathname.split("/"),
    href: location.href,       
    document: document,       
    alert(props){ alert(props)},
    autoExecultar(props){ Function("return " + props)()},
    navigatorTo(caminho){history.pushState(null, null, caminho);},
    dbSetItem(name, props){window.localStorage.setItem(name, JSON.stringify(props))},
    dbGetItem(props){return JSON.parse(window.localStorage.getItem(props))},
    async render(tag, props){document.querySelector(await tag).innerHTML = await props},
    async addComponet(tag, props){document.querySelector(await tag).innerHTML += await props },
    async Api(url){
        try{
        const res = await fetch(url);
        const data = await res.json();
        const valorDta = await data;
        return valorDta
        }catch{
            return null
        }

    },
    addBanco(nome, props){
        const link = JSON.parse(localStorage.getItem(nome) || "[]")              
        link.push(props) 
        localStorage.setItem(nome, JSON.stringify(link))
    },
      gerarId(){ 
        const id = Math.random().toString(32).substr(2, 9) 
        return id
    },
    backup(props, tipo, textNomeArqDow){
        
        let blob = new Blob([`${props}`], { type: `${tipo}`});
        const link= window.document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `${textNomeArqDow || 'export.txt'}`;
        link.click();
        window.URL.revokeObjectURL(link.href);                           

    },
    erroPage(){
        return `<h1>ERRO 404 <h1>`
    }
    

    

}

export default contextAplication