<template>
  <div :class="filter + ' filter-item'" :style="{ backgroundImage: `url(${imgurl})` }"></div>
</template>

<script>
export default {
  name: "cFilterBox",
  props: {
    imgurl: String,
    filter: String,
  },
};
</script>

<style>
</style>