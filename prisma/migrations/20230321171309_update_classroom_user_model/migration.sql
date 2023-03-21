/*
  Warnings:

  - You are about to drop the column `classrooomId` on the `classesUsers` table. All the data in the column will be lost.
  - Added the required column `classroomId` to the `classesUsers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classesUsers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "classroomId" INTEGER NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_classesUsers" ("createAt", "id", "updateAt", "userId") SELECT "createAt", "id", "updateAt", "userId" FROM "classesUsers";
DROP TABLE "classesUsers";
ALTER TABLE "new_classesUsers" RENAME TO "classesUsers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
