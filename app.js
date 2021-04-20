const app = Vue.createApp({
  template: "<h1>Hello {{firstName}}</h1>",
  data() {
    return {
      firstName: "John",
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
});

app.mount("#app");
