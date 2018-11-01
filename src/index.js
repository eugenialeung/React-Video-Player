import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD5k9Wo-CJl7NweWMd4OZN5MpyFBVeAfx0";

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.getElementById("root"));
