import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductAndOrderUpdate1728536055323 implements MigrationInterface {
    name = 'ProductAndOrderUpdate1728536055323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD "isOrderConfirmed" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP COLUMN "isOrderConfirmed"`);
    }

}
