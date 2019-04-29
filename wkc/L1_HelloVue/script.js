new Vue({
  el: "#app",
  data: {
    textInput: ""
  },
  computed: {
    textOutput: function() {
      return `The input is ${this.textInput}`;
    }
  },
  methods: {
    onInput: function(event) {
      this.textInput = event.target.value;
    }
  }
});
