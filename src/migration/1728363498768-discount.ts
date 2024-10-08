import { MigrationInterface, QueryRunner } from "typeorm";

export class Discount1728363498768 implements MigrationInterface {
    name = 'Discount1728363498768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_ecp"."discount" ("id" SERIAL NOT NULL, "description" character varying, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "modified_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_d05d8712e429673e459e7f1cddb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" DROP COLUMN "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" ADD "description" character varying`);
        await queryRunner.query(`DROP TABLE "app_ecp"."discount"`);
    }

}
