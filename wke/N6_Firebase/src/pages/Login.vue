<template>
  <div>
    <div class="jumbotron jumbotron-bg text-white text-center">
      <h2 class="display-3">Google News API</h2>
    </div>
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5 display-4">
        <i class="fa fa-user"></i> Login
      </h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    }
  }
};
</script>

<style lang='postcss' scoped>
@import "../styles/base/_variables.css";

.jumbotron-bg {
  background-color: $color-primary;
}

.login-header {
  color: $color-primary-dark;
}
</style>
