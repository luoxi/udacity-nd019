import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as ReadableAPI from "./ReadableAPI";
import Root from "./components/Root";
import "./App.css";

class App extends Component {
  state = {
    categories: [],
    posts: []
  };

  componentDidMount() {
    ReadableAPI.getCategories()
      .then(categories => {
        if (categories.error) {
          this.setState({ categories: [], error: categories.error });
        } else {
          this.setState({ categories: categories, error: "" });
        }
      })
      .catch(err => {
        this.setState({ categories: [], error: err });
      });

    ReadableAPI.getAllPosts()
      .then(posts => {
        if (posts.error) {
          this.setState({ posts: [], error: posts.error });
        } else {
          this.setState({ posts: posts, error: "" });
        }
      })
      .catch(err => {
        this.setState({ posts: [], error: err });
      });
  }

  render() {
    const { categories, posts } = this.state;
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => <Root categories={categories} posts={posts} />}
        />
      </div>
    );
  }
}

export default App;
