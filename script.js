const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// Complete list of fruits to use for this project. Added emojis if found

const fruit = [
	'Apple 🍎', 
	'Apricot',
	'Avocado \u{1F951}', 
	'Banana 🍌', 
	'Bilberry', 
	'Blackberry', 
	'Blackcurrant', 
	'Blueberry 🫐', 
	'Boysenberry', 
	'Currant', 
	'Cherry 🍒', 
	'Coconut 🥥', 
	'Cranberry', 
	'Cucumber \u{1F952}', 
	'Custard apple', 
	'Damson', 
	'Date', 
	'Dragonfruit', 
	'Durian', 
	'Elderberry', 
	'Feijoa', 
	'Fig', 
	'Gooseberry', 
	'Grape \u{1F347}', 
	'Raisin', 
	'Grapefruit', 
	'Guava', 
	'Honeyberry', 
	'Huckleberry', 
	'Jabuticaba', 
	'Jackfruit', 
	'Jambul', 
	'Juniper berry', 
	'Kiwifruit \u{1F95D}', 
	'Kumquat', 
	'Lemon \u{1F34B}', 
	'Lime', 
	'Loquat', 
	'Longan', 
	'Lychee', 
	'Mango \u{1F96D}', 
	'Mangosteen', 
	'Marionberry', 
	'Melon \u{1F348}', 
	'Cantaloupe', 
	'Honeydew', 
	'Watermelon \u{1F349}', 
	'Miracle fruit', 
	'Mulberry', 
	'Nectarine', 
	'Nance', 
	'Olive 🫒', 
	'Orange 🍊', 
	'Clementine', 
	'Mandarine', 
	'Tangerine \u{1F34A}', 
	'Papaya', 
	'Passionfruit', 
	'Peach \u{1F351}', 
	'Pear \u{1F350}', 
	'Persimmon', 
	'Plantain', 
	'Plum ', 
	'Pineapple \u{1F34D}', 
	'Pomegranate', 
	'Pomelo', 
	'Quince', 
	'Raspberry', 
	'Salmonberry', 
	'Rambutan', 
	'Redcurrant', 
	'Salak', 
	'Satsuma', 
	'Soursop', 
	'Star fruit', 
	'Strawberry 🍓', 
	'Tamarillo', 
	'Tamarind', 
	'Yuzu',];

function search(inputValue) {

	let results = [];

	for (let fruitItem of fruit) {

		// Because I don't know the user inputs, it is safe to convert everything to lowercase and create new variables
		let inputValuelower = inputValue.toLowerCase()
		let fruitItemLower = fruitItem.toLowerCase()

		// If any part of the input is included in a fruit's array name it will be added
		if (fruitItemLower.includes(inputValuelower)) {
			results.push(fruitItem)//I want to add the fruitItem NOT the fruitItemLower
		}
	}
	return results;
}

function searchHandler(e) {

	//Isolate the input value to a variable for future use
	const inputValue = e.target.value.trim()

	//If nothing is typed, no suggestions will appear
	if (inputValue === '') {
		suggestions.innerHTML = ''
		return
	} else {
		//pass the results of the typing to the search function
		const results = search(inputValue)
		//pass values to the show suggestions to make options appear below. 
		showSuggestions(results, inputValue)
	}
}

function showSuggestions(results) {
	suggestions.innerHTML = ''//Reset suggestions

	//Go over the results array to add element
	for (let result of results) {
		const li = document.createElement('li')
		li.textContent = result
		suggestions.appendChild(li)//Finally add
	}
}

function useSuggestion(e) {
	const clickedSuggestion = e.target.textContent
	input.value = clickedSuggestion
	suggestions.innerHTML = ''
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
