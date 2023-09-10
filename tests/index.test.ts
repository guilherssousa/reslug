import { describe, it, expect } from 'vitest'
import Reslug, { slug } from '../src'

// Yes, I know, this is a very bad test suitcase.

describe('slug()', () => {
    it('should generate a slug', () => {
        const input = "Hello World";
        const expected = "hello-world";

        const result = slug(input);
        expect(result).toBe(expected);
    });
    
    it('should generate a slug with a number', () => {
        const input = "Hello World 2";
        const expected = "hello-world-2";

        const result = slug(input);
        expect(result).toBe(expected);
    });

    it('should sanitize special characters', () => {
        const input = "Hello World!@#$%^&*()_+";
        const expected = "hello-world_";

        const result = slug(input);
        expect(result).toBe(expected);
    })

    it('should sanitize unicode characters', () => {
        const input = "Hello World ñ";
        const expected = "hello-world-n";

        const result = slug(input);
        expect(result).toBe(expected);
    });

    it('should generate the same slug for the same input', () => {
        const input = "Hello World";
        const expected = "hello-world";

        const result1 = slug(input);
        const result2 = slug(input);

        expect(result1).toBe(expected);
        expect(result2).toBe(expected);
    });
});

describe('Reslug', () => {
    const reslug = new Reslug();

    it('should generate a slug', () => {
        const input = "Hello World";
        const expected = "hello-world";

        const result = reslug.slug(input);
        expect(result).toBe(expected);
    });

    it('should generate a unique id for the same input', () => {
        const input = "Hello World";
        const expected = "hello-world-1";

        const result = reslug.slug(input);
        expect(result).toBe(expected);
    });

    it('can be reset', () => {
        const input = "Hello World";
        const expected = "hello-world";

        reslug.reset();
        const result = reslug.slug(input);
        expect(result).toBe(expected);
    });

    it('should generate a unique id for the same input after reset', () => {
        const input = "Hello World";
        const expected = "hello-world-1";

        const result = reslug.slug(input);
        expect(result).toBe(expected);
    });
});