export default function resolverUrlParamentro() {
    const urlParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(urlParams);

  
   return params

}