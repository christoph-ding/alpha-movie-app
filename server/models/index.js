import Sequelize from 'sequelize';

import Movie from './movie.js';

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logging: false
});

Movie(sequelize);

const models = sequelize.models;
sequelize.sync();

export default sequelize;
