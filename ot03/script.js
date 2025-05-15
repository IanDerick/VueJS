var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Aprendeu Vue JS',
        descricao: 'Dados do Formulário',
        nome: "",
        email: "",
        telefone: "",
        novidades: "",
        interesses: [],
        conheceu: ""
    },
    methods:{
        mostraAlerta(){
            alert('Dados enviados:' + '\nNome: ' + this.nome + '\nE-mail: ' + this.email);
        }
    }
});