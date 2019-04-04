import { assert } from 'chai'
import Fib from '../src/js/fib'

const f = new Fib()

describe('MyMod Class', () => {
  it('calculate fib number', () => {
    const cases = [
      { case: 0, expected: 0 },
      { case: 1, expected: 1 },
      { case: 2, expected: 1 },
      { case: 10, expected: 55 },
      { case: 100, expected: 354224848179262015075 }
    ]

    for (const c of cases) {
      assert.equal(f.fib(c.case), c.expected)
    }
  })
})
