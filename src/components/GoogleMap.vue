<template>
  <div>
    <div class="d-flex justify-center">
      <v-btn dark @click="respond" class="ma-5"
        >Search for an authorized dealer near you.</v-btn
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
        "Unable to determine a dealer near you. You can try contacting us or ordering from us directly if you believe you live more than 50 miles from an authorized dealer. Sorry for the inconvenience."
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