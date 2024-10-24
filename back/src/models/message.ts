
import { MessageAttributes, MessageCreationAttributes } from '../types/models';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/sequelize';
import { Chat } from './chat';
import { User } from './user';

class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
	public id!: number;
	public content!: string;
	public sentAt!: Date;
	public userId!: string;
	public chatId!: number;
}

Message.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true
	},
	userId: {
		type: DataTypes.STRING(255),
		allowNull: false,
		references: {
			model: User,
			key: 'uid'
		}
	},
	chatId: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: Chat,
			key: 'id'
		}
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	sentAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
}, {
	sequelize: sequelize,
	modelName: 'message',
	timestamps: false,
});

export { Message };
