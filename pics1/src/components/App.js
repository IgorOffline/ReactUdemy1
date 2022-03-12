import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { imageSource: "" };

  onSearchSubmit = (size) => {
    console.log(size);
    axios
      .get("https://picsum.photos/" + size)
      .then((response) => {
        console.log(response);
        this.setState({ imageSource: response.request.responseURL });
      })
      .then((err) => console.log(err));
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <img alt="Lorem Picsum" src={this.state.imageSource} />
      </div>
    );
  }
}

export default App;
