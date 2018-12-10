CREATE TABLE   IF NOT EXISTS  `user_info` (
  `id` varchar(255) DEFAULT NULL,
  `sessionID` varchar(255) DEFAULT NUll,
  `openid` varchar(255) DEFAULT NULL,
  `b_openid` varchar(255) DEFAULT NULL,
  `number` int(2) DEFAULT 0,
  UNIQUE(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



