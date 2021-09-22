import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    return (
      <div className="ketQua mt-5">
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số lần thắng:{" "}
          <span className="text-warning">{this.props.soLanThang}</span>
        </div>
        <div className="display-4 text-success">
          Tổng lần chơi:{" "}
          <span className="text-warning">{this.props.tongLanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapKeoBuaBaoReducer.ketQua,
    soLanThang: state.BaiTapKeoBuaBaoReducer.soLanThang,
    tongLanChoi: state.BaiTapKeoBuaBaoReducer.tongLanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQua);
