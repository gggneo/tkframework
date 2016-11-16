export default (sequelize, DataTypes) => 

  sequelize.define("tags", {    
    type: {
      type: new DataTypes.VIRTUAL(DataTypes.STRING),
      get: () => 'Tag',      
    },    
    id          : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    name: DataTypes.STRING, 
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  })