import { createSlice } from "@reduxjs/toolkit";

const posts1 = [
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts:posts1 ||[]
    },
    reducers: {
        addPost: function(state,action) {
            state.posts = [action.payload,...state.posts]
        },
        deletePost: function(state,action) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        editPost: function(state,action) {
            const currentPost = state.posts.find(post => post.id === action.payload)
            const updatedPostTitle = prompt('Update Post',`${currentPost.title}`)
            const updatedPost = prompt(`Update ${updatedPostTitle}`,`${currentPost.body}`)
            const updateArrayIndex = state.posts.findIndex(post => post.id === action.payload)
            state.posts[updateArrayIndex].title = updatedPostTitle
            state.posts[updateArrayIndex].body = updatedPost
        }
    }
})


export const {addPost,deletePost,editPost} = postsSlice.actions
export default postsSlice.reducer