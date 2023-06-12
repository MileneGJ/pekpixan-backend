/*
  Warnings:

  - You are about to drop the column `age` on the `Dogs` table. All the data in the column will be lost.
  - Added the required column `bith` to the `Dogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dogs" DROP COLUMN "age",
ADD COLUMN     "bith" TIMESTAMP(3) NOT NULL;
