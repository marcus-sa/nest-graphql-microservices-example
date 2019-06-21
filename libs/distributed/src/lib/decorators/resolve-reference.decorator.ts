import { SetMetadata } from '@nestjs/common';
import { RESOLVE_REFERENCE_METADATA } from '../tokens';

export function ResolveReference(): MethodDecorator {
	return (target: Object | Function, key?: string | symbol, descriptor?: any) => {
		SetMetadata(RESOLVE_REFERENCE_METADATA, true)(target, key, descriptor);
	};
}