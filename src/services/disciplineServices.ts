import { Disciplines } from "@prisma/client";
import * as disciplineRepository from "../repositories/disciplineRepository";
import { ParamsDictionary } from "express-serve-static-core";
import {
  IUpdateDisciplineBody,
  DisciplineOutput,
} from "../types/disciplineTypes";

export async function createNewDiscipline(discipline: Disciplines) {
  return await disciplineRepository.insert(discipline);
}

export async function deleteByDisciplineId(params: ParamsDictionary) {
  const { id } = params;
  await disciplineRepository.deleteOne(Number(id));
}

export async function updateDisciplineInfo(body: IUpdateDisciplineBody) {
  const { id, discipline } = body;
  return await disciplineRepository.updateOne(id, discipline);
}

export async function getAllDisciplines() {
  const categoriesObj = await disciplineRepository.findAllCategories();
  let result: DisciplineOutput[] = [];
  for (let categoryObj of categoriesObj) {
    let disciplines = await disciplineRepository.findByCategory(
      categoryObj.category
    );
    result.push({ name: categoryObj.category, disciplines });
  }
  return result;
}

export async function findDisciplineById(params: ParamsDictionary) {
  const { id } = params;
  return await disciplineRepository.findById(Number(id));
}
