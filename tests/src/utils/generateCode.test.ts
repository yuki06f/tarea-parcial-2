import { describe, it, expect } from 'vitest';
import { generateSixDigitCode } from '../../../src/utils/generateCode.util';

describe('Pruebas unitarias', () => {
    it('codigo de 6 digitos', () => {
        const code = generateSixDigitCode();
        expect(typeof code).toBe('string');
        expect(code).matches(/^\d{6}$/);
    });
    
    it('Dgenerar codigos unicos', () => {
        const code1 = generateSixDigitCode();
        const code2 = generateSixDigitCode();
        expect(code1 !== code2).toBe(true);
    });
});
