import { User } from '@models'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return User.create({
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'ADMIN',
    })
  },

  down: (queryInterface, Sequelize) => {
    return User.destroy({
      where: {
        email: {
          $not: 'admin@gmail.com',
        },
      },
    })
  },
}
