import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChordSVG from "../lib";

export default {
  title: "Guitar/C Major",
  component: ChordSVG,
} as ComponentMeta<typeof ChordSVG>;

const Template: ComponentStory<typeof ChordSVG> = (args) => (
  <ChordSVG {...args} />
);

export const C = Template.bind({});
C.args = {
  title: "C Major - C Shape",
  numberOfFrets: 4,
  watermark: "Created with chord.love",
  notes: [
    {
      string: 1,
      muted: true,
    },
    {
      fret: 3,
      string: 2,
      color: "red",
      text: "3",
    },
    {
      fret: 2,
      string: 3,
      text: "2",
    },
    {
      string: 4,
    },
    {
      fret: 1,
      string: 5,
      color: "red",
      text: "1",
    },
    {
      string: 6,
    },
  ],
};

export const A = Template.bind({});
A.args = {
  title: "C Major - A Shape",
  numberOfFrets: 4,
  startAtFret: 3,
  watermark: "Created with chord.love",
  notes: [
    {
      string: 1,
      muted: true,
    },
    {
      fret: 1,
      string: 2,
      text: "1",
    },
    {
      fret: 3,
      string: 3,
      bar: 3,
      text: "3",
    },
    {
      string: 6,
      muted: true,
    },
  ],
};

export const G = Template.bind({});
G.args = {
  title: "C Major - G Shape",
  numberOfFrets: 5,
  startAtFret: 5,
  watermark: "Created with chord.love",
  notes: [
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
  ],
};

export const E = Template.bind({});
E.args = {
  title: "C Major - E Shape",
  numberOfFrets: 4,
  startAtFret: 8,
  watermark: "Created with chord.love",
  notes: [
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
  ],
};

export const D = Template.bind({});
D.args = {
  title: "C Major - D Shape",
  numberOfFrets: 5,
  startAtFret: 10,
  watermark: "Created with chord.love",
  notes: [
    {
      fret: 3,
      string: 1,
      text: "2",
    },
    {
      string: 2,
      muted: true,
    },
    {
      fret: 1,
      string: 3,
      text: "1",
      color: "red",
    },
    {
      fret: 3,
      string: 4,
      text: "3",
    },
    {
      fret: 4,
      string: 5,
      text: "4",
      color: "red",
    },
    {
      string: 6,
      muted: true,
    },
  ],
};
