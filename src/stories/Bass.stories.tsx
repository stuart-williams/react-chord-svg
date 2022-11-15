import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChordSVG from "../lib";

export default {
  title: "Bass",
  component: ChordSVG,
} as ComponentMeta<typeof ChordSVG>;

const Template: ComponentStory<typeof ChordSVG> = (args) => (
  <ChordSVG {...args} />
);

export const C4String = Template.bind({});
C4String.args = {
  title: "C Major",
  numberOfFrets: 4,
  numberOfStrings: 4,
  watermark: "created with www.chord.love",
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
  ],
};

export const C5String = Template.bind({});
C5String.args = {
  title: "C Major",
  numberOfFrets: 4,
  numberOfStrings: 5,
  watermark: "created with www.chord.love",
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
      string: 5,
      fret: 1,
      color: "red",
      text: "1",
    },
  ],
};
