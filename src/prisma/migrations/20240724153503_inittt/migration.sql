/*
  Warnings:

  - You are about to drop the column `FirstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `LastName` on the `User` table. All the data in the column will be lost.
  - Added the required column `FirstName` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `LastName` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "FirstName" TEXT NOT NULL,
ADD COLUMN     "LastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "FirstName",
DROP COLUMN "LastName";
