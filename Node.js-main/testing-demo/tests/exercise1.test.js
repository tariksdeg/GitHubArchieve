const lib = require('../exercise1')
const db = require('../db')
describe('fizzBuzz', () => {
    it('should throw an exception if input is not a number', () => {
        expect(() => {lib.fizzBuzz('a')}).toThrow()
        expect(() => {lib.fizzBuzz(null)}).toThrow()
        expect(() => {lib.fizzBuzz(undefined)}).toThrow()
        expect(() => {lib.fizzBuzz({})}).toThrow()
    })
    it('should return FizzBuzz',() => {
        const result = lib.fizzBuzz(15)
        expect(result).toBe('fizzBuzz')
    })
    it('should return Fizz',() => {
        const result = lib.fizzBuzz(3)
        expect(result).toBe('Fizz')
    })
    it('should return Buzz',() => {
        const result = lib.fizzBuzz(5)
        expect(result).toBe('Buzz')
    })
    it('should return input',() => {
        const result = lib.fizzBuzz(1)
        expect(result).toBe(1)
    })
})
describe('fizzBuzz', () => {
    it('should apply 10% discount if customer has more than 10 points', () => {
      db.getCustomerSync = function(customerId){
        console.log('Fake reading customer...')
        return {id:customerId,points:20}
      }
    })
    const order = {customerId:1,totalPrice:10}
        lib.applyDiscount(order)
        expect(order.totalPrice).toBe(9)
})