import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'prisma-client-lib';

import { PRISMA_PROVIDER, PrismaProvider } from './prisma-provider';

@Injectable()
export abstract class PrismaConsumer {
	protected constructor(
		@Inject(PRISMA_PROVIDER)
		protected readonly provider: PrismaProvider,
	) {}

	protected get prisma(): Client {
		return this.provider.prisma;
	}
}
