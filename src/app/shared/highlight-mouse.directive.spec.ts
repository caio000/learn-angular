import { HighlightMouseDirective } from './highlight-mouse.directive';

describe('HighlightMouseDirective', () => {
  it('should create an instance', () => {
    const directive = new HighlightMouseDirective();
    expect(directive).toBeTruthy();
  });

    it('should background color initial with green', () => {
        const directive = new HighlightMouseDirective();
        expect(directive.backgroundColor).toEqual('green');
    });
});
