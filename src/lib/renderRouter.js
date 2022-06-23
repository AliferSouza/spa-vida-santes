export default function renderRouter(rendeComponente) {
    const root = document.querySelector('#root')
    root.innerHTML = rendeComponente()

}