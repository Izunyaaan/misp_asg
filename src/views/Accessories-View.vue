<template>
  <div>
    <v-card>
      <v-card-title>Accessories and Equipment</v-card-title>
      <v-card-text>
        You can purchase spare parts from our
        <a href="/dealers">certified dealers</a> or order directly from us!
      </v-card-text>
      <v-card-actions>
        <v-btn to="/dealers" dark>Check out our dealers</v-btn>
        <v-btn @click="respond" dark>Order from us</v-btn>
      </v-card-actions>
    </v-card>
    <v-card elevation="2">
      <v-card-title>What we supply</v-card-title>
      <div class="pa-6 d-flex flex-wrap">
        <v-card
          v-for="item in items"
          :key="item.name"
          elevation="5"
          outlined
          tile
          min-width="150px"
          width="20%"
          max-width="420px"
        >
          <v-card-title>{{ item.name }}</v-card-title>
          <div class="d-flex justify-center">
            <img :src="item.imgLink" width="80%" />
          </div>
          <v-card-subtitle>{{ item.price }}</v-card-subtitle>
          <v-card-text v-html="item.description"> </v-card-text>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Body Frame",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_body_160x160.jpg",
        price: "$420.69",
        description:
          "Our own design which has carried champions to where they are!",
      },
      {
        name: "Engines",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_engine_160x160.jpg",
        price: "$420.69",
        description:
          "Only the best. Imported from trusted companies such as Honda and Rotax Motor (Austria), we guarantee the highest performance possible!",
      },
      {
        name: "Exhaust",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_exhaust_160x160.jpg",
        price: "$420.69",
        description:
          "Save the environment and your ears! Our hardware will take your biking experience to the next level",
      },
      {
        name: "Drive",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_drive_160x160.jpg",
        price: "$420.69",
        description:
          "Know what separates the champ from the pros? Skill and gear. Up your game by getting into gear faster than the rest!",
      },
      {
        name: "Intake",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_intake_160x160.jpg",
        price: "$420.69",
        description:
          "Air Filters and Accessories <br/> Reeds and Reed Valves <br/> Air Box Covers",
      },
      {
        name: "Controls",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_controls_160x160.jpg",
        price: "$420.69",
        description: "Your safety is our priority! Stay in control.",
      },
      {
        name: "Brakes",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_brakes_160x160.jpg",
        price: "$420.69",
        description: "Brake your old records... ",
      },
      {
        name: "Fuel System",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_fuel_system_160x160.jpg",
        price: "$420.69",
        description:
          "Leave no drop behind! Our excellent fuel systems ensures nary a drop of fuel gets wasted.",
      },
      {
        name: "Graphics",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_graphics_160x160.jpg",
        price: "$420.69",
        description:
          "Make your bikes your own with these lovely customization options. Paint, stick, decal. We've got you... covered.",
      },
      {
        name: "Tires",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_tires_160x160.jpg",
        price: "$420.69",
        description:
          "Not just rings of rubber, our tires will ensure you never slip and feel those bumps.",
      },
      {
        name: "Suspension",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_suspension_160x160.jpg",
        price: "$420.69",
        description:
          "Our state of the art suspension systems will save your crotch so you can brag your achievements to your children.",
      },
      {
        name: "Crash Protection",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_crash_protection_160x160.jpg",
        price: "$420.69",
        description:
          "Don't get us started. Just give your money, we swear it's worth it.",
      },
      {
        name: "Lights and electricals",
        imgLink:
          "https://f-static.motosport.com/motographics/images/categories/dirtbike/db_lights_and_electrical_160x160.jpg",
        price: "$420.69",
        description: "Need to go on an endurance race? We've got you covered.",
      },
    ],
  }),
  methods: {
    respond: function () {
      alert(
        "We are currently experiencing technical issues and are unable to confirm you live more than 50 miles one of our dealers. Please contact us through the contact us page. Sorry for the inconvenience."
      );
    },
  },
};
</script>

<style>
</style>
