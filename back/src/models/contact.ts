
import { ContactAttributes, ContactCreationAttributes } from '../types/models';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/sequelize';
import { Chat } from './chat';
import { User } from './user';

class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
	public id!: number;
	public userId!: string;
	public contactId!: string;
	public chatId!: number;
	public customName?: string;
	public createdAt!: Date;
	public updatedAt!: Date;
}

Contact.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		primaryKey: true,
		autoIncrement: true,
	},
	userId: {
		type: DataTypes.STRING(255),
		allowNull: false,
		references: {
			model: User,
			key: 'uid',
		},
		onDelete: 'CASCADE',
	},
	contactId: {
		type: DataTypes.STRING(255),
		allowNull: false,
		references: {
			model: User,
			key: 'uid',
		},
		onDelete: 'CASCADE',
	},
	chatId: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: Chat,
			key: 'id',
		},
		onDelete: 'CASCADE',
	},
	customName: {
		type: DataTypes.STRING(255),
		allowNull: true,
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
}, {
	sequelize,
	modelName: 'contact',
	timestamps: true,
});

export { Contact };
