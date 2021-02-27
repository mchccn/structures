/**
 * Representation of the hash table data structure.
 */
export default class HashTable<T = any> {
    private _size: number;
    private _keys: number[];
    private _entries: T[];
    private _limit: number;

    /**
     * @param size The size of the hash table.
     */
    constructor(size: number) {
        this._size = size;
        this._keys = new Array(size).fill(null);
        this._entries = new Array(size).fill(null);
        this._limit = 0;
    }

    /**
     * The size of the hash table.
     */
    public get size() {
        return this._size;
    }

    /**
     * The limit of the hash table.
     */
    public get limit() {
        return this._limit;
    }

    /**
     * Inserts an item using a key.
     * @throws Throws an error if the hash table is full.
     * @param key The key to use.
     * @param value The value to insert.
     */
    public put(key: number, value: T): [number, T] {
        if (this._limit >= this._size) throw new Error("Hash table is full");

        let index = this.hash(key);

        while (this._keys[index] !== key) index = ++index % this._size;

        this._keys[index] = key;
        this._entries[index] = value;
        this._limit++;

        return [key, value];
    }

    /**
     * Retrieve an entry using the key.
     * @param key The key to use.
     */
    public get(key: number) {
        let index = this.hash(key);

        while (this._keys[index] !== key) index = ++index % this._size;

        return this._entries[index];
    }

    private hash(key: number) {
        if (!Number.isInteger(key)) throw new SyntaxError("Key must be an integer");
        return key % this._size;
    }
}
