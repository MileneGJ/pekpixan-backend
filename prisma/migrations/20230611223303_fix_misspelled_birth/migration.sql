/*
  Warnings:

  - You are about to drop the column `bith` on the `Dogs` table. All the data in the column will be lost.
  - Added the required column `birth` to the `Dogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dogs" DROP COLUMN "bith",
ADD COLUMN     "birth" TIMESTAMP(3) NOT NULL;
