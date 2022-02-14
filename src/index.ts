import "reflect-metadata";
import "express-async-errors"

import express from "express";
import { router } from "./routes";
import cors from "cors";
import { config } from 'dotenv'

config()

import "./database";

import { ErrorHandlerMiddleware } from "./middlewares/ErrorHandlerMiddleware";

import { Request, Response, NextFunction } from "express";


const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(ErrorHandlerMiddleware)

app.listen(4000, () => console.log("Rodando servidor na porta 4000"));
