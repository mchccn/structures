/**
 * Representation of the hash table data structure.
 */
export default class HashTable<T = any> {
    private _size;
    private _keys;
    private _entries;
    private _limit;
    /**
     * @param size The size of the hash table.
     */
    constructor(size: number);
    /**
     * The size of the hash table.
     */
    get size(): number;
    /**
     * The limit of the hash table.
     */
    get limit(): number;
    /**
     * Inserts an item using a key.
     * @throws Throws an error if the hash table is full.
     * @param key The key to use.
     * @param value The value to insert.
     */
    put(key: number, value: T): [number, T];
    /**
     * Retrieve an entry using the key.
     * @param key The key to use.
     */
    get(key: number): T;
    private hash;
}
