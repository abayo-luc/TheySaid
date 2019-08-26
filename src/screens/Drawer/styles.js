import EStyleSheet from "react-native-extended-stylesheet";
import { responsiveWidth, responsiveHeight } from "../../utils/dimensions";

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "$primaryDark",
  },
  header: {
    width: "98%",
    flex: 0.3,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 0.7,
    backgroundColor: "#fff",
    paddingVertical: responsiveHeight(3),
  },
  item: {
    alignSelf: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: responsiveWidth(5),
  },
  text: {
    color: "#0F1336",
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: responsiveWidth(3),
    fontWeight: "bold",
  },
});
