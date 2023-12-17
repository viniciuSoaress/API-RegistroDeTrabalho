-- CreateTable
CREATE TABLE "funcionario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "diaDaSemana" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dia" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "diaTrabalhado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idFuncionario" INTEGER NOT NULL,
    "idDiaDaSemana" INTEGER NOT NULL,
    CONSTRAINT "diaTrabalhado_idFuncionario_fkey" FOREIGN KEY ("idFuncionario") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "diaTrabalhado_idDiaDaSemana_fkey" FOREIGN KEY ("idDiaDaSemana") REFERENCES "diaDaSemana" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_id_key" ON "funcionario"("id");
