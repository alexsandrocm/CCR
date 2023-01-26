var bd = openDatabase("meuBD", "1.0", "Meu Banco de Dados", 4080);

const lista = [
    {
        nome: "Maria do Carmo",
        numeroConvenio: 123456789,
        data: "2022-10-28T15:09:00",
        convenio: "Unimed",
        valor: 100.0,
        imagem: "data:image/webp;base64,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",
    },
    {
        nome: "Mario do Parmo",
        numeroConvenio: 12412541,
        data: "2022-01-28T15:09:00",
        convenio: "Santa Rita",
        valor: 150.0,
        imagem: undefined,
    },
    {
        nome: "Mariana do Carmo",
        numeroConvenio: 243663,
        data: "2022-03-28T15:09:00",
        convenio: "Solumed",
        valor: 230.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marrie de Carme",
        numeroConvenio: 23573547,
        data: "2022-09-28T15:09:00",
        convenio: "Prever",
        valor: 200.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marcia do Carmo",
        numeroConvenio: 1124,
        data: "2022-10-28T15:09:00",
        convenio: "Unimed",
        valor: 101.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marcio do Parmo",
        numeroConvenio: 24634,
        data: "2022-01-28T15:09:00",
        convenio: "Santa Rita",
        valor: 109.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Mariana dos Santos",
        numeroConvenio: 847658,
        data: "2022-03-28T15:09:00",
        convenio: "Solumed",
        valor: 203.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marrie de Carmolina",
        numeroConvenio: 24356,
        data: "2022-09-28T15:09:00",
        convenio: "Prever",
        valor: 220.0,
        imagem: undefined,
    },
];

lista?.forEach((e) => insereBD(e));

function insereBD(elemento) {
    console.log(elemento);
    confereDuplicata(elemento);
}
function confereDuplicata(elemento) {
    //confere se não esta
    bd.transaction(function (ler) {
        return ler.executeSql(
            `SELECT * FROM consultas WHERE numeroConvenio=${elemento.numeroConvenio}`,
            [],
            function (ler, resultados) {
                if (resultados.rows.length == 0) {
                    addLinhaBd(elemento);
                    console.log("inserido");
                } else {
                    console.log("n - inserido");
                }
            }
        );
    });
}

function addLinhaBd(elemento) {
    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO consultas VALUES (?,?,?,?,?,?)", [
            elemento.nome,
            elemento.numeroConvenio,
            elemento.data,
            elemento.convenio,
            elemento.valor,
            elemento.imagem,
        ]);
    });
}
