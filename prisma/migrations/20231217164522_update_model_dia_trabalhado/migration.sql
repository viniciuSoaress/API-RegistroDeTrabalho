-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_diaTrabalhado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idFuncionario" INTEGER NOT NULL,
    "idDiaDaSemana" INTEGER NOT NULL,
    "dayNow" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "diaTrabalhado_idFuncionario_fkey" FOREIGN KEY ("idFuncionario") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "diaTrabalhado_idDiaDaSemana_fkey" FOREIGN KEY ("idDiaDaSemana") REFERENCES "diaDaSemana" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_diaTrabalhado" ("id", "idDiaDaSemana", "idFuncionario") SELECT "id", "idDiaDaSemana", "idFuncionario" FROM "diaTrabalhado";
DROP TABLE "diaTrabalhado";
ALTER TABLE "new_diaTrabalhado" RENAME TO "diaTrabalhado";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
