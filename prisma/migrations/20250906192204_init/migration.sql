-- CreateTable
CREATE TABLE "public"."Filme" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ano_lancamento" INTEGER NOT NULL,
    "sinopse" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Ator" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Genero" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_FilmesGeneros" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FilmesGeneros_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_FilmesAtores" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FilmesAtores_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genero_nome_key" ON "public"."Genero"("nome");

-- CreateIndex
CREATE INDEX "_FilmesGeneros_B_index" ON "public"."_FilmesGeneros"("B");

-- CreateIndex
CREATE INDEX "_FilmesAtores_B_index" ON "public"."_FilmesAtores"("B");

-- AddForeignKey
ALTER TABLE "public"."_FilmesGeneros" ADD CONSTRAINT "_FilmesGeneros_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FilmesGeneros" ADD CONSTRAINT "_FilmesGeneros_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Genero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FilmesAtores" ADD CONSTRAINT "_FilmesAtores_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Ator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_FilmesAtores" ADD CONSTRAINT "_FilmesAtores_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Filme"("id") ON DELETE CASCADE ON UPDATE CASCADE;
