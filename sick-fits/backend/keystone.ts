import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { SessionStrategy } from '@keystone-next/types';
import { User } from './schemas/User';
import { createAuth } from '@keystone-next/auth';
import { statelessSessions, withItemData } from '@keystone-next/keystone/session';

const databaseUrl: string =
    process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits';

const sessionConfig: any = {
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    },
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
    }
})

export default withAuth(config({
    // @ts-ignore
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
    Lists: createSchema({
        User
    }),
    ui: {
        isAccessAllowed: () => true,
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id name email`
    }),
}));
