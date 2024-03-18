import express from "express";
import { checkConnection } from "../controller/connection-controller.js"

const Router = express.Router();

// Check Connnection
Router.get("/", checkConnection);



export default Router;