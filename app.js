const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '843-345-3456',
          email: 'manuel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '402-564-4382',
          email: 'julie@localhost.com'
        }
      ]
    }
  }
});

// component is a custom html element, and you should always use dashes in a multi name component
// the 1st argument is an identifier (html element) and the 2nd arg is an config object just like we pass in the createApp method
// Components are like mini-apps connected to your main app
// Components need their own template
app.component('friend-contact', {
  template: `<li :key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '843-345-3456',
        email: 'manuel@localhost.com'
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app')
