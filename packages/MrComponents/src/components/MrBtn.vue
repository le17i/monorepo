<template>
  <div id="mr-button">
    <button class="mr-btn">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'MrBtn'
}
</script>

<style lang="scss" scoped>
.mr-button {
  background-color: #09f;
  border: none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  padding: 8px 12px;
}
</style>
