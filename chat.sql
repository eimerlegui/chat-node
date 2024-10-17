-- Crear las tablas primero
CREATE TABLE `users` (
  `uid` varchar(255) PRIMARY KEY,
  `name` varchar(50),
  `username` varchar(50) UNIQUE NOT NULL,
  `providerId` varchar(30),
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `chats` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type` TINYINT CHECK (type IN (1, 2)),  -- 1: privado, 2: grupo
  `name` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL
);

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `content` text,
  `sent_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `user_id` varchar(255),
  `chat_id` int
);

CREATE TABLE `chat_users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(255),
  `chat_id` int
);

CREATE TABLE `contacts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `contact_id` varchar(255) NOT NULL,
  `chat_id` int NOT NULL,
  `custom_name` varchar(255) NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Ahora agregar las claves foráneas
ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);
ALTER TABLE `messages` ADD FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`);

ALTER TABLE `chat_users` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);
ALTER TABLE `chat_users` ADD FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`);

ALTER TABLE `contacts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`uid`);
ALTER TABLE `contacts` ADD FOREIGN KEY (`contact_id`) REFERENCES `users` (`uid`);
ALTER TABLE `contacts` ADD FOREIGN KEY (`chat_id`) REFERENCES `chats` (`id`);