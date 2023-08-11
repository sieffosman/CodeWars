function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      throw new Error("Input array must contain exactly 10 numbers.");
    }
  
    // Extract the first 3 numbers as the area code
    const areaCode = numbers.slice(0, 3).join('');
  
    // Extract the next 3 numbers as the exchange code
    const exchangeCode = numbers.slice(3, 6).join('');
  
    // Extract the last 4 numbers as the last four digits
    const lastFourDigits = numbers.slice(6, 10).join('');
  
    // Combine the parts to form the phone number
    const phoneNumber = `(${areaCode}) ${exchangeCode}-${lastFourDigits}`;
  
    return phoneNumber;
  }
  //Testing
  const numbers = [4, 1, 2, 3, 5, 5, 9, 0, 6, 8];
  const phoneNumber = createPhoneNumber(numbers);
  console.log("Generated Phone Number:", phoneNumber);

//Sample Testing
  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });
});


  

