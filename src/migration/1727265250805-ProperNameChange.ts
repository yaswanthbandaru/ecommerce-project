import { MigrationInterface, QueryRunner } from "typeorm";

export class ProperNameChange1727265250805 implements MigrationInterface {
    name = 'ProperNameChange1727265250805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP CONSTRAINT "FK_92bb963a31edbbc5fc5e53ce87f"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP CONSTRAINT "FK_06de9b4d54cfcc0a046e7542517"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP CONSTRAINT "FK_73056175b1a451dabc71361f737"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" DROP CONSTRAINT "FK_d4764a4b4bfd1662ea5341f9607"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" RENAME COLUMN "customerIdId" TO "customerId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" RENAME COLUMN "supplierIdId" TO "supplierId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP COLUMN "orderIdId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP COLUMN "productIdId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "app_ecp"."customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "app_ecp"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "app_ecp"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" ADD CONSTRAINT "FK_4346e4adb741e80f3711ee09ba4" FOREIGN KEY ("supplierId") REFERENCES "app_ecp"."supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" DROP CONSTRAINT "FK_4346e4adb741e80f3711ee09ba4"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD "productIdId" integer`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD "orderIdId" integer`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" RENAME COLUMN "supplierId" TO "supplierIdId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" RENAME COLUMN "customerId" TO "customerIdId"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" ADD CONSTRAINT "FK_d4764a4b4bfd1662ea5341f9607" FOREIGN KEY ("supplierIdId") REFERENCES "app_ecp"."supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD CONSTRAINT "FK_73056175b1a451dabc71361f737" FOREIGN KEY ("productIdId") REFERENCES "app_ecp"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD CONSTRAINT "FK_06de9b4d54cfcc0a046e7542517" FOREIGN KEY ("orderIdId") REFERENCES "app_ecp"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD CONSTRAINT "FK_92bb963a31edbbc5fc5e53ce87f" FOREIGN KEY ("customerIdId") REFERENCES "app_ecp"."customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
