const mongoose = require('mongoose')
//Schema no mongo DB criado e exportado
const Rapper = mongoose.model('Rapper')

module.exports = {
	//Mostrar todos os rappers
	async index (req, res) {
		const {page = 1} = req.query //Mostrar a pagina 1 primeiro
		const rappers = await Rapper.paginate({}, { page, limit: 10}) //(WHERE, pagina atual, limite de objetos por pagina)

		return res.json(rappers)
	},
	//Mostrar um rapper especifico pelo ID
	async show (req, res) {
		//Await = esperar
		const rapper = await Rapper.findById(req.params.id)
		return res.json(rapper)
	},

	async create(req, res) {
		const createRapper = await Rapper.create(req.body)

		return res.json(createRapper)
	},

	async update(req, res){
		const updateRapper = await Rapper.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

		return res.json(updateRapper)
	},

	async destroy(req, res){
		await Rapper.findByIdAndRemove(req.params.id)

		return res.send()
	}
}



