/*
  Warnings:

  - You are about to drop the column `BigImg` on the `Stream` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stream" DROP COLUMN "BigImg",
ADD COLUMN     "bigImg" TEXT NOT NULL DEFAULT '';
