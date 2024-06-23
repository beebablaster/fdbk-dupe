import React from "react";

export const useWinReady = () => {
  const [winReady, setWinReady] = React.useState(false);

  React.useEffect(() => {
    setWinReady(true);
  }, []);

  return { winReady }
}