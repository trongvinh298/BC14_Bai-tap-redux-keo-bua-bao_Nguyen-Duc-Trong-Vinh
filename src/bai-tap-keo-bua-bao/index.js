import React, { Component } from "react";
import "../bai-tap-keo-bua-bao/baitapkeobuabao.css";
import Player from "./player";
import Computer from "./computer";
import KetQua from "./ketqua";
import { connect } from "react-redux";

class BaiTapKeoBuaBao extends Component {
  render() {
    return (
      <div className="gameKeoBuaBao">
        <div className="row text-center">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQua />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              type="button"
              class="btn btn-success mt-5 p-2"
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomComputerItem);
          dispatch({
            type: "END",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapKeoBuaBao);
