import { CamelCasePipe } from './camel-case.pipe';

describe('CamelCasePipe', () => {
    it('create an instance', () => {
        const pipe = new CamelCasePipe();
        expect(pipe).toBeTruthy();
    });

    it('capitalize a lowercase string', () => {
        const pipe = new CamelCasePipe();
        expect(pipe.capitalize('test')).toEqual('Test');
    });

    it('capitalize a uppercase string', () => {
        const pipe = new CamelCasePipe();
        expect(pipe.capitalize('TEST')).toEqual('Test');
    });
});
