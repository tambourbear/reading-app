import { highlightTask } from "../tasks/highlightTask/highlightTask.js";
import { rapidRecognitionTask } from "../tasks/rapidRecognitionTask/rapidRecognitionTask.js";

export const TASK_REGISTRY = {
  highlight: highlightTask,
  rapid: rapidRecognitionTask
};

