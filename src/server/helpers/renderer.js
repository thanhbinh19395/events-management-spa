import React from 'react';
import { renderToString  } from 'react-dom/Server';
import Application from "../../shared/App";

export default (req, res) => {
  res.send(renderToString(<Application />));
}
