import { conectDB } from '../lib/db';
import { Task } from '../models/Task.model';


(async () => {
  const { close } = await conectDB();
  try {
    await Task.collection.drop();
  } catch (error) {
    console.log('There are no tasks to drop from db');
  }

  const taskSeed = [{ task1: 5 }, { task2: 5 }, { task3: 10 }, { task4: 20 }];

  await Promise.all(taskSeed.map(async (t) => {
    await Task.create({ description: Object.keys(t)[0], achievement: Object.values(t)[0] }).then((e) => console.log(`🗒 Create Task ${e.description}`));
  }));

  await close();
})();
