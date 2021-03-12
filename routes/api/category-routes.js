const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
Category.findAll({ include:[Product]
}).then((category) => res.json(category));
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
Category.findByPk(req.params.id, {
  include: [{ model: Product}]
}).then((category) => res.json(category));
});

router.post('/', (req, res) => {
  // create a new category
Category.create(req.body)
.then((category) => res.json(category)

// {

// if 



// }



) 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {

      id: req.params.id
    }
  }).then((category) => {

    res.json(category)
  })
});



module.exports = router;
