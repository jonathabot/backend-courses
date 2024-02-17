import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1708205347023 } from './migrations/1708205347023-CreateUsersTable'
import User from "../app/entities/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1708205347023],
    subscribers: [],
})
