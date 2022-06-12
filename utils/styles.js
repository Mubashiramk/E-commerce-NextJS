const { makeStyles } = require("@material-ui/core");

const useStyle = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#203040",

    color: "#ffffff",
    paddingLeft: "20px",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
      fontSize: 20,
    },
  },
  typography: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  main: {
    minHeight: "80vh",
  },
  grow: {
    color: "#ffffff",
    flexGrow: 1,
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
}));
export default useStyle;
