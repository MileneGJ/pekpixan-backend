import { Evaluations } from "@prisma/client";
import prisma from "../database/database";

export async function insert(evaluation: Evaluations) {
  return await prisma.evaluations.create({ data: evaluation });
}

export async function deleteOne(id: number) {
  await prisma.evaluations.delete({ where: { id } });
}

export async function updateOne(id: number, evaluation: Evaluations) {
  return await prisma.evaluations.update({ where: { id }, data: evaluation });
}

export async function findAll() {
  return await prisma.evaluations.findMany();
}

export async function findById(id: number) {
  return await prisma.evaluations.findUnique({ where: { id } });
}

export async function findByDate(date: Date) {
  return await prisma.evaluations.findMany({ where: { date } });
}

export async function findByDiscipline(disciplineId: number) {
  return await prisma.evaluations.groupBy({
    by: ["dogId"],
    where: { disciplineId },
    _avg: {
      grade: true,
    },
  });
}

export async function findByDog(dogId: number) {
  return await prisma.evaluations.groupBy({
    by: ["disciplineId"],
    where: { dogId },
    _avg: {
      grade: true,
    },
    orderBy: {
      _avg: {
        grade: "desc",
      },
    },
  });
}
