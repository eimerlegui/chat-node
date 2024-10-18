import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db';

interface UserAttributes {
	uid: string;
	username: string;
	providerId?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'uid' | 'createdAt' | 'updatedAt'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
	public uid!: string;
	public username!: string;
	public providerId!: string;
	public createdAt!: Date;
	public updatedAt!: Date;
}

User.init({
	uid: {
		type: DataTypes.STRING(255),
		primaryKey: true
	},
	username: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true
	},
	providerId: {
		type: DataTypes.STRING(30)
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
}, {
	sequelize,
	modelName: 'User',
	timestamps: true,
});

export { User };