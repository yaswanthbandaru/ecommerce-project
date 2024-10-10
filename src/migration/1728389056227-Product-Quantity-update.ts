import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductQuantityUpdate1728389056227 implements MigrationInterface {
    name = 'ProductQuantityUpdate1728389056227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" ADD "availableQuantity" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" DROP COLUMN "availableQuantity"`);
    }

}
