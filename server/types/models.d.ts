interface ChatAttributes {
	id?: number;
	type: number;
	name?: string;
	createdAt?: Date;
	deletedAt?: Date | null;
}

interface ChatCreationAttributes extends Optional<ChatAttributes, 'id' | 'createdAt' | 'deletedAt'> { }

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

interface MessageAttributes {
	id?: number;
	content: string;
	sentAt?: Date;
	userId: string;
	chatId: number;
}

interface MessageCreationAttributes extends Optional<MessageAttributes, 'id' | 'sentAt'> { }

interface UserAttributes {
	uid: string;
	username: string;
	providerId?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'uid' | 'createdAt' | 'updatedAt'> { }