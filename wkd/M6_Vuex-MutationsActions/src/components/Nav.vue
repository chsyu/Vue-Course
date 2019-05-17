<template>
   <nav class="nav">
      <input type="checkbox" class="nav__checkbox" id="nav-toggle">
      <label for="nav-toggle" class="nav__btn">
         <button class="nav__icon"></button>
      </label>
   </nav>
</template>

<script>
export default {
   name: 'Nav'
}
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_nav.css";
</style>
