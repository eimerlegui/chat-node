import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface ChatAttributes {
	id?: number;
	type: number;
	name?: string;
	createdAt?: Date;
	deletedAt?: Date | null;
}

interface ChatCreationAttributes extends Optional<ChatAttributes, 'id' | 'createdAt' | 'deletedAt'> { }

class Chat extends Model<ChatAttributes, ChatCreationAttributes> implements ChatAttributes {
	public id!: number;
	public type!: number;
	public name!: string;
	public createdAt!: Date;
	public deletedAt!: Date | null;
}

Chat.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true
	},
	type: {
		type: DataTypes.TINYINT,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING(255)
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	deletedAt: {
		type: DataTypes.DATE,
		allowNull: true
	}
}, {
	sequelize,
	modelName: 'Chat',
	timestamps: false,
	paranoid: true, // habilita soft delete usando deletedAt
});

export { Chat };