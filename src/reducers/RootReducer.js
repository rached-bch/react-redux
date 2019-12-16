const initState = {
  posts: [
    {
      id: 1,
      title: "Article 1"
    },
    {
      id: 2,
      title: "Article 2"
    }
  ]
};

const RootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default RootReducer;
