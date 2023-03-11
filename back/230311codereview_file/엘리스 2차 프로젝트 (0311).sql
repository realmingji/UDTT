CREATE TABLE `user` (
	`user_id`	varchar(255)	NOT NULL,
	`user_name`	varchar(45)	NOT NULL,
	`spot`	VARCHAR(255)	NULL,
	`created_date`	datetime	NOT NULL,
	`login_date`	datetime	NOT NULL
);

CREATE TABLE `review` (
	`review_id`	varchar(255)	NOT NULL,
	`group_id`	varchar(255)	NOT NULL,
	`user_id`	varchar(255)	NOT NULL,
	`comment`	string	NOT NULL,
	`comments_count`	int	NULL
);

CREATE TABLE `ridegroup` (
	`group_id`	varchar(255)	NOT NULL,
	`user_id`	varchar(255)	NOT NULL,
	`user_name`	varchar(45)	NULL,
	`member_id`	varchar(255)	NOT NULL,
	`title`	varchar(50)	NOT NULL,
	`info`	varchar(300)	NOT NULL,
	`location`	varchar(10)	NOT NULL,
	`start_time`	datetime	NOT NULL,
	`end_time`	datetime	NOT NULL,
	`status`	array	NOT NULL,
	`members_count`	int	NULL
);

