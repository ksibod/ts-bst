import { describe, it, expect, time } from 'ts-simple-test';
import { BST } from '../src/BST';

const initString: string = 'test';
const initInt: number = 10;

let stringTree: BST<string>;
let intTree: BST<number>;

const random = (min: number, max: number) => 
    Math.floor(Math.random() * (max - min + 1)) + min;


describe('BST Tests', () => {
    it('Create a new BST<String> and insert a value', () => {
        stringTree = new BST<string>();
        stringTree.insert(initString);
        expect(stringTree.value).toBeTruthy();
    });

    it('Create a new BST<Number> and insert a value', () => {
        intTree = new BST<number>();
        intTree.insert(initInt);
        expect(intTree.value).toBeTruthy();
    });

    it('Left and right nodes are null', () => {
        expect(stringTree.left).toBeFalsy();
        expect(stringTree.right).toBeFalsy();
        expect(intTree.left).toBeFalsy();
        expect(intTree.right).toBeFalsy();
    });

    it('Initial values are equal', () => {
        expect(stringTree.value).toBe(initString);
        expect(intTree.value).toBe(initInt);
    });

    it('Trees contain the values', () => {
        expect(stringTree.contains(initString)).toBeTruthy();
        expect(intTree.contains(initInt)).toBeTruthy();
    });

    it('Insert into trees', () => {
        const temp = 'temp';
        const twenty = 20;
        stringTree.insert(temp);
        intTree.insert(twenty);
        expect(stringTree.contains(temp)).toBeTruthy();
        expect(intTree.contains(twenty)).toBeTruthy();
    });

    it('Minimum values', () => {
        expect(stringTree.minimum()).toBe('temp');
        expect(intTree.minimum()).toBe(10);
    });

    it('Maximum values', () => {
        expect(stringTree.maximum()).toBe('test');
        expect(intTree.maximum()).toBe(20);
    });

    it('Insert 100,000 elements into trees', () => {
        time(() => {
            for (let i = 0; i < 100000; i++) {
                const rand = random(1, 100000);
                stringTree.insert(`num-${rand}`);
                intTree.insert(rand);
            }
            expect(stringTree.contains('test')).toBeTruthy();
            expect(intTree.contains(20)).toBeTruthy();
        });
    });
});


