const app = Vue.createApp({
  data() {
    return {
      name: "Hoda",
      age: 21,
      imageSrc:
        "https://img.freepik.com/free-vector/flat-design-young-girl-programmer-working_23-2148267156.jpg?w=740&t=st=1661903169~exp=1661903769~hmac=bbaea244b75476a3adf670282d3976f6de115222ac655dc202d89e9a552f4389",
    };
  },
  methods: {
    ageAfter5() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
