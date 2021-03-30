// užduotis:

// 1. sukurti konstruktoriaus funkciją 'notebook'. 'notebook' turi 2 parametrus: totalPages, usedPages
// 2. sukurti metodą use kuris panaudotus puslapius padidina nurodytu kiekiu puslapių ir naują panaudotų puslapių puslapių skaičių atspausdina konsolėje
// 3. sukurti metodą leftPages kuris paskaičiuoja kiek laisvų puslapių liko ir atsakymą atspausdina konsolėje
// 4. sukurti du notebook objektus (instances): first ir second ir juos atspausdinti 
// 5. su abiem objektais išbandyti use ir leftPages metodus su abiem objektais.

// ----------------1---------------


// function Notebook(totalPages,usedPages) {
// 	this.totalPages = totalPages;
// 	this.usedPages = usedPages;
// }
// Notebook.prototype.use = function(num) {
// 	this.usedPages += num;
// 	console.log(this.usedPages);
// }
// Notebook.prototype.leftPages = function() {
// 	console.log(this.totalPages - this.usedPages);
// }
// let first = new Notebook(100,10);
// let second = new Notebook(200,20);

// first.use(10);
// second.use(20);

// first.leftPages();
// second.leftPages();

// ------------------------------


// užduotis:

// 1. perkurti 1 užduoties kodą šį kartą naudojant ES6 klases

	// 2. pridėti getter metodą getInfo kuris konsolėje atspausdina tokį sakinį: this notebook has total pages of \totalPages\. Used pages: \usedPages\ (pasvirieji brūkšniai žymi kur rašomos kintamojo rekšmės)
	// 3. pridėti setter metodą add kuris leidžia į notebook prie esamų pridėti naujus tuščius puslapius (puslapių skaičius perduodamas parametru), bei atspausdina totalPages;

// ---------------2--------------	

// class Notebook {
// 	constructor(totalPages,usedPages) {
// 		this.totalPages = totalPages
// 		this.usedPages = usedPages
// 	}
// 	use(num) {
// 		this.usedPages += num;
// 		console.log(this.usedPages);
// 	}
// 	leftPages() {
// 		console.log(this.totalPages - this.usedPages);
// 	}
// 	get getInfo() {
// 		console.log(`this notebook has total pages of ${this.totalPages}. Used pages: ${this.usedPages}`)
// 	}
// 	set add(n) {
// 		this.totalPages = this.totalPages + n
// 		console.log(this.totalPages)
// 	}
// }

// let first = new Notebook(100,10);

// first.use(10);

// first.leftPages();

// first.add = 11

// first.getInfo

// -------------------------------
// papildoma:
// jei pavyko greitai įgyvendinti pirmąją dalį, papildoma užduotis:
// perkurti 1 užduoties (konstruktoriaus funkcijos) kodą su create.object
// -----------papildoma----------


const notebook = {
	properties(totalPages, usedPages) {
		this.totalPages = totalPages
		this.usedPages = usedPages
	},
	use(num) {
		this.usedPages += num;
		console.log(this.usedPages);
	},
	leftPages() {
		console.log(this.totalPages - this.usedPages);
	}


}

const first = Object.create(notebook)
first.properties(100,10)

first.use(10)
first.leftPages()
console.log(first)

// naudojant ES6 klases

// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h), 
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)
// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus
// 5. 'car' pridėti metodą 'blink' kuris konsolėje atspausdina 'blink blink'
// 6. 'bicycle' pridėti metodą 'beep' kuris konsolėje atsapaudina 'beep beep'