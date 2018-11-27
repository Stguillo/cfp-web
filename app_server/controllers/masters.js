/* GET home page */
const masters = function(req, res){
  res.render('masters', { title: 'Centro de Formaci&oacute;n Permanente. Universitat Polit&egrave;cnica de Val&egrave;ncia. Cursos, Masters, Congresos y Jornadas' });
};

module.exports = {
  masters
};