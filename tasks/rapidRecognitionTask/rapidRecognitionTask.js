import { createRapidRecognitionRound, isCorrectSelection } 
  from "./rapidRecognitionLogic.js";
import { delay } from "../../core/timer.js";
import { WORD_IMAGE_MAP } from "../../data/wordImageMap.js";

export function rapidRecognitionTask() {
  let state = "idle";
  let currentRound = null;
  let context = null;

  const DISPLAY_TIME = 900;

  async function start(taskContext) {
    context = taskContext;
    await nextRound();
  }

  async function nextRound() {
    currentRound = createRapidRecognitionRound(WORD_IMAGE_MAP);

    state = "showWord";
    context.showWord(currentRound.correctWord);

    await delay(DISPLAY_TIME);

    state = "chooseImage";
    context.showImages(
      currentRound.correctImage,
      currentRound.distractorImage
    );
  }

  async function handleInput(selectedImage) {
    if (state === "chooseImage") {
      if (isCorrectSelection(selectedImage, currentRound)) {
        await nextRound();
      } else {
        await handleWrongAnswer();
      }
    }

    if (state === "errorRecovery") {
      if (isCorrectSelection(selectedImage, currentRound)) {
        await nextRound();
      }
    }
  }

  async function handleWrongAnswer() {
    state = "errorRecovery";

    context.flashRed();
    await delay(500);

    context.showWordAndImages(
      currentRound.correctWord,
      currentRound.correctImage,
      currentRound.distractorImage
    );
  }

  function cleanup() {
    state = "idle";
  }

  return {
    id: "rapid",
    start,
    handleInput,
    cleanup
  };
}

