import { FastifyPluginAsync } from "fastify";
import fastifyCors from "fastify-cors";
import { conectDB } from "./lib/db";
import { main_router } from "./routers/main_app";
import { tasks_router } from "./routers/tasks_router";
import { user_router } from "./routers/user_router";
import fastifyAuth0 from 'fastify-auth0-verify';
import blipp from 'fastify-blipp';
import { AUTH0 } from './config';

export const main_app: FastifyPluginAsync = async (app) => {
  conectDB();
  await app.register(blipp);
   app.register(fastifyCors, {
    // put your options here
  });

  await app.register(fastifyAuth0, {
    domain: AUTH0.DOMAIN,
    audience: AUTH0.AUDIENCE,
  });

  app.get('/verify', {
    handler(request, reply) {
      reply.send(request.user);
    },
    preValidation: app.authenticate,
  });

  app.register(main_router);
  app.register(tasks_router, { prefix: '/tasks' });
  app.register(user_router, { prefix: '/users' });
};
