const createTask = (name, delay, mode) => {
  return new Promise((res) => {
    const startTime = Date.now();
    setTimeout(() => {
      const endTime = Date.now();
      res({ name, mode, startTime, endTime, duration: endTime - startTime });
    }, delay);
  });
};

const orchestratorLogs = { "serial": [], "parallel": [] };

const getScheduledTime = (task) => {
  const startIdnex = task.indexOf("[") + 1;
  const endIdnex = task.indexOf("]");
  return task.slice(startIdnex, endIdnex);
};

const serialTaskScheduler = (task) => {
  const scheduledTime = getScheduledTime(task);

  return createTask(task, scheduledTime, "serial").then((data) => {
    // console.log(data);
    orchestratorLogs["serial"].push(data);
  });
};

const parallelTaskScheduler = (tasks, delimeter) => {
  const eachTasks = tasks.split(delimeter).map((t) =>
    createTask(t, getScheduledTime(t), "parallel")
  );

  return Promise.all(eachTasks).then((data) => {
    // console.log(data);
    orchestratorLogs["parallel"].push(data);
  });
};

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
