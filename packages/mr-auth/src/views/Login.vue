<template>
  <div
    id="mr-login"
    class="mr-form d-flex justify-center align-center"
  >
    <v-card
      class="mx-auto"
      max-width="100%"
      width="480"
      outlined
    >
      <v-card-text>
        <h1 class="display-1 mb-8">Login</h1>
        <v-form>
          <v-text-field
            label="E-mail"
            outlined
          />
          <v-text-field
            label="Password"
            outlined
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text to="/register">Register</v-btn>
        <v-btn text to="/recover">Recover</v-btn>
        <v-btn text color="primary">Sign In</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
  .mr-form {
    height: 100vh;
    width: 100vw;
  }
</style>
