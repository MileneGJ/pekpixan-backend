import * as disciplineServices from "../services/disciplineServices";
import { Request, Response } from "express";

export async function postNewDiscipline(req: Request, res: Response) {
  const result = await disciplineServices.createNewDiscipline(req.body);
  res.status(202).send(result);
}

export async function deleteByDisciplineId(req: Request, res: Response) {
  await disciplineServices.deleteByDisciplineId(req.params);
  res.status(204).send("Discipline info successfully deleted");
}

export async function updateDisciplineInfo(req: Request, res: Response) {
  const response = await disciplineServices.updateDisciplineInfo(req.body);
  res.status(200).send(response);
}

export async function getAllDisciplines(_: Request, res: Response) {
  const response = await disciplineServices.getAllDisciplines();
  res.status(200).send(response);
}

export async function getDisciplineById(req: Request, res: Response) {
  const discipline = await disciplineServices.findDisciplineById(req.params);
  res.status(200).send(discipline);
}
