<template>
  <nav class="nav">
    <input v-model="checked" @change="setToggle" type="checkbox" class="nav__checkbox" id="nav-toggle">
    <label for="nav-toggle" class="nav__btn">
      <button class="nav__icon"></button>
    </label>
    <div id="myNav" :class="`overlay ${myNav}`">
      <div class="overlay-content">
        <router-link to="/news/social">
          <p @click="onRoute">Social</p>
        </router-link>
        <router-link to="/news/entertainment">
          <p @click="onRoute">Entertainment</p>
        </router-link>
        <router-link to="/news/sport">
          <p @click="onRoute">Sport</p>
        </router-link>
        <router-link to="/news/taiwan">
          <p @click="onRoute">Taiwan</p>
        </router-link>
        <router-link to="/news/nba">
          <p @click="onRoute">NBA</p>
        </router-link>
        <router-link to="/news/movie">
          <p @click="onRoute">Movie</p>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
     return {
        checked: false,
        size: 'lg',
        toggle: false
     };
  },
  methods: {
    onResize() {
      this.toggle = false;
      if (window.innerWidth > 1000)
        this.size = 'lg';        
      else 
        this.size = 'sm';
    },

    onRoute() {
      this.checked = !this.checked;
    },

    setToggle() {
        this.toggle = true;
    }
  },
  computed: {
    myNav() {
      if(this.toggle && !this.checked && this.size == 'lg')
        return 'hide-lg';
      else if (this.toggle && !this.checked && this.size == 'sm')
        return 'hide-sm';
      else if(!this.checked && this.size == 'lg')
        return 'hide-lg notransition';
      else if (!this.checked && this.size == 'sm')
        return 'hide-sm notransition';      
      else
        return 'show';
    }
  },
  created() {
    window.addEventListener('resize', this.onResize);
  }
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_nav.css";

.notransition {
  transition: 0s !important;
}

.show {
  transition: 0.5s;
  width: 100%;
  height: 100%;
}

.hide-lg {
  transition: 0.5s;
  width: 0%;
  height: 100%;
}

.hide-sm {
  transition: 0.5s;
  width: 100%;
  height: 0%;
}

.overlay {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: $color-primary;
  overflow-x: hidden;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  color: $color-white;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

.overlay-width {

}

</style>
