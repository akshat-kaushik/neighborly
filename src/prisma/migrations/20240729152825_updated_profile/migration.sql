/*
  Warnings:

  - You are about to drop the column `skills` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `Age` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `City` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Country` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "skills",
ADD COLUMN     "Age" INTEGER NOT NULL,
ADD COLUMN     "City" TEXT NOT NULL,
ADD COLUMN     "Country" TEXT NOT NULL;
