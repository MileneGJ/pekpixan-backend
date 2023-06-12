import { Dogs } from "@prisma/client";
import * as dogRepository from "../repositories/dogRepository";
import { IUpdateDogBody } from "../types/dogTypes";
import { ParamsDictionary } from "express-serve-static-core";

export async function createNewDog(dog: Dogs) {
  dog.birth = new Date(dog.birth);
  return await dogRepository.insert(dog);
}

export async function deleteByDogId(params: ParamsDictionary) {
  const { id } = params;
  await dogRepository.deleteOne(Number(id));
}

export async function updateDogInfo(body: IUpdateDogBody) {
  const { id, dog } = body;
  return await dogRepository.updateOne(id, dog);
}

export async function getAllDogs() {
  return await dogRepository.findAll();
}

export async function findDogById(params: ParamsDictionary) {
  const { id } = params;
  return await dogRepository.findById(Number(id));
}
