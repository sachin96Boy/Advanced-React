import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { SessionStrategy } from '@keystone-next/types';

const databaseUrl: string = process.env.DATABASE_URL!;

const sessionConfig: SessionStrategy<any> = {
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    },
};

export default config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        },
    },
    db: {
        adapter: 'mongoose',
        url: databaseUrl,
    },
    Lists: createSchema({}),
    ui: {
        isAccessAllowed: () => true,
    },
    session: sessionConfig,
});
