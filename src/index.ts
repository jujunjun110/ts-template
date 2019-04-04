import Fib from './js/fib'
import './scss/style.scss'

function main(): void {
  const f = new Fib()
  console.log(f.fib(10))
}

main()
