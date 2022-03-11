<template>
  <div class="pa-5">
    <h1>Contact Form</h1>
    <h2>
      Need to contact us directly? Fill up the form below and we'll try to help
      you.
    </h2>
    <v-card outlined tile elevation="5">
      <v-form ref="form" v-model="valid" lazy-validation class="pa-8">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="message"
          :rules="messageRules"
          label="Message"
          required
        ></v-text-field>
      </v-form>
      <v-card-actions class="pa-12">
        <v-spacer></v-spacer>
        <v-btn dark @click="validate">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",

    messageRules: [(v) => !!v || "Message is required"],
  }),
  methods: {
    validate() {
      let v = this.$refs.form.validate();
      if (v) {
        alert(
          "Thank you for contacting us. We will review your message. But let's be honest sir, this form doesn't have a backend so really nothing was delivered. SMTP could be implemented though!"
        );
      }
    },
  },
};
</script>

<style>
</style>