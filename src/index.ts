import { Express } from 'express'
import chalk from 'chalk'

import { DateLine } from './dateLine'

export default function ezServe(app: Express, port: number) {
  app.listen(port, () => {
    const serveText = `${chalk.greenBright('Server Starting @')} ${chalk.bold(
      `${chalk.underline(`http://localhost:${port}`)}`
    )}`
    const dateLine = DateLine
    const length: number =
      serveText.length - dateLine.length > 0
        ? serveText.length
        : dateLine.length

    let lineCut = ''

    for (let i = 0; i < length; i++) {
      lineCut += '='
    }

    console.log(chalk.cyan(lineCut))
    console.log('')
    console.log(serveText)
    console.log(chalk.greenBright(dateLine))
    console.log('')
    console.log(chalk.cyan(lineCut))
    console.log('')
  })
}
