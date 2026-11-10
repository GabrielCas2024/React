//Creamos la funcion encargada de recoger los datos de la api
// Y transfromarlos a JSON
async function GetUsers(url) {
    //Response es donde se almacenan los datos puros de la Api
    const response = await fetch(url);

    //Creamos nueva variable donde se almacenaran los datos en formato json
    const datos_json = await response.json();

    return datos_json;
}
export default GetUsers;