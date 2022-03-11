<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.name" :to="link.route">{{
          link.name
        }}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="red">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><v-list-item to="/" class="black--text"
          >Dirt Bikes</v-list-item
        ></v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <router-view class="ma-3" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      { name: "Home", route: "/" },
      { name: "Accessories and Equipment", route: "/accessories" },
      { name: "Dealers", route: "/dealers" },
      { name: "About Us", route: "/about" },
      { name: "Contact", route: "/contact" },
      { name: "User Account", route: "/users" },
    ],
  }),
};
</script>