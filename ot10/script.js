/*Vue.component('button-component', {
    props: ['text', 'color'],
    template: '<button :style="{ backgroundColor: color }" @click="emitClick">{{ text }}</button>',
    methods: {
        emitClick(){
            this.$emit('clicked');
        }
    }
});

new Vue({
    el: '#app',
    methods: {
        handleClick(){
            alert('O botão foi clicado!')
        }
    }
});*/

Vue.component('component-a', {
    template: '<div>Este é o Componente A</div>'
});
Vue.component('component-b', {
    template: '<div>Este é o Componente B</div>'
});

new Vue({
    el:'#app2',
    data: {
        currentComponent: 'component-a'
    }
})