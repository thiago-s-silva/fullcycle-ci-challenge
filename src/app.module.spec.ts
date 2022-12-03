import { AppModule } from './app.module';

describe('App Module', () => {
  describe('unit tests', () => {
    it('should be exported as a class', () => {
      expect(AppModule).toBeInstanceOf(Object);
    });
  });
});
