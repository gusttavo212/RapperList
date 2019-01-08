const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
//Modelo do banco de dados

//Modelo do Schema 1
const RapperSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	inLife: {
		type: Boolean,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
})

//Paginar os resultados
RapperSchema.plugin(mongoosePaginate)

//Exportar o schema
mongoose.model('Rapper', RapperSchema)
