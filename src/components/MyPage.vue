<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />

    <div class="post-header" v-for="pr in follower" :key="pr">
      <div class="profile" :class="`background-image:url(${pr.image})`"></div>
      <span class="profile-name">{{ pr.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, toRef } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  props : {
      one : Number,
  },
  setup(props, context) {
    let follower = ref([]);

    let prps = toRef(props);
    prps;
    context;

    onMounted(() => {
      axios.get("follower.json").then((res) => {
        follower.value = res.data;
      });
    });

    return { follower };
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>