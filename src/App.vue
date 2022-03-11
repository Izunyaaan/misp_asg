<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="link in links" :key="link.name" :to="link.route">{{
          link.name
        }}</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dirt Bikes</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
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