var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        changeMessage(){
            this.message = 'Message Updated!';
        },
        destroyComponent(){
            this.$destroy();
        }
    },
    beforeCreate(){
        console.log('beforeCreated: dados ainda não estão disponíveis');
    },
    created(){
        console.log('created: Dados já foram inicializados');
    },
    beforeMount(){
        console.log('beforeMount: Componente prestes a ser montado no DOM');
    },
    mounted(){
        console.log('mounted: componente montado no DOM');
    },
    beforeUpdate(){
        console.log('beforeUpdate: Dados foram alterados, prestes a atualizar o DOM');
    },
    update(){
        console.log('update: DOM foi atualizado');
    },
    beforeDestroy(){
        console.log('beforeDestroy: Componente prestes a ser destruído');
    },
    destroyed(){
        console.log('destroyed: Componentes foi destruído');
        
    }
})