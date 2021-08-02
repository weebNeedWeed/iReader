const styles = {
  editor: (props) => {
    if (props.readOnly) {
      return { minHeight: "700px" };
    }
    return {
      border: "1px solid black",
      borderRadius: "3px",
      padding: "10px",
      paddingRight: "3px",
      backgroundColor: "rgba(0, 0, 0, 0.09)",
      minHeight: "700px",
    };
  },
  formControl: {
    marginBottom: "15px",
  },
  textArea: {
    width: "100%",
    resize: "none",
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    borderRadius: "3px",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.623)",
    color: "white",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.822)",
    },
  },
};

export default styles;
