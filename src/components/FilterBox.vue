<template>
  <div :class="filter + ' filter-item'" :style="{ backgroundImage: `url(${imgurl})` }" @click="fire">
      <slot name="name"></slot>
  </div>
</template>

<script>
export default {
  name: "cFilterBox",
  props: {
    imgurl: String,
    filter: String,
  },
  methods : {
      fire(){
          this.emitter.emit('filter', this.filter);
      },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>