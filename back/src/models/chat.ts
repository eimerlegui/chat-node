
import { ChatAttributes, ChatCreationAttributes } from '../types/models';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/sequelize';

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
	sequelize: sequelize,
	modelName: 'chat',
	timestamps: false,
	paranoid: true, // habilita soft delete usando deletedAt
});

export { Chat };
