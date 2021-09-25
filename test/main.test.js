let expect = require('expect');
const { RandomChar } = require('../main');
let main = require('../main');

describe('RandomChar', () => {
    let size = 5;
    let useRandomChar = RandomChar(size)

    it('should be a function', () => {
        expect(typeof main.RandomChar).toBe('function');
    });
    it('should return a string', () => { 
        expect(typeof useRandomChar).toBe('string')
    });
    it('shoulbe be a string of a size according to the number entered as a parameter', () => { 
        expect(useRandomChar.length).toEqual(size)
    });
    it('should return a empty if the value entered is not a int', () => { 
        let arrayValues = ["e",[],{},function row(){return ""},true];
        let size = arrayValues.length;
        for (let index = 0; index < size; index++) {
            expect(RandomChar(arrayValues[index])).toEqual("")    
        }        
    });
    it('shoulbe be a string of a size according to the value absolute of the number entered as a parameter', () => {
        let size = 2.5;
        expect(RandomChar(size).length).toEqual(2) 
    });
    it('shoulbe be a string of a size according to the value absolute of the number entered as a parameter when the value is negative', () => {
        let size = -2.5;
        expect(RandomChar(size).length).toEqual(2) 
    });
})
