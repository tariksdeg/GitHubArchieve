const lib = require("../lib");
const db = require('../db')
const mail = require('../mail')

describe("absolute", () => {
  it("Should be positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  it("Should be negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  it("Should be 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(1);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Tarik");
    // expect(result).toBe('Welcome Tarik')
    expect(result).toMatch(/Tarik/);
    expect(result).toContain("Tarik");
  });
});
describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.greet();
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR ");
  });
});
describe("getProduct", () => {
  it("should return the product with the giwen ID", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", "1");
  });
});
describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });
  it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("Tarik");
    expect(result).toMatchObject({ username: "Tarik" });
    expect(result.id).toBeGreaterThan
  });
});
describe('notfiyCustomer', () => {
  it('should send an email to the customer', () => {
    // db.getCustomerSync = jest.fn().mockReturnValue({email:'a'})  // aşağıdakiyle aynı
    db.getCustomerSync = function(customerId){
      return {email:'a'}
    }
  
  let mailSent = false
  mail.send = function(email,message) {
    mailSent = true
  } 
      lib.notifyCustomer({customerId:1})
      expect(mailSent).toBe(true)
})
})