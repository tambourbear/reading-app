import { randomItem, randomItemExcept } from "../../core/random.js";

export function createRapidRecognitionRound(wordImageMap) {
  const words = Object.keys(wordImageMap);
  const correctWord = randomItem(words);
  const distractorWord = randomItemExcept(words, correctWord);

  return {
    correctWord,
    correctImage: wordImageMap[correctWord],
    distractorImage: wordImageMap[distractorWord]
  };
}

export function isCorrectSelection(selectedImage, round) {
  return selectedImage === round.correctImage;
}

