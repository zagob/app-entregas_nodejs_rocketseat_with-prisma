/*
  Warnings:

  - You are about to drop the `Deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Deliveryman";

-- CreateTable
CREATE TABLE "delivaryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "delivaryman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "delivaryman_username_key" ON "delivaryman"("username");
