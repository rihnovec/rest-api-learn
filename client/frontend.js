import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'

new Vue({
  el: '#app',
  data() {
    return {
      form: {
        name: '',
        value: ''
      },
      contacts: [
        {
          id: 1,
          name: 'Антон',
          value: '+7(914)-590-70-51',
          marked: false
        }
      ]
    }
  },
  computed: {
    canCreate() {
      return this.form.name.trim() && this.form.value.trim()
    }
  },
  methods: {
    createContact() {
      const {...contact} = this.form

      this.contacts.push({...contact, id: Date.now(), marked: false})
      this.clearForm()

    },

    markContact(id) {
      const contact = this.contacts.find(c => c.id === id)
      contact.marked = true
    },

    removeContact(id) {
      this.contacts = this.contacts.filter(c => c.id !== id)
    },

    clearForm() {
      this.form.name = this.form.value = ''
    }
  }
})