new Vue({
    el: '#app',
    data: {
        currentContact: {
            nome: '',
            telefone: '',
            email: ''
        },
        contacts: [],                
        editIndex: -1,
        messageVisible: false,
        messageText: ''     
    },
    computed: {
        contactsCount(){
            return this.contacts.length;
        }
    },
    methods: {
        addContact() {
            if (this.currentContact.nome && this.currentContact.telefone && this.currentContact.email) {
                this.contacts.push({ ...this.currentContact });
                this.showMessage('Contato adicionado com sucesso!');
                this.resetForm();
            }
        },
        editContact(index) {
            this.currentContact = { ...this.contacts[index] };
            this.editIndex = index;
        },
        updateContact() {
            this.$set(this.contacts, this.editIndex, this.currentContact);
            this.showMessage('Contato atualizado com sucesso!');
            this.resetForm();
            this.editIndex = -1;
        },
        deleteContact(index) {
            this.showMessage('Contato deletado!');
            this.contacts.splice(index, 1);
        },
        resetForm(){
            this.currentContact = { nome: '', telefone: '', email: ''}
        },
        showMessage(text){
            this.messageText = text;
            this.messageVisible = true;
            setTimeout(()=> {
                this.messageVisible = false
            }, 4000);
        }
    }
});
