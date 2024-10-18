import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';
import { User } from './user';
import { Chat } from './chat';

interface ContactAttributes {
	id?: number;
	userId: string;
	contactId: string;
	chatId: number;
	customName?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface ContactCreationAttributes extends Optional<ContactAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

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
	modelName: 'Contact',
	timestamps: true,
});

export { Contact };