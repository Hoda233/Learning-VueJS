const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      isShown: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.isShown ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    toogleShownList() {
      this.isShown = !this.isShown;
    },
  },
});
app.mount("#assignment");
