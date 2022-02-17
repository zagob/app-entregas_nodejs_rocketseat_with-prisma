/*
  Warnings:

  - You are about to drop the column `updated_at` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "updated_at",
ADD COLUMN     "end_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id_deliveryman" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "delivaryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
