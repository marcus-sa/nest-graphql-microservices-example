import { Global, Module } from '@nestjs/common';
import { Client } from 'prisma-client-lib';

import { PRISMA_PROVIDER } from './prisma-provider';

@Global()
@Module({})
export class PrismaModule {
	static forRoot(prisma: Client) {
		return {
			module: PrismaModule,
			providers: [
				{
					provide: PRISMA_PROVIDER,
					useValue: {
						prisma,
					},
				},
			],
			exports: [PRISMA_PROVIDER],
		};
	}
}
