var app = new Vue({
    el: '#app',
    data: {
        contador: 0
    },
    methods: {
        incrementarContador(){
            this.contador++;
        }
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        nome: ''
    },
    methods: {
        enviarFormulario(){
            alert('Formulário enviado com o nome: ' + this.nome);
        }
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        titulo: 'Vue JS',
    },
    methods: {
        enviar(){
            alert('Enviado!');
        },
    }
});