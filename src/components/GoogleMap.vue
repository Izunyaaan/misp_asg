<template>
  <div>
    <div class="d-flex justify-center">
      <v-btn dark @click="respond" class="ma-5 align-self-center"
        >Search for an authorized dealer near you.</v-btn
      >
      <v-btn dark to="/contact" class="ma-5 align-self-center"
        >Interested in being a dealer? Contact us!</v-btn
      >
    </div>
    <br />
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px" />
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    respond: () =>
      alert(
        "W are experiencing technical issues and are unable to determine a dealer near you. You can try contacting us or ordering from us directly if you believe you live more than 50 miles from an authorized dealer. Sorry for the inconvenience."
      ),
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>