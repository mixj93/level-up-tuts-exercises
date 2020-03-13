import { total } from './App'
import { add } from './add'

jest.mock('./add', () => ({
  add: jest.fn(() => 25)
}))

// Integration test: test things work together
test('test', () => {
  expect(total(20, 5)).toEqual('$25')
  expect(add).toHaveBeenCalledTimes(1)

  // Redundant
  add.mockImplementation(() => 30)
  expect(total(25, 5)).toEqual('$30')
  expect(add).toHaveBeenCalledTimes(2)
})
