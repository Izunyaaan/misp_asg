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

    <v-expansion-panels dark>
      <v-expansion-panel>
        <v-expansion-panel-header>
          List of our authorized dealers
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list-item
            v-for="(place, index) in places"
            :key="index"
            @click="center = place.coords"
          >
            {{ place.name }}
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <br />
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        v-for="(place, index) in places"
        :key="index"
        :position="place.coords"
        @click="center = place.coords"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 4.97726140096705, lng: 114.89992119669525 },
      places: [
        {
          name: "Dummy Authorized Dealer 1",
          coords: {
            lat: 4.958263502428469,
            lng: 114.8914912944291,
          },
        },
        {
          name: "Dummy Authorized Dealer 2",
          coords: {
            lat: 4.928396251735412,
            lng: 115.00040714630435,
          },
        },
        {
          name: "Dummy Authorized Dealer 3",
          coords: {
            lat: 4.738353230263405,
            lng: 114.90656848673284,
          },
        },
        {
          name: "Dummy Authorized Dealer 4",
          coords: {
            lat: 4.315585270308736,
            lng: 114.5628220034878,
          },
        },
        {
          name: "Dummy Authorized Dealer 5",
          coords: {
            lat: 4.5701020405072565,
            lng: 114.25961101349299,
          },
        },
      ],
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