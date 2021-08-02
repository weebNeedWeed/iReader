const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: "'Inconsolata', 'Menlo', 'Consolas', monospace",
    fontSize: 16,
    padding: 4,
  },
  BOLD: {
    color: "#395296",
    fontWeight: "bold",
  },
  ANYCUSTOMSTYLE: {
    color: "#00e400",
  },
};

const toolbarItems = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Code", style: "CODE" },
  { label: "Surprise", style: "ANYCUSTOMSTYLE" },
];

export { styleMap, toolbarItems };
