const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitMes = /^(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitMes.test(msg)) {
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
