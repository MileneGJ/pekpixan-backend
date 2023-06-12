import { Router } from "express";
import * as disciplineController from "../controllers/disciplinesController";

const disciplineRouter = Router();

disciplineRouter.post("/", disciplineController.postNewDiscipline);
disciplineRouter.get("/", disciplineController.getAllDisciplines);
disciplineRouter.get("/:id", disciplineController.getDisciplineById);
disciplineRouter.put("/", disciplineController.updateDisciplineInfo);
disciplineRouter.delete("/:id", disciplineController.deleteByDisciplineId);

export default disciplineRouter;
