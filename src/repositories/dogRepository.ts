import { Dogs } from "@prisma/client";
import prisma from "../database/database";

export async function insert(dog: Dogs) {
  return await prisma.dogs.create({ data: dog });
}

export async function deleteOne(id: number) {
  await prisma.dogs.delete({ where: { id } });
}

export async function updateOne(id: number, dog: Dogs) {
  return await prisma.dogs.update({ where: { id }, data: dog });
}

export async function findAll() {
  return await prisma.dogs.findMany();
}

export async function findById(id: number) {
  return await prisma.dogs.findUnique({ where: { id } });
}
