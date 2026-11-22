import React from "react";
import { Composition } from "remotion";
import {
  TutorialComposition,
  TOTAL_DURATION,
} from "./TutorialComposition";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="TutorialZuxo16x9"
        component={TutorialComposition}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ isVertical: false }}
      />
      <Composition
        id="TutorialZuxo9x16"
        component={TutorialComposition}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ isVertical: true }}
      />
    </>
  );
};

