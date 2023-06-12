import * as evaluationServices from "../services/evaluationServices";
import { Request, Response } from "express";

export async function postNewEvaluation(req: Request, res: Response) {
  const result = await evaluationServices.createNewEvaluation(req.body);
  res.status(202).send(result);
}

export async function deleteByEvaluationId(req: Request, res: Response) {
  await evaluationServices.deleteByEvaluationId(req.params);
  res.status(204).send("evaluation info successfully deleted");
}

export async function updateEvaluationInfo(req: Request, res: Response) {
  const response = await evaluationServices.updateEvaluationInfo(req.body);
  res.status(200).send(response);
}

export async function getEvaluationById(req: Request, res: Response) {
  const evaluation = await evaluationServices.findEvaluationById(req.params);
  res.status(200).send(evaluation);
}

export async function getEvaluationByQuery(req: Request, res: Response) {
  const response = await evaluationServices.getBySearchParams(req.query);
  res.status(200).send(response);
}

export async function getEvaluationByDog(req: Request, res: Response) {
  const response = await evaluationServices.getFormattedEvaluationsByDog(
    req.params
  );
  res.status(200).send(response);
}
