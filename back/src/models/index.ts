import { Chat } from './chat';
import { Contact } from './contact';
import { Message } from './message';
import { User } from './user';

User.hasMany(Contact, { foreignKey: 'userId' });
User.hasMany(Contact, { foreignKey: 'contactId' });
Chat.hasMany(Contact, { foreignKey: 'chatId' });

Contact.belongsTo(User, { as: 'user', foreignKey: 'userId' });
Contact.belongsTo(User, { as: 'contact', foreignKey: 'contactId' });
Contact.belongsTo(Chat, { foreignKey: 'chatId' });

User.hasMany(Message, { foreignKey: 'userId' });
Chat.hasMany(Message, { foreignKey: 'chatId' });

Message.belongsTo(User, { foreignKey: 'userId' });
Message.belongsTo(Chat, { foreignKey: 'chatId' });

User.belongsToMany(Chat, { through: 'chat_users', foreignKey: 'userId' });
Chat.belongsToMany(User, { through: 'chat_users', foreignKey: 'chatId' });

export { Chat, Contact, Message, User };