/*
  Warnings:

  - Added the required column `recieverId` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "content" TEXT,
    "category" TEXT,
    "subCategory" TEXT,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER DEFAULT 1000,
    "views" INTEGER DEFAULT 0,
    "userInfoId" TEXT,
    "watchingId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("userInfoId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("watchingId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("category", "content", "id", "make", "model", "subCategory", "title", "userInfoId", "views", "watchingId", "year") SELECT "category", "content", "id", "make", "model", "subCategory", "title", "userInfoId", "views", "watchingId", "year" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "sender" TEXT,
    "conversationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Messages" ("content", "conversationId", "id", "sender") SELECT "content", "conversationId", "id", "sender" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
CREATE TABLE "new_Conversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "userInfoId" TEXT,
    "commentId" TEXT,
    "postId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "recieverId" TEXT NOT NULL,
    FOREIGN KEY ("recieverId") REFERENCES "UserInfo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("senderId") REFERENCES "UserInfo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Conversation" ("commentId", "id", "locked", "postId", "userInfoId") SELECT "commentId", "id", "locked", "postId", "userInfoId" FROM "Conversation";
DROP TABLE "Conversation";
ALTER TABLE "new_Conversation" RENAME TO "Conversation";
CREATE UNIQUE INDEX "Conversation_commentId_unique" ON "Conversation"("commentId");
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "isOffer" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT,
    "title" TEXT,
    "userId" TEXT,
    "userImageUrl" TEXT,
    "username" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("content", "id", "isOffer", "postId", "title", "userId", "userImageUrl", "username") SELECT "content", "id", "isOffer", "postId", "title", "userId", "userImageUrl", "username" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_UserInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT,
    "userImageUrl" TEXT,
    "userId" TEXT,
    "email" TEXT,
    "alias" TEXT,
    "postId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_UserInfo" ("alias", "email", "id", "postId", "userId", "userImageUrl", "username") SELECT "alias", "email", "id", "postId", "userId", "userImageUrl", "username" FROM "UserInfo";
DROP TABLE "UserInfo";
ALTER TABLE "new_UserInfo" RENAME TO "UserInfo";
CREATE UNIQUE INDEX "UserInfo.email_unique" ON "UserInfo"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
