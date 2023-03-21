/*
  Warnings:

  - You are about to drop the column `idCategory` on the `classes` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "numberClasses" INTEGER NOT NULL,
    "time" REAL NOT NULL,
    "video" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "classes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_classes" ("createdAt", "description", "id", "numberClasses", "time", "title", "updatedAt", "video") SELECT "createdAt", "description", "id", "numberClasses", "time", "title", "updatedAt", "video" FROM "classes";
DROP TABLE "classes";
ALTER TABLE "new_classes" RENAME TO "classes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
