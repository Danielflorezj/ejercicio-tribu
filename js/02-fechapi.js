const URL_API = "data/tribus.json"
const btnGetData = document.querySelector('#cargarData');
btnGetData.addEventListener('click',getData);

function getData(){
    fetch(URL_API)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            viwData(data);
        })
        .catch((err)=> {
            console.log(err);
        })
}
function viwData(myData){
    myData.forEach(element => {
        const {idTribu,tribu,puntos,campers} = element;
        campers.forEach(camper => {
            conts (idTribu,nombre,edad,ingles,rol,img)= camper;
            
        }) 
    });
}
function viewHTML(myData){
    const divContenedor = documento.querySelector('#contenedor');
    const {idTribu,tribu,puntos,ingles} = myData;
    divContenedor.innerHTML=/* html*/ `
    <p>NTribu : ${idTribu}</p>
    <p>tribu : ${tribu} </p>
    <p>Puntos : ${puntos}</p>
    <p>Nivel de Ingles : ${ingles}</p>

    
    
    `
}
console.log(myData);
