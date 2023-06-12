import { Disciplines, Evaluations } from "@prisma/client";
import * as evaluationRepository from "../repositories/evaluationRepository";
import * as disciplineServices from "./disciplineServices";
import { ParamsDictionary } from "express-serve-static-core";
import { IUpdateEvaluationBody } from "../types/evaluationTypes";
import { ParsedQs } from "qs";

export async function createNewEvaluation(evaluation: Evaluations) {
  evaluation.date = new Date(evaluation.date);
  evaluation.dogId = Number(evaluation.dogId);
  evaluation.disciplineId = Number(evaluation.disciplineId);
  let grade = 0;
  for (let rec of evaluation.record) {
    if (rec) {
      grade++;
    }
  }
  grade = (grade * 100) / evaluation.record.length;
  return await evaluationRepository.insert({ ...evaluation, grade });
}

export async function deleteByEvaluationId(params: ParamsDictionary) {
  const { id } = params;
  await evaluationRepository.deleteOne(Number(id));
}

export async function updateEvaluationInfo(body: IUpdateEvaluationBody) {
  const { id, evaluation } = body;
  return await evaluationRepository.updateOne(id, evaluation);
}

export async function findEvaluationById(params: ParamsDictionary) {
  const { id } = params;
  return await evaluationRepository.findById(Number(id));
}

export async function getBySearchParams(query: ParsedQs) {
  const { dog, discipline, evalDate } = query;
  if (dog) {
    return await evaluationRepository.findByDog(Number(dog));
  }
  if (discipline) {
    return await evaluationRepository.findByDiscipline(Number(discipline));
  }
  if (evalDate) {
    return await evaluationRepository.findByDate(new Date(evalDate.toString()));
  }
}

export async function getFormattedEvaluationsByDog(params: ParamsDictionary) {
  const { dogId } = params;
  const evaluations = await evaluationRepository.findByDog(Number(dogId));
  let result: any = [];
  for (let evaluation of evaluations) {
    const discipline = await disciplineServices.findDisciplineById({
      id: evaluation.disciplineId.toString(),
    });
    result.push({ ...evaluation, disciplineName: discipline?.name });
  }
  return result;
}
