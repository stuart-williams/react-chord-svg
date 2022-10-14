import React from "react";
import ChordSVG from "react-chord-svg";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChordSVG
      width="500"
      title="C Major - E Shape"
      numberOfFrets={4}
      startAtFret={8}
      notes={[
        {
          fret: 1,
          string: 1,
          bar: 6,
          color: "gray",
          opacity: 0.5,
        },
        {
          fret: 1,
          string: 1,
          text: "1",
          color: "red",
        },
        {
          fret: 3,
          string: 2,
          text: "3",
        },
        {
          fret: 3,
          string: 3,
          text: "4",
          color: "red",
        },
        {
          fret: 2,
          string: 4,
          text: "2",
        },
        {
          fret: 1,
          string: 5,
          text: "1",
        },
        {
          fret: 1,
          string: 6,
          text: "1",
          color: "red",
        },
      ]}
    />
  </React.StrictMode>
);
