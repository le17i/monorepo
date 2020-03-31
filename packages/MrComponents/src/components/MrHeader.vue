<template>
  <header class="mr-header">
    <div class="mr-header-title">
      <h1 class="mr-header-title-text">
        <slot name="title" />
      </h1>
    </div>
    <div class="mr-header-description">
      <p class="mr-header-description-text">
        <slot name="description" />
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MrHeader'
}
</script>

<style lang="scss" scoped>
.mr-header {
  border-bottom: 1px solid #ddd;
  margin: 16px 0;
  padding-bottom: 8px;
}

.mr-header-title,
.mr-header-description {
  margin-bottom: 24px;
}

.mr-header-title-text,
.mr-header-description-text {
  margin: 0;
  padding: 0 0 8px;
}

.mr-header-title-text {
  font-size: 36px;
}

.mr-header-description-text {
  font-size: 24px;
}
</style>
