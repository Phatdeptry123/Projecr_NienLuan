module.exports = {
  mutipleMongooseToOpject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToOpject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
