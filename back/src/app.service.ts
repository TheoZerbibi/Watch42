import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getAPIDescription(): string {
		return 'Welcome to Watch42 API!';
	}
}
