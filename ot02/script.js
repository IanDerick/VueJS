/*var app = new Vue({
    el: '#app',
    data: {
        url: 'https://vuejs.org'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: ''
    }
});

var app3 = new Vue({
    el: '#app3',
    data:{
        seen: true
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        status: true,
        titulo: 'Aprendendo Vue Js'
    }
});

var app5 = new Vue({
    el: '#app5',
    data:{
        usuario: {
            id: 1,
            nome: 'Ian Derick',
            email: 'ian_mota@gmail.com',
            profissao: 'Analista de Suporte Jr.'
        }
    }
});

var app6 = new Vue({
    el: '#app6',
    data: {
        items:[
            {id: 1, text: 'Item 1'},
            {id: 2, text: 'Item 2'},
            {id: 3, text: 'Item 3'}
        ]
    }
});

var app7 = new Vue({
    el: '#app7',
    data:{
        titulo: 'Aprendendo VueJS',
        linguagens: [
            { nome: 'HTML', status: true },
            { nome: 'CSS', status: true },
            { nome: 'JavaScript', status: false },
            { nome: 'PHP', status: false },
            { nome: 'Python', status: false },
        ]
    }
});*/

var app = new Vue({
    el: '#app',
    data:{
        titulo: 'Aplicação de login',
        autenticado: false,
        usuario: {
            nome: 'Ian'
        },
        username: '',
        password: '',
        erro: false
    },
    methods:{
        login(){
            if (this.username === 'ian_mota' && this.password === 'ian123') {
                this.autenticado = true;
                this.erro = false;
            } else {
                this.erro = true;
            }
        },
        logout(){
            this.autenticado = false;
            this.username = '';
            this.password = '';
        }
    }
});