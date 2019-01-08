const mongoose = require('mongoose')
//Schema no mongo DB criado e exportado
const Rapper = mongoose.model('Rapper')

module.exports = {
	//Mostrar todos os rappers
	async index (req, res) {
		const {page = 1} = req.query //Mostrar a pagina 1 primeiro
		const rappers = await Rapper.paginate({}, { page, limit: 10}) //(WHERE, pagina atual, limite de objetos por pagina)

		return res.json(rappers)
	}
}



