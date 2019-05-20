<template>
  <div>
    <div class="jumbotron jumbotron-bg text-white text-center">
      <h2 class="display-3">Google News API</h2>
    </div>
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5 display-4">
        Login
      </h2>
      <!-- login with email and password -->
      <form>
        <div class="form-group">
          <input
            v-model.trim="email"
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required
          >
          <input
            v-model.trim="password"
            type="password"
            password="password"
            class="form-control"
            placeholder="Password"
            required
          >
        </div>
      </form>
      <!-- social login -->
      <div class="text-center mt-4">
        <button @click="loginWithGoogle" class="btn btn-bg btn-lg btn-block">Login with Google</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from "../router";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      loading: false,
      user: ""
    };
  },
  methods: {
    async loginWithGoogle() {
      // loading set to true
      this.loading = true;
      // clear old errors
      this.errors = [];
      try {
        let response = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.user = response.user;
        router.push("/");
      } catch (error) {
        this.errors.push(error.message);
        // set loading to false
        this.loading = false;
      }
    }
  }
};
</script>

<style lang='postcss' scoped>
@import "../styles/base/_variables.css";
* {
  border-radius: 0;
}

.jumbotron-bg {
  background-color: $color-primary;
}

.login-header {
  color: $color-primary-dark;
}

.btn-bg {
  background-color: $color-google;
  color: $color-white;
}
</style>
