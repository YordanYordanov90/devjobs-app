/*
  Warnings:

  - You are about to drop the column `userId` on the `JobListing` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_userId_fkey";

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "userId",
ALTER COLUMN "postedAt" DROP DEFAULT,
ALTER COLUMN "postedAt" SET DATA TYPE TEXT;
