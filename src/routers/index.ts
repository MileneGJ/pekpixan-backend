import { Router } from "express";
import dogRouter from "./dogsRouter";
import evaluationRouter from "./evaluationRouter";
import disciplineRouter from "./disciplinesRouter";

const router = Router();
router.use("/dogs", dogRouter);
router.use("/evaluations", evaluationRouter);
router.use("/disciplines", disciplineRouter);

export default router;
