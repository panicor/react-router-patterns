import React, { useState } from "react";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function Routes() {
  let initColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };

  const [colors, setColors] = useState(initColors);

  function displayColor(propColor) {
    let { color } = propColor.match.params;
    let hexCode = colors[color];
    return <Color {...propColor} hex={hexCode} color={color} />;
  }

  function add(newColor) {
    setColors((oldColors) => ({ ...oldColors, ...newColor }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={add} />
        </Route>
        <Route path="/colors/:color" display={displayColor} />
        <Redirect />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
