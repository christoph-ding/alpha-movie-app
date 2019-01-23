import Sequelize from 'sequelize';

export default function (sequelize) {
  const Movie = sequelize.define('Movie', {
    title: {
      type: Sequelize.STRING,
      unique: true
    },
    poster: Sequelize.STRING,
    year: Sequelize.STRING,
    plot: Sequelize.STRING,
    rating: Sequelize.INTEGER,
  })
}

// const Event = sequelize.define('Event', {
//   date: Sequelize.STRING,
//   name: {
//     type: Sequelize.STRING,
//     unique: true
//   },
//   description: Sequelize.STRING,
//   createdAt: {
//       type: 'TIMESTAMP',
//       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//       allowNull: false
//   },
//   updatedAt: {
//       type: 'TIMESTAMP',
//       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//       allowNull: false
//   } 
// })

// Event.associate = (models) => {
//   Event.belongsTo(models.Organization)
// }
