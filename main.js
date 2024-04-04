

let input = document.querySelector('input');
let output = document.getElementById('output');
const toMetric = document.getElementById('toMetric');
const toImperial = document.getElementById('toImperial');
const toCelsius = document.getElementById('toCelsius');
const toFahrenheit = document.getElementById('toFahrenheit');
const toKelvin = document.getElementById('toKelvin');
const mileToKm = document.getElementById('mileToKm');
const kmToMile = document.getElementById('kmToMile');
const hours = document.getElementById('hours');
const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const USD = document.getElementById('USD');
const TL = document.getElementById('TL');
const IDR = document.getElementById('IDR');
const resetButton = document.getElementById('reset');



const lengthButton = document.getElementById('length').addEventListener('click', (e) => {
	input.style.display = 'block';
	toFahrenheit.style.display = 'none';
	toCelsius.style.display = 'none';
	toKelvin.style.display = 'none';
	hours.style.display = 'none';
	days.style.display = 'none';
	minutes.style.display = 'none';
	mileToKm.style.display = 'none';
	kmToMile.style.display = 'none';
	toMetric.style.display = 'block';
	toImperial.style.display='block';
	USD.style.display = 'none';
	TL.style.display = 'none';
	IDR.style.display = 'none';
	resetButton.style.display = 'block';
	toMetric.addEventListener('click', (e) => {
		output.innerHTML = `${input.value} inch &rarr; ${lengthUnits.imperial.inch()} mm <br>
		${input.value} foot &rarr; ${lengthUnits.imperial.foot()} cm <br>
		${input.value} yard &rarr; ${lengthUnits.imperial.yard()} m <br>
		${input.value} mile &rarr; ${lengthUnits.imperial.mile()} km
		`;
	});
	toImperial.addEventListener('click', (e) => {
		output.innerHTML = `${input.value} mm &rarr; ${lengthUnits.metric.mm()} inch <br>
		${input.value} cm &rarr; ${lengthUnits.metric.cm()} foot <br>
		${input.value} m &rarr; ${lengthUnits.metric.m()} yard <br>
		${input.value} km &rarr; ${lengthUnits.metric.km()} mile
		`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
	
});

const massButton = document.getElementById('mass').addEventListener('click', (e) => {
	input.style.display = 'block';
	toFahrenheit.style.display = 'none';
	toCelsius.style.display = 'none';
	toKelvin.style.display = 'none';
	hours.style.display = 'none';
	days.style.display = 'none';
	minutes.style.display = 'none';
	mileToKm.style.display = 'none';
	kmToMile.style.display = 'none';
	toMetric.style.display = 'block';
	toImperial.style.display='block';
	USD.style.display = 'none';
	TL.style.display = 'none';
	IDR.style.display = 'none';
	resetButton.style.display = 'block';
	toMetric.addEventListener('click', (e) => {
		output.innerHTML = `${input.value} ounce &rarr; ${massUnits.imperial.ounce()} gram <br>
		${input.value} pound &rarr; ${massUnits.imperial.pound()} kg <br>
		${input.value} stone &rarr; ${massUnits.imperial.stone()} kg <br>
		${input.value} ton &rarr; ${massUnits.imperial.imperialTon()} tonne
		`;
	});
	toImperial.addEventListener('click', (e) => {
		output.innerHTML = `${input.value} gram &rarr; ${massUnits.metric.gram()} ounce <br>
		${input.value} kg &rarr; ${massUnits.metric.kglb()} pound <br>
		${input.value} kg &rarr; ${massUnits.metric.kgst()} stone <br>
		${input.value} tonne &rarr; ${massUnits.metric.metricTonne()} ton 
		`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
});

const volumeButton = document.getElementById('volume').addEventListener('click', (e) => {
	input.style.display = 'block';
	toFahrenheit.style.display = 'none';
	toCelsius.style.display = 'none';
	toKelvin.style.display = 'none';
	hours.style.display = 'none';
	days.style.display = 'none';
	minutes.style.display = 'none';
	mileToKm.style.display = 'none';
	kmToMile.style.display = 'none';
	toMetric.style.display = 'block';
	toImperial.style.display='block';
	USD.style.display = 'none';
	TL.style.display = 'none';
	IDR.style.display = 'none';
	resetButton.style.display = 'block';
	toMetric.addEventListener('click', (e) => {
		output.innerHTML = `${input.value} fl. ounce &rarr; ${volumeUnits.imperial.fluidOunce()} ml <br>
		${input.value} pint &rarr; ${volumeUnits.imperial.pint()} litre <br>
		${input.value} quart &rarr; ${volumeUnits.imperial.quart()} litre <br>
		${input.value} gallon &rarr; ${volumeUnits.imperial.gallon()} litre
		`;
	});
	toImperial.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} ml &rarr; ${volumeUnits.metric.ml()} fluid ounce <br>
		${input.value} litre &rarr; ${volumeUnits.metric.lToPt()} pint <br>
		${input.value} litre &rarr; ${volumeUnits.metric.lToQt()} quart <br>
		${input.value} litre &rarr; ${volumeUnits.metric.lToGallon()} gallon
		`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
});

const temperatureButton = document.getElementById('temperature').addEventListener('click', (e) => {
	toMetric.style.display = 'none';
	toImperial.style.display = 'none';
	hours.style.display = 'none';
	days.style.display = 'none';
	minutes.style.display = 'none';
	mileToKm.style.display = 'none';
	kmToMile.style.display = 'none';
	input.style.display = 'block';
	toCelsius.style.display = 'block';
	toFahrenheit.style.display = 'block';
	toKelvin.style.display = 'block';
	USD.style.display = 'none';
	TL.style.display = 'none';
	IDR.style.display = 'none';
	resetButton.style.display = 'block';
	toCelsius.addEventListener('click', (e) =>{
		output.innerHTML =`${input.value} &deg;C &rarr; ${temperatureUnits.celsius.cToF()} &deg;F <br>
		${input.value} &deg;C &rarr; ${temperatureUnits.celsius.cToK()} &deg;K`;
		});
	toFahrenheit.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} &deg;F &rarr; ${temperatureUnits.fahrenheit.fToC()} &deg;C <br>
		${input.value} &deg;F &rarr; ${temperatureUnits.fahrenheit.fToK()} &deg;K <br>
		`;
	});
	toKelvin.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} &deg;K &rarr; ${temperatureUnits.kelvin.kToC()} &deg;C <br>
		${input.value} &deg;K &rarr; ${temperatureUnits.kelvin.kToF} &deg;F <br>
		`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
		
});

const speedButton = document.getElementById('speed').addEventListener('click', (e) => {
	input.style.display = 'block';
	toMetric.style.display = 'none';
	toImperial.style.display = 'none';
	toFahrenheit.style.display = 'none';
	toCelsius.style.display = 'none';
	toKelvin.style.display = 'none';
	hours.style.display = 'none';
	days.style.display = 'none';
	minutes.style.display = 'none';
	mileToKm.style.display = 'block';
	kmToMile.style.display = 'block';
	USD.style.display = 'none';
	TL.style.display = 'none';
	IDR.style.display = 'none';
	resetButton.style.display = 'block';
	mileToKm.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} mph &rarr; ${speedUnits.mphToKmph()} km/hr`;
	});	
	kmToMile.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} km/hr &rarr; ${speedUnits.kmphToMph()} mph`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
});

const timeButton = document.getElementById('time').addEventListener('click', (e) => {
	input.style.display = 'block';
	toMetric.style.display = 'none';
	toImperial.style.display = 'none';
	toFahrenheit.style.display = 'none';
	toCelsius.style.display = 'none';
	toKelvin.style.display = 'none';
	mileToKm.style.display = 'none';
	kmToMile.style.display = 'none';
	hours.style.display = 'block';
	days.style.display = 'block';
	minutes.style.display = 'block';
	USD.style.display = 'none';
	TL.style.display = 'none';
	IDR.style.display = 'none';
	resetButton.style.display = 'block';
	hours.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} hour &rarr; ${timeUnits.days.hrToDay()} day <br>
		${input.value} hour &rarr; ${timeUnits.minutes.hrToMinute()} minute`;
	});
	days.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} day &rarr; ${timeUnits.hours.dayTohr()} hour <br>
		${input.value} day &rarr; ${timeUnits.minutes.dayToMinute()} minute`;
	});
	minutes.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} minute &rarr; ${timeUnits.hours.minTohr()} hour <br>
		${input.value} minute &rarr; ${timeUnits.days.minToDay()} day`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
});

resetButton.addEventListener('click', (e) =>{
	location.reload();
});

const currencyButton = document.getElementById('currency').addEventListener('click', (e) => {
	input.style.display = 'block';
	toMetric.style.display = 'none';
	toImperial.style.display = 'none';
	toFahrenheit.style.display = 'none';
	toCelsius.style.display = 'none';
	toKelvin.style.display = 'none';
	mileToKm.style.display = 'none';
	kmToMile.style.display = 'none';
	hours.style.display = 'none';
	days.style.display = 'none';
	minutes.style.display = 'none';
	USD.style.display = 'block'
	TL.style.display = 'block'
	IDR.style.display = 'block'
	resetButton.style.display = 'block';
	USD.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} USD &rarr; ${currencyUnits.USD.USDtoIDR()} IDR <br>
		${input.value} USD &rarr; ${currencyUnits.USD.USDtoTL()} TL`;
	});
	TL.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} TL &rarr; ${currencyUnits.TL.TLtoUSD()} USD <br>
		${input.value} TL &rarr; ${currencyUnits.TL.TLtoIDR()} IDR`;
	});
	IDR.addEventListener('click', (e) =>{
		output.innerHTML = `${input.value} IDR &rarr; ${currencyUnits.IDR.IDRtoUSD()} USD <br>
		${input.value} IDR &rarr; ${currencyUnits.IDR.IDRtoTL()} TL`;
	});
	output.style.display = 'block';
	output.innerHTML = "";
	input.value = null;
});

resetButton.addEventListener('click', (e) =>{
	location.reload();
});


const lengthUnits = {
	imperial: {
		inch(){
			let inchToMm = (input.value * 25.4).toFixed(2);
			return inchToMm;
		},
		foot(){
			let footToCm = (input.value * 30.48).toFixed(2);
			return footToCm;
		},
		yard(){
			let yardToM = (input.value / 1.094).toFixed(2);
			return yardToM;
		},
		mile(){
			let mileToKm = (input.value * 1.609).toFixed(2);
			return mileToKm;
		}
	},
	metric: {
		mm(){
			let mmToInch  = (input.value / 25.4).toFixed(2);
			return mmToInch;
		},
		cm(){
			let cmToFoot = (input.value / 30.48).toFixed(2);
			return cmToFoot;
		},
		m(){
			let mToYard = (input.value * 1.094).toFixed(2);
			return mToYard;
		},
		km(){
			let kmToMile = (input.value / 1.609).toFixed(2);
			return kmToMile;
		}
	}
};

const massUnits = {
	imperial: {
		ounce(){
			let ounceToGram = (input.value * 28.35).toFixed(2);
			return ounceToGram;
		},
		pound(){
			let poundToKg = (input.value / 2.205).toFixed(2);
			return poundToKg;
		},
		stone(){
			let stoneToKg = (input.value * 6.35).toFixed(2);
			return stoneToKg;
		},
		imperialTon(){
			let tonToTonne = (input.value * 1.016).toFixed(2);
			return tonToTonne;
		}
	},
	metric: {
		gram(){
			let gramToOunce = (input.value / 28.35).toFixed(2);
			return gramToOunce;
		},
		kglb(){
			let kgToPound = (input.value * 2.205).toFixed(2);
			return kgToPound;
		},
		kgst(){
			let kgToStone = (input.value / 6.35).toFixed(2);
			return kgToStone;
		},
		metricTonne(){
			let tonneToTon = (input.value / 1.016).toFixed(2);
			return tonneToTon;
		}
	}
};

const volumeUnits = {
	imperial: {
		fluidOunce(){
			let flozToMl = (input.value * 28.413).toFixed(2);
			return flozToMl;
		},
		pint(){
			let pintToL = (input.value / 1.76).toFixed(2);
			return pintToL;
		},
		quart(){
			let quartToL = (input.value * 1.137).toFixed(2);
			return quartToL;
		},
		gallon(){
			let gallonToL = (input.value * 4.546).toFixed(2);
			return gallonToL;
		}
	},
	metric: {
		ml(){
			let mlToFloz = (input.value / 28.413).toFixed(2);
			return mlToFloz;
		},
		lToPt(){
			let lToPt = (input.value * 1.76).toFixed(2);
			return lToPt;
		},
		lToQt(){
			let lToQt = (input.value / 1.137).toFixed(2);
			return lToQt;
		},
		lToGallon(){
			let lToGallon = (input.value / 4.546).toFixed(2);
			return lToGallon;
		}
		
	}
};

const temperatureUnits = {
	fahrenheit: {
		fToC(){
			let c = ((input.value - 32)* 5/9).toFixed(2);
			return c;
			
		},
		fToK(){
			let k = ((input.value - 32) * 5/9 + 273.15).toFixed(2);
			return k;
		}
	},
	celsius: {
		cToF(){
			let f = ((input.value * 9/5) + 32).toFixed(2);
			return f;
		},
		cToK(){
			//let kconst = 273.15;
			let ck = (parseFloat(input.value) + 273.15).toFixed(2);
			return ck;
			
		}
	},
	kelvin: {
		kToF(){
			let kf = ((input.value - 273.15)* 9/5 + 32).toFixed(2);
			return kf;
		},
		kToC(){
			let kc = (input.value - 273.15).toFixed(2);
			return kc;
		}
	}
	
};

const speedUnits = {
	mphToKmph(){
		let kmph = (input.value * 1.609).toFixed(2);
		return kmph;
	},
	kmphToMph() {
		let mph = (input.value / 1.609).toFixed(2);
		return mph;
	}
};

const timeUnits = {
	hours: {
		minTohr(){
			let mhr = (input.value/60).toFixed(3);
			return mhr;
		},
		dayTohr(){
			let dhr = (input.value*24).toFixed(3);
			return dhr;
		}
	},
	days: {
		minToDay(){
			let mday = (input.value / 1440).toFixed(4);
			return mday;
		},
		hrToDay(){
			let hrday = (input.value / 24).toFixed(2);
			return hrday;
		}
	},
	minutes: {
		hrToMinute(){
			let hrmin = (input.value * 60).toFixed(2);
			return hrmin;
		},
		dayToMinute(){
			let daymin = (input.value * 1440).toFixed(2);
			return daymin;
		}
	}
};

const currencyUnits = {
	USD: {
		USDtoTL(){
			let USDTL = (input.value*31.89).toFixed(2);
			return USDTL;
		},
		USDtoIDR(){
			let USDIDR = (input.value*15868.99).toFixed(2);
			return USDIDR;
		}
	},
	TL: {
		TLtoUSD(){
			let TLUSD = (input.value / 31.89).toFixed(2);
			return TLUSD;
		},
		TLtoIDR(){
			let TLIDR = (input.value * 497.64).toFixed(2);
			return TLIDR;
		}
	},
	IDR: {
		IDRtoUSD(){
			let IDRUSD = (input.value / 15868.99).toFixed(2);
			return IDRUSD;
		},
		IDRtoTL(){
			let IDRTL = (input.value / 497.64).toFixed(2);
			return IDRTL;
		}
	}
};



