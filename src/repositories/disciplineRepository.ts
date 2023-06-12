import { Disciplines } from "@prisma/client";
import prisma from "../database/database";

export async function insert(discipline: Disciplines) {
  return await prisma.disciplines.create({ data: discipline });
}

export async function deleteOne(id: number) {
  await prisma.disciplines.delete({ where: { id } });
}

export async function updateOne(id: number, discipline: Disciplines) {
  return await prisma.disciplines.update({ where: { id }, data: discipline });
}

export async function findAllCategories() {
  return await prisma.disciplines.findMany({
    distinct: ["category"],
    select: {
      category: true,
    },
  });
}

export async function findById(id: number) {
  return await prisma.disciplines.findUnique({ where: { id } });
}

export async function findByCategory(category: string) {
  return await prisma.disciplines.findMany({ where: { category } });
}
