CREATE DATABASE IF NOT EXISTS application_node_api;

CREATE TABLE IF NOT EXISTS application_users {
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
};

