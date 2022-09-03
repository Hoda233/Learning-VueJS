const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      isVisible: true,
      chooseBackgroundColor: "",
    };
  },
  computed: {
    paragraphClass() {
      return {
        user1: this.userClass === "user1",
        user2: this.userClass === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },

  methods: {
    toogle() {
      this.isVisible = !this.isVisible;
    },
  },
});
app.mount("#assignment");
