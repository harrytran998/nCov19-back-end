const chalk = require('chalk')
const { readFileSync } = require('fs')

const msgPath = process.env.GIT_PARAMS
const msg = readFileSync(msgPath, 'utf-8').trim()

const commitRegex = /^(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRegex.test(msg)) {
  console.log()
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red('invalid commit message format.')}\n\n` +
      chalk.red('  Proper commit message format is required for automated changelog generation. Examples:\n\n') +
      `    ${chalk.green('feat(nav): add algolia search option')}\n` +
      `    ${chalk.green('fix(services-worker): handle pages URL pattern (close #28)')}\n\n` +
      chalk.red('  See .github/commit-convention.md for more details.\n'),
  )
  process.exit(1)
}
