import { add } from './add'

// Unit test: only test one thing
test('add', () => {
  expect(add(1, 2)).toEqual(3)
  expect(add(5, 6)).toEqual(11)
  // expect(add).toHaveBeenCalledTimes(1)
  // expect(add).toHaveBeenCalledWith(1, 2)
})
