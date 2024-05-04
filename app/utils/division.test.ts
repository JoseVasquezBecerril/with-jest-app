import { division } from "./division";


test("Test", () => {
  expect(division(6, 2)).toBe(3);
});

test("Test", () => {
    expect(division(6, 0)).toBe('el divisor debe ser diferente de cero');
  });
  
