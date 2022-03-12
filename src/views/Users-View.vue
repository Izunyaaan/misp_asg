<template>
  <div class="d-flex flex-wrap">
    <v-card width="45%" min-width="250px" class="ma-3">
      <v-card-title>Log in</v-card-title>
      <v-form ref="form" lazy-validation class="pa-8" @submit="validate">
        <v-text-field
          v-model="username"
          :rules="userRules"
          label="User Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="validate" dark>Log In</v-btn>
      </v-card-actions>
    </v-card>
    <v-card width="45%" min-width="240px" class="ma-3">
      <v-card-title>Register</v-card-title>
      <v-form ref="rform" lazy-validation class="pa-8" @submit="register">
        <v-text-field
          v-model="rusername"
          :rules="userRules"
          label="User Name"
          required
        ></v-text-field
        ><v-text-field
          v-model="remail"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field
        ><v-text-field
          v-model="rpassword"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-form>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="register" dark>Register</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    bakedCredential: {
      username: "User",
      password: "Password",
    },
    username: "",
    rusername: "",
    remail: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    rpassword: "",
    passwordRules: [(v) => !!v || "Password is required"],
    userRules: [(v) => !!v || "Username is required"],
  }),
  methods: {
    register() {
      let v = this.$refs.rform.validate();
      if (v) {
        alert(
          "Thank you for registering! As this is a dummy site without a backend nothing will happen."
        );
      }
    },
    validate() {
      let v = this.$refs.form.validate();
      if (v) {
        if (
          this.username == this.bakedCredential.username &&
          this.password == this.bakedCredential.password
        ) {
          this.$router.push("/loggedin");
        } else {
          alert("Invalid username or password");
        }
      }
    },
  },
};
</script>

<style>
</style>