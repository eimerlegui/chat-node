import { DataTypes, Model, Optional } from 'sequelize';
import { connectionDB } from '../config/db';

interface TestAttributes {
	id?: number;
	name: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface TestCreationAttributes extends Optional<TestAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

class Test extends Model<TestAttributes, TestCreationAttributes> implements TestAttributes {
	public id!: number;
	public name!: string;
	public createdAt!: Date;
	public updatedAt!: Date;
}

Test.init({
	id: {
		type: DataTypes.MEDIUMINT.UNSIGNED,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(20),
		allowNull: false
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW
	}
}, {
	sequelize: connectionDB,
	modelName: 'Test',
	timestamps: true,
});

export { Test };