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
    FOREIGN KEY ("userInfoId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("watchingId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("category", "content", "id", "make", "model", "subCategory", "title", "userInfoId", "views", "year") SELECT "category", "content", "id", "make", "model", "subCategory", "title", "userInfoId", "views", "year" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
