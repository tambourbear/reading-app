export function createTaskEngine(taskRegistry) {
  let currentTask = null;

  function start(taskId, context) {
    if (!taskRegistry[taskId]) {
      throw new Error(`Task ${taskId} not found`);
    }

    if (currentTask?.cleanup) {
      currentTask.cleanup();
    }

    currentTask = taskRegistry[taskId];
    currentTask.start(context);
  }

  function handleInput(input) {
    if (currentTask?.handleInput) {
      currentTask.handleInput(input);
    }
  }

  return {
    start,
    handleInput
  };
}

