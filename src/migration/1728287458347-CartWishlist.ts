import { MigrationInterface, QueryRunner } from "typeorm";

export class CartWishlist1728287458347 implements MigrationInterface {
    name = 'CartWishlist1728287458347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_ecp"."cart" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "modified_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."cart" DROP COLUMN "description"`);
        await queryRunner.query(`DROP TABLE "app_ecp"."cart"`);
    }

}
