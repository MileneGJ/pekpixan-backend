-- CreateTable
CREATE TABLE "Dogs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "behavior" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT[],

    CONSTRAINT "Disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evaluations" (
    "id" SERIAL NOT NULL,
    "record" BOOLEAN[],
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "media" TEXT NOT NULL,
    "dogId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "Evaluations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dogs_name_key" ON "Dogs"("name");

-- AddForeignKey
ALTER TABLE "Evaluations" ADD CONSTRAINT "Evaluations_dogId_fkey" FOREIGN KEY ("dogId") REFERENCES "Dogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluations" ADD CONSTRAINT "Evaluations_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "Disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
