import * as dogServices from "../services/dogServices";
import { Request, Response } from "express";

export async function postNewDog(req: Request, res: Response) {
  const response = await dogServices.createNewDog(req.body);
  res.status(202).send(response);
}

export async function deleteByDogId(req: Request, res: Response) {
  await dogServices.deleteByDogId(req.params);
  res.status(204).send("Dog info successfully deleted");
}

export async function updateDogInfo(req: Request, res: Response) {
  const response = await dogServices.updateDogInfo(req.body);
  res.status(200).send(response);
}

export async function getAllDogs(_: Request, res: Response) {
  const response = await dogServices.getAllDogs();
  res.status(200).send(response);
}

export async function getDogById(req: Request, res: Response) {
  const dog = await dogServices.findDogById(req.params);
  res.status(200).send(dog);
}
