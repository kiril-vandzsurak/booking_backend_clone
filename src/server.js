import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import mongoose from "mongoose";
import usersRouter from "./api/user/index.js";
import {
  badRequestHandler,
  unauthorizedErrorHandler,
  notFoundHandler,
  forbiddenErrorHandler,
  genericErrorHandler,
} from "./errorHandlers.js";

const server = express();
const port = process.env.PORT || 3001;

server.use(cors());
server.use(express.json());

server.use("/users", usersRouter);

server.use(badRequestHandler);
server.use(unauthorizedErrorHandler);
server.use(notFoundHandler);
server.use(forbiddenErrorHandler);
server.use(genericErrorHandler);

mongoose.connect(process.env.MONGO_KEY);

mongoose.connection.on("connected", () => {
  console.log("Connected!!!!");
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`Server is running on port ${port}`);
  });
});
