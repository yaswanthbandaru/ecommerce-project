import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderUpdated1728372637663 implements MigrationInterface {
    name = 'OrderUpdated1728372637663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD "isCompleted" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD "isPaymentSuccessful" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD "paymentType" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP COLUMN "paymentType"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP COLUMN "isPaymentSuccessful"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP COLUMN "isCompleted"`);
    }

}
