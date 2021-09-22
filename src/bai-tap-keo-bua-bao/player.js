import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="player mt-5">
        <div className="choice ">
          <img
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc == true)
                .hinhAnh
            }
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="player-img"
          src="./img/gamekeoBuaBao/player.png"
          alt="./img/gamekeoBuaBao/player.png"
        />

        <div className="select row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "solid 3px orange" };
            }
            return (
              <div key={index} className="col-4">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  style={border}
                  className="btnItem"
                >
                  <img src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapKeoBuaBaoReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
