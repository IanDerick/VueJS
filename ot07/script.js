var app = new Vue({
    el: '#app',
    data: {
        usuario: {
            nome: 'ian derick',
            bio: 'Ian Derick é um desenvolvedor apaixonado por tecnologias de front-end e back-end, com ampla experiência.'
        }
    },
    filters: {
        captalize(valor){
            if(!valor) return '';
            valor = valor.toString();
            return valor.charAt(0).toUpperCase() + valor.slice(1);
        },
        truncate(valor, limite){
            if(!valor) return '';
            valor = valor.toString();
            return valor.length > limite ? valor.substring(0, limite) + '...' : valor;
        }
    }
})