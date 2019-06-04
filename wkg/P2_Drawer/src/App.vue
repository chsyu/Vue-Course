<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <template v-for="menu in menus">
          <v-list-tile :key="menu.value" @click="$router.push({ name: menu.path})">
            <v-list-tile-content>{{menu.value}}</v-list-tile-content>
          </v-list-tile>
          <v-divider :key="menu.value"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn @click="$router.push({ name: 'home'})" flat class="hidden-sm-and-down">Home</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn @click="$router.push({ name: 'page1'})" flat class="hidden-sm-and-down">Page1</v-btn>
      <v-btn @click="$router.push({ name: 'page2'})" flat class="hidden-sm-and-down">Page2</v-btn>
      <v-btn @click="$router.push({ name: 'page3'})" flat class="hidden-sm-and-down">Page3</v-btn>
    </v-toolbar>
    <v-btn @click="$router.push({ name: 'post'})" color="red" dark fixed bottom right fab>
      <v-icon>add</v-icon>
    </v-btn>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: mapGetters(["titleName"]),
  data() {
    return {
      drawer: false,
      menus: [
        { value: "Home", path: "home" },
        { value: "Page1", path: "page1" },
        { value: "Page2", path: "page2" },
        { value: "Page3", path: "page3" }
      ]
    };
  }
};
</script>