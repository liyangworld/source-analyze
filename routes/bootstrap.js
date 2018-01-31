var express = require('express');
var router = express.Router();

/* GET /bootstrap */
router.get('/', function(req, res, next) {
  res.render('bootstrap/index');
});

router.get('/global/summary', function (req, res, next) {
  res.render('bootstrap/global/summary');
});
router.get('/global/variables', function (req, res, next) {
  res.render('bootstrap/global/variables');
}); 
router.get('/global/mixins', function (req, res, next) {
  res.render('bootstrap/global/mixins');
}); 
router.get('/global/normalize', function (req, res, next) {
  res.render('bootstrap/global/normalize');
}); 
router.get('/global/print', function (req, res, next) {
  res.render('bootstrap/global/print');
}); 
router.get('/global/glyphicons', function (req, res, next) {
  res.render('bootstrap/global/glyphicons');
}); 
router.get('/global/scaffolding', function (req, res, next) {
  res.render('bootstrap/global/scaffolding');
}); 
router.get('/global/type', function (req, res, next) {
  res.render('bootstrap/global/type');
}); 
router.get('/global/code', function (req, res, next) {
  res.render('bootstrap/global/code');
}); 
router.get('/global/grid', function (req, res, next) {
  res.render('bootstrap/global/grid');
}); 
router.get('/global/tables', function (req, res, next) {
  res.render('bootstrap/global/tables');
}); 
router.get('/global/forms', function (req, res, next) {
  res.render('bootstrap/global/forms');
}); 
router.get('/global/buttons', function (req, res, next) {
  res.render('bootstrap/global/buttons');
});
router.get('/global/utilities', function (req, res, next) {
  res.render('bootstrap/global/utilities');
});
router.get('/global/responsiveUtilities', function (req, res, next) {
  res.render('bootstrap/global/responsiveUtilities');
});


router.get('/components/animations', function (req, res, next) {
  res.render('bootstrap/components/animations');
});
router.get('/components/dropdowns', function (req, res, next) {
  res.render('bootstrap/components/dropdowns');
});
router.get('/components/buttonGroups', function (req, res, next) {
  res.render('bootstrap/components/buttonGroups');
});
router.get('/components/inputGroups', function (req, res, next) {
  res.render('bootstrap/components/inputGroups');
});
router.get('/components/navs', function (req, res, next) {
  res.render('bootstrap/components/navs');
});
router.get('/components/navbar', function (req, res, next) {
  res.render('bootstrap/components/navbar');
});
router.get('/components/breadcrumbs', function (req, res, next) {
  res.render('bootstrap/components/breadcrumbs');
});
router.get('/components/pagination', function (req, res, next) {
  res.render('bootstrap/components/pagination');
});
router.get('/components/pager', function (req, res, next) {
  res.render('bootstrap/components/pager');
});
router.get('/components/labels', function (req, res, next) {
  res.render('bootstrap/components/labels');
});
router.get('/components/badges', function (req, res, next) {
  res.render('bootstrap/components/badges');
});
router.get('/components/jumbotron', function (req, res, next) {
  res.render('bootstrap/components/jumbotron');
});
router.get('/components/thumbnails', function (req, res, next) {
  res.render('bootstrap/components/thumbnails');
});
router.get('/components/alerts', function (req, res, next) {
  res.render('bootstrap/components/alerts');
});
router.get('/components/progressBars', function (req, res, next) {
  res.render('bootstrap/components/progressBars');
});
router.get('/components/media', function (req, res, next) {
  res.render('bootstrap/components/media');
});
router.get('/components/listGroup', function (req, res, next) {
  res.render('bootstrap/components/listGroup');
});
router.get('/components/panels', function (req, res, next) {
  res.render('bootstrap/components/panels');
});
router.get('/components/responsiveEmbed', function (req, res, next) {
  res.render('bootstrap/components/responsiveEmbed');
});
router.get('/components/wells', function (req, res, next) {
  res.render('bootstrap/components/wells');
});
router.get('/components/close', function (req, res, next) {
  res.render('bootstrap/components/close');
});


router.get('/widgets/summary', function (req, res, next) {
  res.render('bootstrap/widgets/summary');
});
router.get('/widgets/transition', function (req, res, next) {
  res.render('bootstrap/widgets/transition');
});
router.get('/widgets/alert', function (req, res, next) {
  res.render('bootstrap/widgets/alert');
});
router.get('/widgets/tooltip', function (req, res, next) {
  res.render('bootstrap/widgets/tooltip');
});    
router.get('/widgets/popover', function (req, res, next) {
  res.render('bootstrap/widgets/popover');
});
router.get('/widgets/modal', function (req, res, next) {
  res.render('bootstrap/widgets/modal');
});
router.get('/widgets/dropdown', function (req, res, next) {
  res.render('bootstrap/widgets/dropdown');
});
router.get('/widgets/scrollspy', function (req, res, next) {
  res.render('bootstrap/widgets/scrollspy');
});
router.get('/widgets/tab', function (req, res, next) {
  res.render('bootstrap/widgets/tab');
});
router.get('/widgets/collapse', function (req, res, next) {
  res.render('bootstrap/widgets/collapse');
});
router.get('/widgets/carousel', function (req, res, next) {
  res.render('bootstrap/widgets/carousel');
});
router.get('/widgets/affix', function (req, res, next) {
  res.render('bootstrap/widgets/affix');
});
router.get('/widgets/button', function (req, res, next) {
  res.render('bootstrap/widgets/button');
});


router.get('/quickuse/grid', function (req, res, next) {
  res.render('bootstrap/quickuse/grid');
});
router.get('/quickuse/layout', function (req, res, next) {
  res.render('bootstrap/quickuse/layout');
});









module.exports = router;
