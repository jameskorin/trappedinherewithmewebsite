export const postgres = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
}