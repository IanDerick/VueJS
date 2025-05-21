new Vue({
    el: '#app',
    data: {
        newContact: {
            nome: '',
            telefone: '',
            email: ''
        },
        contacts: [],             // corrigido: de 'contact' para 'contacts'
        currentContact: null,     // necessário para edição
        editIndex: -1             // usado para controlar o índice do contato em edição
    },
    methods: {
        addContact() {
            if (this.newContact.nome && this.newContact.telefone && this.newContact.email) {
                this.contacts.push({ ...this.newContact });
                this.newContact = { nome: '', telefone: '', email: '' }; // corrigido: nome, não name
            }
        },
        editContact(index) {
            this.currentContact = { ...this.contacts[index] };
            this.editIndex = index;
        },
        updateContact() {
            if (this.editIndex !== -1) {
                this.$set(this.contacts, this.editIndex, this.currentContact);
                this.currentContact = { nome: '', telefone: '', email: '' };
                this.editIndex = -1;
            }
        },
        deleteContact(index) {
            this.contacts.splice(index, 1);
        }
    }
});
