import { Client } from 'prisma-client-lib';

export const PRISMA_PROVIDER = Symbol.for('PRISMA_PROVIDER');

export interface PrismaProvider {
	prisma: Client;
}
