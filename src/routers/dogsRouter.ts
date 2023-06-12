import { Router } from "express";
import * as dogController from "../controllers/dogsController";

const dogRouter = Router();

dogRouter.post("/", dogController.postNewDog);
dogRouter.get("/", dogController.getAllDogs);
dogRouter.get("/:id", dogController.getDogById);
dogRouter.put("/", dogController.updateDogInfo);
dogRouter.delete("/:id", dogController.deleteByDogId);

export default dogRouter;
