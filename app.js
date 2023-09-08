console.log(React);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

const header = React.createElement("h1", { id: "header" }, "This is h1 header");
const paragraph = React.createElement(
  "p",
  { id: "paragraph" },
  "This is a paragraph."
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [header, paragraph])
);

root.render(parent);