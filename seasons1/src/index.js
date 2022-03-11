import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
        <br />
        <div>ErrorMessage: {this.state.errorMessage}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
