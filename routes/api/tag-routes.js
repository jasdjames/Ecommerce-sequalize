const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  ProductTag.findAll({
  include: [{ model: Product}]


  }). then ((productTag) => res.json(productTag))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  ProductTag.findByPk(req.params.id, {
    include: [{ model: Product}]
  }).then((productTag) => res.json(productTag)); 
});

router.post('/', (req, res) => {
  // create a new tag
  ProductTag.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
