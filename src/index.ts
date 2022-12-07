import { Command } from 'commander'
import {memoryUsage,nextTick} from 'node:process'

let maxMemoryUsage = 0

const getMemoryUsage = () => {
  const memUsage = memoryUsage.rss();
  if (memUsage > maxMemoryUsage) {
    maxMemoryUsage = memUsage
  }

  setImmediate(() => nextTick(getMemoryUsage)).unref()
}
nextTick(getMemoryUsage)

process.on('exit', () => {
  console.log(`Max Memory Used: ${new Intl.NumberFormat().format(maxMemoryUsage / 1024 / 1024)}Mb`)
})

const program = new Command()
  .name('advent-of-code.js-2022')

program.command('day <day>')
  .action((day: number) => {
    import(`./day${day.toString().padStart(2, '0')}/index.js`)
  })

program.parse()
