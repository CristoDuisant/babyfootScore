import React, { useState } from "react";

import App from "./App";

const EnhancedApp = () => {
  const [saison, updateSaison] = useState({ Antoine: 0, Cristofer: 0 });
  const [currentMatch, updateCurrentMatch] = useState({
    Antoine: 4,
    Cristofer: 3
  });
  const [players, updatePlayers] = useState(["Antoine", "Cristofer"]);

  const onUpdateSaison = () => {
    updateSaison();
  };

  const onUpdateCurrentMatch = () => {
    updateCurrentMatch();
  };

  const onUpdatePlayers = () => {
    updatePlayers();
  };

  const props = {
    saison,
    currentMatch,
    onUpdateSaison,
    onUpdateCurrentMatch,
    players,
    onUpdatePlayers
  };

  return <App {...props} />;
};

export default EnhancedApp;
