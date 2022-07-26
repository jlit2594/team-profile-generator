const Engineer = require('../lib/Engineer')

test('creates the Engineer object', () => {
    const engineer = new Engineer('');

    expect(engineer.name).toBe(expect.any(String));
    expect(engineer.role).toBe(expect.any(String));
    expect(engineer.id).toBe(expect.any(Number));
    expect(engineer.email).toBe(expect.any(String));
});

test("verifies engineer's role", () => {
    const engineer = new Engineer('');

    expect(engineer.role).toEqual(expect.stringContaining('Engineer'));
});

test("tests engineer's github username", () => {
    const engineer = new Engineer('');

    expect(engineer.github).toBe(expect.any(String));
});

test("verifies engineer was added to the employees array", () => {
    const engineer = new Engineer('');

    employees = [];

    expect(employees).toHaveProperty(engineer);
})