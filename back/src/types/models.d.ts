export interface ChatAttributes {
	id?: number;
	type: number;
	name?: string;
	createdAt?: Date;
	deletedAt?: Date | null;
}

export interface ChatCreationAttributes extends Optional<ChatAttributes, 'id' | 'createdAt' | 'deletedAt'> { }

export interface ContactAttributes {
	id?: number;
	userId: string;
	contactId: string;
	chatId: number;
	customName?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ContactCreationAttributes extends Optional<ContactAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

export interface MessageAttributes {
	id?: number;
	content: string;
	sentAt?: Date;
	userId: string;
	chatId: number;
}

export interface MessageCreationAttributes extends Optional<MessageAttributes, 'id' | 'sentAt'> { }

export interface UserAttributes {
	uid: string;
	username: string;
	providerId?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'uid' | 'createdAt' | 'updatedAt'> { }