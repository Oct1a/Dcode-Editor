module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema
    // Schema
  const usersSchema = new Schema({
    username: { type: String, required: [true, 'username不能为空'] },
    password: { type: String, required: [true, 'password不能为空'] },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    avatar: { type: String, default: '' },
    permissions: { type: Number, default: 0 }, //0普通用户，1管理员
    status: { type: Boolean, default: true }
  }, { timestamps: { createdAt: 'created', updatedAt: 'updated' } })
  return mongoose.model('user', usersSchema);
};