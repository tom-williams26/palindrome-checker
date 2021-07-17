import palindrome from './palindrome';


test("Is 'eye' palindrome?", () => {
    expect(
        palindrome("eye")).toBeTruthy();
            
});
test("Is '_eye' palindrome?", () => {
    expect(
        palindrome("_eye")).toBeTruthy();
            
});
test("Is 'race car' palindrome?", () => {
    expect(
        palindrome("race car")).toBeTruthy();
            
});
test("Is 'madam' palindrome?", () => {
    expect(
        palindrome("madam")).toBeTruthy();
            
});
test("Is 'never odd or even' palindrome?", () => {
    expect(
        palindrome("never odd or even")).toBeTruthy();
            
});
test("Is '2_A3*3#A2' palindrome?", () => {
    expect(
        palindrome("2_A3*3#A2")).toBeTruthy();
            
});
test("Is 'almostomla' palindrome?", () => {
    expect(
        palindrome("almostomla")).toBeFalsy();
            
});
test("Is nope palindrome?", () => {
    expect(
        palindrome("nope")).toBeFalsy();
            
});



