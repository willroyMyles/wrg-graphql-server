/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "locked" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo.email_unique" ON "UserInfo"("email");
