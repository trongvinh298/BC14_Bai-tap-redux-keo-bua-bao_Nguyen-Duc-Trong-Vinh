import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `
    @keyframes randomItem${Date.now()} {
        0% {top: -50px;}
        25% {top: 100px;}
        50% {top: 50px}
        100% {top: 0}
      }`;

    return (
      <div className="player mt-5">
        <style>{keyframe}</style>

        <div className="choice">
          <img
            style={{
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="player-img"
          src="./img/gamekeoBuaBao/playercomputer.png"
          alt="./img/gamekeoBuaBao/playercomputer.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapKeoBuaBaoReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
