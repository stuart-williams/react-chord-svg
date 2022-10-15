# React Chord SVG

![C Major - E Shape](https://raw.githubusercontent.com/stuart-williams/react-chord-svg/main/svg/c-major-e-shape.svg)

## Install

```bash
yarn add react-chord-svg
```

```bash
npm install react-chord-svg --save
```

## Usage

```jsx
import ChordSVG from "react-chord-svg";

<ChordSVG
  title="C Major - E Shape"
  startAtFret={8}
  numberOfFrets={4}
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
    }
  ]}
/>
```
