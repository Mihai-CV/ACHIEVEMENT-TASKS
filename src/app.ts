import { FastifyPluginAsync } from "fastify";
import fastifyCors from "fastify-cors";
import { main_router } from "./routers/main_app";


export const main_app: FastifyPluginAsync = async (app) => {
  app.register(fastifyCors, {
    // put your options here
  });

  app.register(main_router);
};
