import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile();
	});

	describe('getAPIDescription', () => {
		it('should return "Welcome to Watch42 API!"', () => {
			const appController = app.get(AppController);
			expect(appController.getAPIDescription()).toBe('Welcome to Watch42 API!');
		});
	});
});
