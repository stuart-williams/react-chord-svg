# React Chord SVG

![C Major](https://raw.githubusercontent.com/stuart-williams/react-chord-svg/main/svg/c-major-g-shape.svg)

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
  title="C Major - G Shape"
  startAtFret={5}
  numberOfFrets={5}
  notes={[
    {
      string: 1,
      muted: true,
    },
    {
      string: 2,
      muted: true,
    },
    {
      fret: 1,
      string: 3,
      bar: 4,
      color: "gray",
      opacity: 0.5,
    },
    {
      fret: 1,
      string: 3,
      text: "1",
    },
    {
      fret: 1,
      string: 4,
      text: "1",
      color: "red",
    },
    {
      fret: 1,
      string: 5,
      text: "1",
    },
    {
      fret: 4,
      string: 6,
      text: "4",
      color: "red",
    },
  ]}
/>;
```

## Options

```typescript
interface Props {
  notes: Note[];
  title?: string;
  startAtFret?: number;
  numberOfFrets?: number;
  numberOfStrings?: number;
}

interface Note {
  bar?: number;
  fret?: number;
  text?: string;
  string: number;
  color?: string;
  muted?: boolean;
  opacity?: number;
  textColor?: string;
}
```
