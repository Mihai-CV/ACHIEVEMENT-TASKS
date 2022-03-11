import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { User } from "../models/User.model";

type Myrequest = FastifyRequest<{
  Body: {user_id: string};
}>;

export const user_router: FastifyPluginAsync = async (app) => {
  app.get('/', async () => {
    const users = await User.find().lean();
    return users;
  });

  app.post("/", async (request: Myrequest, reply: FastifyReply) => {
    const { user_id } = request.body;
    const user = new User( {user_id: user_id} );
    await user.save();
    return user;
  });
};
