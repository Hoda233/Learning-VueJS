const app = Vue.createApp({
  data() {
    return {
      outputA: "",
      outputB: "",
      confirmedOutputB: "",
    };
  },
  methods: {
    showAlert() {
      alert("Button is clicked!");
    },
    showOutputA(event) {
      this.outputA = event.target.value;
    },
    setOutputB(event) {
      this.outputB = event.target.value;
    },
    showOutputB() {
      this.confirmedOutputB = this.outputB;
    },
  },
});
app.mount("#assignment");
