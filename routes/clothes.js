const { Router } = require('express')
const ClothesController = require('../controllers/clothes')

const router = Router()

router.get('/', ClothesController.getClothes)
router.get('/:id?', ClothesController.getClothe)
router.post('/save-clothe', ClothesController.saveClothe)
router.put('/edit-clothe/:id?', ClothesController.updateClothe)
router.delete('/delete-clothe/:id?', ClothesController.deleteClothe)

module.exports = router