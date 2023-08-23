import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDOBtoUser1692806085779 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'user',
            new TableColumn({
                name: 'dob',
                type: 'int',
                isNullable: true,
                default: 0
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('user', 'dob');
    }

}
