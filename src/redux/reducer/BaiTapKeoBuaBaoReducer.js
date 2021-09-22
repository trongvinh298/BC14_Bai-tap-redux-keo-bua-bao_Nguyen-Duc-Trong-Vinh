const initialState = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameKeoBuaBao/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameKeoBuaBao/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameKeoBuaBao/bao.png", datCuoc: false },
  ],
  ketQua: "Chơi nào!!!",
  soLanThang: 0,
  tongLanChoi: 0,
  computer: { ma: "bua", hinhAnh: "./img/gameKeoBuaBao/bua.png" },
};

const BaiTapKeoBuaBaoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO":
      let mangCuocNew = [...state.mangDatCuoc];
      mangCuocNew = mangCuocNew.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      let index = mangCuocNew.findIndex((item) => item.ma === action.maCuoc);
      if (index !== -1) {
        mangCuocNew[index].datCuoc = true;
      }
      state.mangDatCuoc = mangCuocNew;

      return { ...state };

    case "RANDOM":
      let random = Math.floor(Math.random() * 3);
      let randomChoice = state.mangDatCuoc[random];

      state.computer = randomChoice;
      return { ...state };

    case "END":
      state.tongLanChoi++;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà rồi, thử lại nhé!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua rồi, chơi lại nào";
          } else {
            state.ketQua = "Thắng rồi! Yeah!";
            state.soLanThang++;
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hoà rồi, thử lại nhé!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua rồi, chơi lại nào";
          } else {
            state.ketQua = "Thắng rồi! Yeah!";
            state.soLanThang++;
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hoà rồi, thử lại nhé!";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua rồi, chơi lại nào";
          } else {
            state.ketQua = "Thắng rồi! Yeah!";
            state.soLanThang++;
          }
          break;

        default:
          break;
      }

      return { ...state };
    default:
      return { ...state };
  }
};

export default BaiTapKeoBuaBaoReducer;
