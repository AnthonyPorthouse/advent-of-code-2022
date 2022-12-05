import { Command } from 'commander'

const program = new Command()
  .name('advent-of-code.js-2022')

program.command('day <day>')
  .action((day: number) => {
    import(`./day${day.toString().padStart(2, '0')}/index.js`)
  })

program.parse()