import React from "react";
import { render } from "react-dom";
import Index from "@src/object/app/Index";
import Form from "@src/object/app/Form";

const apps = {
  // apps

  index: Index,

  form: Form
};

Object.keys(apps).forEach(containerID => {
  const App = apps[containerID];
  const container = document.getElementById(containerID);

  if (App && container) {
    console.log("containerID: %o", containerID);
    console.log("container  : %o", container);

    container && render(<App />, container);
  }
});
