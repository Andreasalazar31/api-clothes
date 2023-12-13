let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ClothesSchema = Schema ({
  "name": String,
  "color": String,
  "size": String,
  "material":String,
  "photo": String,
})

module.exports = mongoose.model('Clothe', ClothesSchema, 'ClothesList')