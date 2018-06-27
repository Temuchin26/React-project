import age from '../myLibTest';

test('age must be', () => {
    expect(age(2000)).toBeGreaterThan(17)
}) 

// test('Age 17 must be "Still Young"', () => {
//     expect(age(22)).toBe('Still Young')
// }) 

// test('Age 18 must be "Still Young"', () => {
//     expect(age(18)).toBe('Of Age')
// }) 