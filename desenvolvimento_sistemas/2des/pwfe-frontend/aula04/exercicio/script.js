
section = document.querySelector("section");

var produtos = [
    {
        "nome": "ventilador:",
        "imagem": "https://imgs.casasbahia.com.br/55011465/1xg.jpg?imwidth=500",
        "valor": "R$300,00"
    },

    {
        "nome": "PlayStation 5:",
        "imagem": "https://s.zst.com.br/cms-assets/2022/09/ps5-abertura.webp",
        "valor": "R$3000,00"
    },

    {
        "nome": "Teclado Gamer:",
        "imagem": "https://lojacentric.com.br/image/cache/data/Produtos/TE/Teclado-Gamer-Alloy-Origins-Core-Linear-Red-Hyperx-COR-NO-DEFINIDA-B63DCBAC-1-1400x1400.jpg.webp",
        "valor": "R$300,00"
    },

    {
        "nome": "Mouse Gamer:",
        "imagem": "https://www.microdigistore.com.br/arquivos/PRODUTOS/9071629749695680290/1_G_Mouse-Gamer-Havit-MS1017--3200-DPI-7-Botes--_25.jpg",
        "valor": "R$200,00"
    },

    {
        "nome": "Tenis nike:",
        "imagem": "https://vgmultimarcas.com/wp-content/uploads/2021/05/nike-tenis-nike-air-force-1-tm-p-1618505989591.jpg",
        "valor": "R$350,00"
    },

    {
        "nome": "Monitor Gamer:",
        "imagem": "https://images.tcdn.com.br/img/img_prod/1066780/monitor_gamer_aoc_legend_27_led_curvo_240_hz_full_hd_0_5ms_freesync_c27g2ze_4871_4_40afdcd5af459e029b29be8c1c2da87d.jpg",
        "valor": "R$1800,00"
    },

    {
        "nome": "Geladeira:",
        "imagem": "https://brastemp.vtexassets.com/arquivos/ids/231318/geladeira-brastemp-bro85ak-lateral-1.jpg?v=638000617817300000",
        "valor": "R$4000,00"
    },

    {
        "nome": "Fogão:",
        "imagem": "https://a-static.mlcdn.com.br/800x560/fogao-5-bocas-cook-suggar-preto-fgv500pt-mesa-de-vidro-bivolt/engage-info/5017/bc6df6f6e605212808dd7dc7a0249600.jpg",
        "valor": "R$3000,00"
    },

    {
        "nome": "Ferro de passar:",
        "imagem": "https://cdn.leroymerlin.com.br/products/ferro_de_passar_a_vapor_ceramica_oster_pressxpress_220v_1567230361_4583_600x600.jpg",
        "valor": "R$250,00"
    },

    {
        "nome": "Mesa:",
        "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRg7e-cI3W_SYVjjwq0jBbTON5vrAg-y4SXw9es-C4PCkJ-GuHf_8HL1uS3ZAFyoKFxIY&usqp=CAU",
        "valor": "R$1800,00"
    },

]


for(let i=0; i<produtos.length;i++){

    let armazena = produtos[i];
    
    
    let divtudo = document.createElement("div");
    divtudo.className="tudo";

    section.appendChild(divtudo);

    let div = document.createElement("div");
    div.className="card";
    div.style.backgroundImage= "url("+ armazena.imagem +")";

    divtudo.appendChild(div);

    let divbotao = document.createElement("div");
    divbotao.className= "divbotao";

    divtudo.appendChild(divbotao);

    let nome = document.createElement("p");
    nome.innerHTML= armazena.nome;

    let valor= document.createElement("p");
    valor.innerHTML= armazena.valor;

    divbotao.appendChild(nome);
    divbotao.appendChild(valor);

    let botao= document.createElement("button");
    botao.className="botao";

    botao.textContent= "Comprar";
    divbotao.appendChild(botao);

    
}