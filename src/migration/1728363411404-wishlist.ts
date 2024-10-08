import { MigrationInterface, QueryRunner } from "typeorm";

export class Wishlist1728363411404 implements MigrationInterface {
    name = 'Wishlist1728363411404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_ecp"."wishlist" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "modified_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_620bff4a240d66c357b5d820eaa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" ADD "description" character varying`);
        await queryRunner.query(`DROP TABLE "app_ecp"."wishlist"`);
    }

}
