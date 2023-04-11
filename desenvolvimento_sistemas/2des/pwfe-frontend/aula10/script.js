
const body = document.querySelector("body"); 
const temp = document.querySelector("#temp");
const inputnome = document.querySelector("#inputnome");
let icon = document.querySelector("#icon");
const chuva = document.querySelector("#chuva");
const umidade = document.querySelector("#umidade");
const vento = document.querySelector("#vento");
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let p = document.querySelectorAll("#p");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");
let cidade;
let link= "/current.json?key=d86e7c5d4fd9456b91f115242231004&q=";
let link_dias = "/history.json?key=d86e7c5d4fd9456b91f115242231004&q="
let data;
let data2;
function setcidade(e){
cidade = e.value;

}

const getAtualDate= () =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${year}-${month+1}-${day}`
}

const getFutureDate= () =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${year}-${month+1}-${day+2}`
}

console.log(getFutureDate());

function getcidade(){
    link = "/current.json?key=d86e7c5d4fd9456b91f115242231004&q="+ cidade;
    link_dias = "/history.json?key=d86e7c5d4fd9456b91f115242231004&q=" + cidade + "&dt=" + getAtualDate()+"&end_dt=" + getFutureDate() + "&hour=12";
    console.log(link);
    pesquisar(link);
}

function pesquisar(link){

        api.get(link)
    .then(resp=>{
        let current = resp.data.current;
        let location = resp.data.location;
        icon.src = current.condition.icon;
        temp.innerHTML = current.temp_c + "° C";
        chuva.innerHTML= "Pressipitação: " + current.precip_mm + " mm";
        umidade.innerHTML= "Umidade: "+ current.humidity + "%";
        vento.innerHTML = "Vento: " + ((current.wind_mph * 1.609).toFixed(2) )+ " km/h";
    })

    api.get(link_dias)
    .then(resp=>{
        //console.log(resp);
        let current_dias = resp.data.forecast.forecastday;
        let location_dias = resp.data.location;
        console.log(current_dias);
        // console.log(location_dias);
        icon2.src = current_dias[0].hour[0].condition.icon;
        icon3.src = current_dias[1].hour[0].condition.icon;

        // p[0].style.display = "block";
        // p[1].style.display = "block";

        
        data = new Date(current_dias[1].date);

        let array = ["Domingo", "Segunda-Feira", "Terca-Feira","Quarta-Feira","Quinta-Feira", "Sexta-Feira", "Sabado"]
        p[0].innerHTML = array[data.getDay()+1];

        data2 = new Date(current_dias[2].date);
        p[1].innerHTML = array[data2.getDay()+1];

        temp2.innerHTML = current_dias[0].hour[0].temp_c + "° C";
        temp3.innerHTML = current_dias[1].hour[0].temp_c + "° C";
       
    })

}

// + "&dt=2023-04-11&ent_dt=2023-04-14"