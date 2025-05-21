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
});

Vue.component('component-a', {
    template: '<div><h2>Este é o Componente A</h2></div>'
  });
  
  Vue.component('component-b', {
    template: '<div><h2>Este é o Componente B</h2></div>'
  });
  
  new Vue({
    el: '#app',
    data: {
      currentComponent: 'component-a'
    }
  });*/

Vue.component('menu-bar', {
    template: "#menu"
});
var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Vue Js',
    }
});