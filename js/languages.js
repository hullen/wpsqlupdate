/**
* WP SQL UPDATE GENERATOR
* 
* Translate the page content whenever the user want to change de language.
* Portuguese is the default language
*
* @contributor: Fernando Porazzi | twitter: @fernandoporazzi
* 
* August - 2013
*
*/

var languages = {
	"pt": {
		"title": "Gerador de update de URL no WordPress",
		"subHeading": "Atualize suas URLs no banco de dados rapidamente",
		"description": "Este projeto gera uma Query para atualizar as URLs no banco de dados quando você publicar sua aplicação",
		"usage": "Digite suas URLs nos inputs abaixo e click em Gerar:",
		"labels": {
			"oldLabel": "URL Antiga",
			"newLabel": "URL Nova"
		},
		"submit": "Gerar ;)",
		"author": "Desenvolvido por"
	},

	"en":{
		"title": "Wordpress URL Update Generator",
		"subHeading": "Update yours URLs on the database quickly!",
		"description": "This project generates a MySQL Query to update the URLs on the database when you deploy your application",
		"usage": "Enter the URLs in the following inputs and press generate:",
		"labels": {
			"oldLabel": "Old URL",
			"newLabel": "New URL"
		},
		"submit": "Generate ;)",
		"author": "Developed by"
	}
}

var Lang = {
	obj: false,

	setLanguage: function (userLanguage) {
		if (userLanguage === 'pt') {
			this.obj = languages.pt;
		} else {
			this.obj = languages.en;
		}

		this.changeLanguage();
	},

	changeLanguage: function () {
		this._('heading-1').innerHTML = this.obj.title;
		this._('heading-2').innerHTML = this.obj.subHeading;
		this._('desc').innerHTML = this.obj.description;
		this._('usage').innerHTML = this.obj.usage;
		this._('old-label').innerHTML = this.obj.labels.oldLabel;
		this._('new-label').innerHTML = this.obj.labels.newLabel;
		this._('generate').innerHTML = this.obj.submit;
		this._('dev-by').innerHTML = this.obj.author;
	},

	_: function (el) {
		return document.getElementById(el);
	}
};

var flags = document.querySelectorAll('.flags');

for (var i = 0; i < flags.length; i++) {
	flags[i].onclick = function () {
		Lang.setLanguage(this.id);
	}
}

Lang.setLanguage('pt');