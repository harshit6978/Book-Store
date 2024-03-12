const { authSchema } = require("../model")

const authPost = (body) => {
    return authSchema.create(body)
}
const authGet = () => {
    return authSchema.find();
}
module.exports = { authPost,authGet };