import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  handleClick = id => {
    this.props.delePost(id);
  };
  render() {
    const { posts } = this.props;
    const postData = posts.length ? (
      posts.map(post => {
        return (
          <div className="base" key={post.id}>
            <h2>
              {post.title}{" "}
              <button onClick={() => this.handleClick(post.id)}>x</button>
            </h2>
          </div>
        );
      })
    ) : (
      <p>Aucun article</p>
    );
    return (
      <div className="accueil">
        <h1>Page d'accueil</h1>
        {postData}
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delePost: id => {
      dispatch({ type: "DELETE_POST", id });
    }
  };
};
export default connect(mapStateProps, mapDispatchToProps)(App);
