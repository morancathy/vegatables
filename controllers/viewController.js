const RESOURCE_PATH = '/veggies';

const viewController = {

  new(req, res, next){
    res.render('New')
  },

  index(req, res, next){
    res.render('Index', {products: res.locals.data.products})
  },

  show(req, res, next){
    res.render('Show', {product: res.locals.data.product})
  },

  edit(req, res, next){
    res.render('Edit', {product: res.locals.data.product})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = viewController;
