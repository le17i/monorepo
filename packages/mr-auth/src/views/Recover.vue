<template>
  <div
    id="mr-recover"
    class="mr-form d-flex justify-center align-center"
  >
    <v-card
      class="mx-auto"
      max-width="100%"
      width="480"
      outlined
    >
      <v-card-text>
        <h1 class="display-1 mb-8">Recover</h1>
        <v-form>
          <v-text-field
            label="E-mail"
            outlined
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary">Recover</v-btn>
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
