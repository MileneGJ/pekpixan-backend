import { Router } from "express";
import * as evaluationController from "../controllers/evaluationController";

const evaluationRouter = Router();

evaluationRouter.post("/", evaluationController.postNewEvaluation);
evaluationRouter.get("/dog/:dogId", evaluationController.getEvaluationByDog);
evaluationRouter.get("/:id", evaluationController.getEvaluationById);
evaluationRouter.put("/", evaluationController.updateEvaluationInfo);
evaluationRouter.delete("/:id", evaluationController.deleteByEvaluationId);

export default evaluationRouter;
