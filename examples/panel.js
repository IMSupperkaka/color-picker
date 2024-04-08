import "@bzl/rc-color-picker/assets/index.less";
import React from "react";
import ReactDOM from "react-dom";
import { Panel as ColorPickerPanel } from "@bzl/rc-color-picker";

function onChange(obj) {
  console.log(obj);
}

ReactDOM.render(
  <div style={{ backgroundColor: "#ddd", padding: 20 }}>
    <ColorPickerPanel
      enableAlpha={false}
      color={"#FFFFFF"}
      onChange={onChange}
      mode="RGB"
    />
    <hr />
    <ColorPickerPanel
      alpha={80}
      color={"#477898"}
      onChange={onChange}
      mode="HSB"
    />
  </div>,
  document.getElementById("__react-content")
);
