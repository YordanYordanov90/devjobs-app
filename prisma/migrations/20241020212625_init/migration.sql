/*
  Warnings:

  - You are about to drop the column `userId` on the `JobListing` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_userId_fkey";

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ALTER COLUMN "email" SET NOT NULL;
