var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    computed: {
        reversedMessage(){
            return this.message.split('').reverse().join('');
        }
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: '',
        status: 'Esperando...'
    },
    watch: {
        message(newValue, oldValue){
            this.status = `Mensagem mudou de '${oldValue}' para '${newValue}'`;
        }       
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        firstName: 'Ian',
        lastName: 'Mota',
        apiResponse: '',
    },
    computed: {
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
    },
    watch: {
        fullName(){
            this.fakeApiCall(newName);
        }
    },
    methods: {
        fakeApiCall(name){
            this.apiResponse = `API chamada com o nome: ${name}`
        }
    }
});