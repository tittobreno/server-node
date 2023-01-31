CREATE IF NOT EXISTS 'uuid-ossp';

CREATE TABLE IF NOT EXISTS application_user {
    uuid uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NULL
};
