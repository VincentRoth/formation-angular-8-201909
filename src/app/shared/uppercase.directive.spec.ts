import { UppercaseDirective } from './uppercase.directive';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const element = {
      nativeElement: {
        style: null
      }
    };
    const directive = new UppercaseDirective(element);
    expect(directive).toBeTruthy();
  });
});
