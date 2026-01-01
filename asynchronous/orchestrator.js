const createTask = (name, mode) => {
  return new Promise((res) => {
    const startTime = Date.now();
    setTimeout(() => {
      const endTime = Date.now();
      res({ name, mode, startTime, endTime, duration: endTime - startTime });
    }, 100);
  });
};

const orchestratorLogs = { "serial": [], "parallel": [] };

const serialTaskScheduler = (task) =>
  createTask(task, "serial").then((data) => {
    // console.log(data);
    orchestratorLogs["serial"].push(data);
  });

const parallelTaskScheduler = (tasks, delimeter) =>
  Promise.all(tasks.split(delimeter).map((t) => createTask(t, "parallel")))
    .then((data) => {
      // console.log(data);
      orchestratorLogs["parallel"].push(data);
    });

const scheduleTask = async (tasks, delimeter) => {
  for (const task of tasks.split("\n")) {
    const schedulerToUse = task.includes(delimeter)
      ? () => parallelTaskScheduler(task, delimeter)
      : () => serialTaskScheduler(task);

    await schedulerToUse();
  }
};

const main = async () => {
  const tasks = await Deno.readTextFile("./recipe.txt");
  const delimeter = ",";
  await scheduleTask(tasks, delimeter);
  console.log("Final Logs :- \n");
  console.log(orchestratorLogs);
};

main();
