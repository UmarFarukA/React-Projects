/* eslint-disable jsx-a11y/anchor-is-valid */
// "https://api.api-ninjas.com/v1/quotes"
// {
//     "X-Api-Key": "mw9Ih7ORZuN+WI8o9zESBg==YtLiEpqRaGv2DFPa",
//   }
import axios from "axios";
import React from "react";

class Qoutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qoutes: [],
      qoute: "",
    };
    this.handleFetchQoute = this.handleFetchQoute.bind(this);
  }

  componentDidMount() {
    const fetchQoutes = async () => {
      try {
        const res = await axios.get("https://type.fit/api/quotes");

        this.setState({
          qoutes: res.data,
        });
      } catch (error) {
        console.log(error);
      }

      //   finally {
      //     let qouteLength = this.state.qoutes.length;
      //     this.setState({
      //       qoute: this.state.qoutes[Math.floor(Math.random() * qouteLength)],
      //     });
      //   }
    };

    fetchQoutes();
  }

  handleFetchQoute = () => {
    let qouteLength = this.state.qoutes.length;
    this.setState({
      qoute: this.state.qoutes[Math.floor(Math.random() * qouteLength)],
    });
    console.log(this.state.qoute);
  };

  render() {
    return (
      <div className="bg-light d-flex flex-column justify-content-between px-2 py-2 w-25 mx-auto m-5 p-2">
        <p className="text-warning fs-4 align-self-center mt-2 blockquote">
          {this.state.qoute.text}
        </p>
        <span className="align-self-end text-warning fs-6">
          {this.state.qoute.author}
        </span>
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
          <div className="d-flex flex-row gap-2 align-items-center">
            <span className="px-3 py-1 bg-warning rounded-1 text-white">F</span>
            <span className="px-3 py-1 bg-warning rounded-1 text-white">T</span>
          </div>
          <button
            className="px-3 py-2 bg-warning text-white border border-0"
            onClick={this.handleFetchQoute}
          >
            New Qoute
          </button>
        </div>
      </div>
    );
  }
}

export default Qoutes;
