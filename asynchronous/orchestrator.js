const createTask = (name, mode) => {
  return new Promise((res) => {
    const startTime = Date.now();
    setTimeout(() => {
      const endTime = Date.now();
      res({ name, mode, startTime, endTime, diff: endTime - startTime });
    }, 1000);
  });
};

const orchestratorLogs = { "serial": [], "parallel": [] };

const serialTaskScheduler = async (task) => {
  await createTask(task, "serial").then((data) => {
    // console.log(data);
    orchestratorLogs["serial"].push(data);
  });
};

const parallelTaskScheduler = (tasks) =>
  Promise.all(tasks.split(",").map((t) => createTask(t, "parallel")))
    .then((data) => {
      // console.log(data);
      orchestratorLogs["parallel"].push(data);
    });

const scheduleTask = async (tasks) => {
  for (const task of tasks.split("\n")) {
    const schedulerToUse = task.includes(",")
      ? parallelTaskScheduler
      : serialTaskScheduler;

    await schedulerToUse(task);
  }
};

const main = async () => {
  const tasks = await Deno.readTextFile("./recipe.txt");
  await scheduleTask(tasks);
  console.log("Final Logs :- \n");
  console.log(orchestratorLogs);
};

main();
