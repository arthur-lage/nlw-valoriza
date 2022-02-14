import "reflect-metadata"
import express from "express";
import { router } from "./routes";
import cors from 'cors'

import "./database"

const app = express();
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000, () => console.log("Rodando servidor na porta 4000"));