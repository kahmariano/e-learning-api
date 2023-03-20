-- CreateTable
CREATE TABLE "classes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "numberClasses" INTEGER NOT NULL,
    "time" REAL NOT NULL,
    "video" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "idCategory" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
