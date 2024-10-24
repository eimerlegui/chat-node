
import { UserAttributes, UserCreationAttributes } from '../types/models';
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/sequelize';
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
	sequelize: sequelize,
	modelName: 'user',
	timestamps: true,
});

export { User };
