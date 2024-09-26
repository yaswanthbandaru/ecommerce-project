import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomerUpdate1727347898459 implements MigrationInterface {
    name = 'CustomerUpdate1727347898459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" ADD "loyaltyPoints" integer`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" ADD "lastPurchaseDate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" DROP COLUMN "lastPurchaseDate"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" DROP COLUMN "loyaltyPoints"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."customer" DROP COLUMN "email"`);
    }

}
