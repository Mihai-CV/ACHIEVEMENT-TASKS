import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { Task } from '../models/Task.model';

type Myrequest = FastifyRequest<{
    Body: {description: string, achievement: number, done?: boolean, scoreTotal?: number, user_id: string};
    Params: {id: string};
  }>

export const tasks_router: FastifyPluginAsync = async (app) => {
    app.get('/', async () => {
      const tasks = await Task.find().lean();
      return tasks;
    });
    
    app.get('/:user_id', async (request: any, reply: FastifyReply) => {
      const { user_id } = request.query;
      const tasks = await Task.find({user_id: user_id}).lean();
      return tasks;
    });

    app.post('/', async (request: Myrequest, reply: FastifyReply) => {
      const { description, achievement, user_id } = request.body;
      const task = new Task({ description, achievement, user_id });
      await task.save();
      return task;
    });

    app.put('/:id/update', async (request: Myrequest, reply: FastifyReply) => {
      const { done, scoreTotal } = request.body;
      const task = await Task.findByIdAndUpdate(request.params.id, {done, scoreTotal}, {new: true})
      return task;
    });
    
    app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
      const { id } = request.params;
      await Task.findByIdAndDelete(id);
      return { status: 'delete' };
    });
  };
  