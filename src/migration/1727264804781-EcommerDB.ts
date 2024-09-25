import { MigrationInterface, QueryRunner } from "typeorm";

export class EcommerDB1727264804781 implements MigrationInterface {
    name = 'EcommerDB1727264804781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_ecp"."customer" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying, "phone" character varying NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_ecp"."order" ("id" SERIAL NOT NULL, "orderDate" TIMESTAMP NOT NULL, "totalAmount" numeric(12,2) NOT NULL, "customerIdId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_ecp"."order_item" ("id" SERIAL NOT NULL, "unitPrice" numeric(12,2) NOT NULL, "quantity" integer NOT NULL, "orderIdId" integer, "productIdId" integer, CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_ecp"."product" ("id" SERIAL NOT NULL, "productName" character varying NOT NULL, "unitPrice" numeric(12,2) NOT NULL, "package" character varying NOT NULL, "isDiscontinued" boolean NOT NULL, "supplierIdId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_ecp"."supplier" ("id" SERIAL NOT NULL, "companyName" character varying NOT NULL, "contractName" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "phone" character varying NOT NULL, "fax" character varying NOT NULL, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" ADD CONSTRAINT "FK_92bb963a31edbbc5fc5e53ce87f" FOREIGN KEY ("customerIdId") REFERENCES "app_ecp"."customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD CONSTRAINT "FK_06de9b4d54cfcc0a046e7542517" FOREIGN KEY ("orderIdId") REFERENCES "app_ecp"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" ADD CONSTRAINT "FK_73056175b1a451dabc71361f737" FOREIGN KEY ("productIdId") REFERENCES "app_ecp"."product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" ADD CONSTRAINT "FK_d4764a4b4bfd1662ea5341f9607" FOREIGN KEY ("supplierIdId") REFERENCES "app_ecp"."supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_ecp"."product" DROP CONSTRAINT "FK_d4764a4b4bfd1662ea5341f9607"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP CONSTRAINT "FK_73056175b1a451dabc71361f737"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order_item" DROP CONSTRAINT "FK_06de9b4d54cfcc0a046e7542517"`);
        await queryRunner.query(`ALTER TABLE "app_ecp"."order" DROP CONSTRAINT "FK_92bb963a31edbbc5fc5e53ce87f"`);
        await queryRunner.query(`DROP TABLE "app_ecp"."supplier"`);
        await queryRunner.query(`DROP TABLE "app_ecp"."product"`);
        await queryRunner.query(`DROP TABLE "app_ecp"."order_item"`);
        await queryRunner.query(`DROP TABLE "app_ecp"."order"`);
        await queryRunner.query(`DROP TABLE "app_ecp"."customer"`);
    }

}
