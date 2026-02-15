import { describe, it, expect } from "vitest";
import { createRapidRecognitionRound, isCorrectSelection } from "./rapidRecognitionLogic.js";

describe("Rapid Recognition Logic", () => {
  const mockMap = {
    "Hund": "🐕",
    "Katze": "🐈"
  };

  it("creates round with different distractor", () => {
    const round = createRapidRecognitionRound(mockMap);
    expect(round.correctImage).not.toBe(round.distractorImage);
  });

  it("detects correct selection", () => {
    const round = {
      correctImage: "🐕"
    };
    expect(isCorrectSelection("🐕", round)).toBe(true);
    expect(isCorrectSelection("🐈", round)).toBe(false);
  });
});

