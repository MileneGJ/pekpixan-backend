import { Disciplines } from "@prisma/client";

export interface IUpdateDisciplineBody {
  id: number;
  discipline: Disciplines;
}

export type DisciplineOutput = {
  name: string;
  disciplines: Disciplines[];
};
