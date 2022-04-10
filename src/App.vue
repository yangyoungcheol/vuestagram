<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  
  
  <Container :posts="posts" :step="step" :imgurl="imgurl" @write="post_content=$event" />


  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        type="file"
        accept="image/*"
        multiple
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <button @click="step = 0">포스트</button>
  <button @click="step = 1">필터</button>
  <button @click="step = 2">글쓰기</button>

  <button @click="$store.dispatch('getData')">더보기</button>
  <br /><br />
</template>


<script>
import Container from "./components/Container.vue";
import Data from "./assets/posts";
import axios from "axios";
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'

export default {
  name: "App",
  data() {
    return {
      posts: Data,
      moreClick: 0,
      step: 0,
      imgurl: "",
      post_content : "",
      use_filter : "",
      counter : 0,
    };
  },
  mounted(){
    this.emitter.on('filter', (filter)=>{
      this.use_filter = filter;
        //console.log("App.vue/" + a);
    })
  },
  methods: {
    ...mapMutations(['changeName', 'addLikes']),
    more() {
      axios
        .get(
          "https://codingapple1.github.io/vue/more" + this.moreClick + ".json"
        )
        .then((data) => {
          //console.log(data.data);
          this.posts.push(data.data);
          this.moreClick++;
        })
        .catch(() => {
          alert("마지막 게시물입니다.");
        });
    },
    upload(e) {
      let itfile = e.target.files;
      let url = URL.createObjectURL(itfile[0]);
      this.imgurl = url;
      //console.log(url);
      this.step = 1;
    },
    publish() {
      var add_post = {
        name: "Kim Attack",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.imgurl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.post_content,
        filter: this.use_filter,
      };
      this.posts.unshift(add_post);
      this.step = 0;
    },
    now(){
      return new Date();
    },
  },

  computed : {
    name(){
      return this.$store.state.name;
    },
    ...mapState(['name', 'likes', 'age']),

  },

  components: {
    Container,
  },
};
</script>



<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
