-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_classesUsers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "classroomId" INTEGER NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    CONSTRAINT "classesUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "classesUsers_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "classes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_classesUsers" ("classroomId", "createAt", "id", "updateAt", "userId") SELECT "classroomId", "createAt", "id", "updateAt", "userId" FROM "classesUsers";
DROP TABLE "classesUsers";
ALTER TABLE "new_classesUsers" RENAME TO "classesUsers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
