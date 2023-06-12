import { Dogs } from "@prisma/client";

export interface IUpdateDogBody {
  id: number;
  dog: Dogs;
}
