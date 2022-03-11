<template>
  <div>
    <v-card>
      <v-card-title> Our Dealers </v-card-title>
      <v-card-text>
        With our certified dealers and many authorized independent dealers
        scattered all over the US and Europe, you should never be more than 50
        miles from one. If you think you're more than 50 miles from an
        authorized dealer, you can try
        <router-link to="/accessories">ordering yourself</router-link>.
      </v-card-text>
    </v-card>
    <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";
export default {
  components: {
    GoogleMap,
  },
};
</script>

<style>
</style>