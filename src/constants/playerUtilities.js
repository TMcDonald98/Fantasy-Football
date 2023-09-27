export const getPositionColor = (position) => {
  switch (position) {
    case "QB":
      return "#ff2a6d";
    case "WR":
      return "#00ceb8";
    case "RB":
      return "#58a7ff";
    case "TE":
      return "#ffae58";
    case "DEF":
      return "#7988a1";
    default:
      return "#a3bbd3";
  }
};

export const scoreType = (scoreSettings) => {
  if (scoreSettings.rec === 0) return "Standard";
  else if (scoreSettings.rec === 0.5) return "Half-PPR";
  else if (scoreSettings.rec === 1) return "PPR";
  else return "Custom";
};
