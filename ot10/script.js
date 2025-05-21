Vue.component('button-component', {
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
})