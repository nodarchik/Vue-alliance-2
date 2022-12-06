const app = Vue.createApp({
  data() {
    return {
      input1: "",
      input2: "",
      confirmedinput2: "",
    };
  },
  methods: {
    setInput1(event) {
      this.input1 = event.target.value;
    },
    setInput2(event) {
      this.input2 = event.target.value;
    },
    confirmInput() {
      this.confirmedinput2 = this.input2;
    },
    submitForm() {
      alert("Hello Developers Alliance!");
    },
  },
});

app.mount("#assignment");
