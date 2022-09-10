<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>Name </label>
        <input type="text" v-model="inputName" />
      </div>
      <div>
        <label>Age </label>
        <input type="text" v-model="inputAge" />
      </div>
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-user"],
  data() {
    return {
      inputName: "",
      inputAge: "",
    };
  },

  methods: {
    submitData() {
      this.$emit("set-user", this.inputName, this.inputAge);
    },
  },
};
</script>
