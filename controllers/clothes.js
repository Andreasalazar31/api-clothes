let Clothe = require('../models/clothes')

const controller = {
  getClothes: function (req, res) {
    Clothe.find({}).exec()
      .then(clotheList => {
        if (!clotheList) return res.status(404).send({message: "No data found"})
        return res.status(200).json(clotheList)
      })
      .catch(err => res.status(500).send({message: `Error: ${err}`}))
  },
  getClothe: function (req, res) {
    let clotheId = req.params.id
    if (clotheId == null) return res.status(404).send({message: "show not found"})

    Clothe.findById(clotheId).exec()
      .then(data => {
        if (!data) return res.status(404).send({message: "Show not found"})
        return res.status(200).json(data)
      })
      .catch(err => res.status(500).send({message: `Internal error-> ${err}`}))
  },
  saveClothe: function (req, res) {
    let clothe = new Clothe()
    const {name, color, size,material,photo} = req.body
    if (name && color) {
      clothe.name = name
      clothe.color = color
      clothe.size = size
      clothe.material= material
      clothe.photo = photo
      
      clothe.save()
        .then(storedClothe => {
          storedClothe
            ? res.status(200).json({clothe: storedClothe})
            : res.status(404).send({message: "Error saving the document"})
        })
        .catch(error => res.status(500).send({message: "Error while saving the document"}))
    } else {
      return res.status(400).send({message: "Data is not right"})
    }
  },
  updateClothe: function (req, res) {
    let clotheId = req.params.id
    let update = req.body

    Clothe.findByIdAndUpdate(clotheId, update, {returnDocument: 'after'})
      .then(updatedClothe => {
        if(!updatedClothe) return res.status(404).send({message: "The document does not exist"})
        return res.status(200).send({show: updatedClothe})
      })
      .catch(error => res.status(500).send({message: `Error while updating ${error}`}))
  },
  deleteClothe: function (req, res) {
    let clotheId = req.params.id

    Clothe.findByIdAndDelete(clotheId)
      .then(removedClothe => {
        if (!removedClothe) return res.status(404).send({message: "The show does not exist"})
        return res.status(200).send({show: removedClothe})
      })
      .catch(err => res.status(500).send({message: "Error while deleting"}))
  }
}

module.exports = controller