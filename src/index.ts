/**
 * Generates a Slug.
 * 
 * The return of this function is not aware of any other generated slugs,
 * so it is a pure function. If you need to generate a slug that is aware
 * of other slugs, use the `Reslug` class.
 */
export function slug(value: string) {
    return value
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s\-]/g, "")
        .replace(/\s/g, "-")
        .toLowerCase();
}

export default class Reslug {
    private slugs: Map<string, number> = new Map();
    constructor() {}

    slug(value: string) {
        let result = slug(value);
        const original = result;

        while(this.slugs.has(result)) {
            const count = this.slugs.get(result)!;
            result = `${original}-${count}`;
        }

        this.slugs.set(result, (this.slugs.get(result) ?? 0) + 1);

        return result;
    }

    /**
     * Resets the internal state of the Reslug instance.
     */
    reset() {
        this.slugs = new Map();
    }
}