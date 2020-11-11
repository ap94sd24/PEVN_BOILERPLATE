CREATE DATABASE testdb;

CREATE TABLE tasks
(
  tasks_id SERIAL,
  description VARCHAR(255) NOT NULL,
  PRIMARY KEY (tasks_id),
)

