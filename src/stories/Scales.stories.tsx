import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChordSVG from "../lib";

export default {
  title: "Scales",
  component: ChordSVG,
} as ComponentMeta<typeof ChordSVG>;

const Template: ComponentStory<typeof ChordSVG> = (args) => (
  <ChordSVG {...args} />
);

export const MajorP1 = Template.bind({});
MajorP1.args = {
  title: "Major P1",
  numberOfFrets: 4,
  notes: [
    {
      string: 1,
      fret: 2,
      color: "red",
      text: "2",
    },
    {
      string: 1,
      fret: 4,
      text: "4",
    },
    {
      string: 2,
      fret: 1,
      text: "1",
    },
    {
      string: 2,
      fret: 2,
      text: "2",
    },
    {
      string: 2,
      fret: 4,
      text: "4",
    },
    {
      string: 3,
      fret: 1,
      text: "1",
    },
    {
      string: 3,
      fret: 3,
      text: "3",
    },
    {
      string: 3,
      fret: 4,
      color: "red",
      text: "4",
    },
    {
      string: 4,
      fret: 1,
      text: "1",
    },
    {
      string: 4,
      fret: 3,
      text: "3",
    },
    {
      string: 4,
      fret: 4,
      text: "4",
    },
    {
      string: 5,
      fret: 2,
      text: "2",
    },
    {
      string: 5,
      fret: 4,
      text: "4",
    },
    {
      string: 6,
      fret: 1,
      text: "1",
    },
    {
      string: 6,
      fret: 2,
      color: "red",
      text: "2",
    },
    {
      string: 6,
      fret: 4,
      text: "4",
    },
  ],
};
