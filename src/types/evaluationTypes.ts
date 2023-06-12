import { Evaluations } from "@prisma/client";

export interface IUpdateEvaluationBody {
  id: number;
  evaluation: Evaluations;
}
