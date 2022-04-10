import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name : "kim",
            age : 20,
            likes : [20, 35, 40],
            youlike : false,
            morePost : {},
        }
    },

    mutations : {
        changeName(state, req){
            state.name = req;
        },
        addLikes(state, idx){
            if(state.youlike == false){
                state.likes[idx] += 1;
                state.youlike = true;
            }else{
                state.likes[idx] -= 1;
                state.youlike = false;
            }
        },
        addPost(state, post){
            state.morePost= post;
        }
    },

    actions : {
        getData(context){
            axios
                .get("https://codingapple1.github.io/vue/more0.json")
                .then((data) => {
                    context.commit('addPost', data.data);
                })
                .catch((err) => {
                    console.log(err)
                    alert("마지막 게시물입니다.");
                });
        },
    }
})

export default store;