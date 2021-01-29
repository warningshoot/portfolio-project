function multiplying(liczba1, liczba2) {
	parsing(liczba1);
	parsing(liczba2);

	let arr = [];

	for (let i = 0; i < liczba2.length; i++) {
		arr.push([]);
		for (let j = 0; j < liczba1.length; j++) {
			arr[i].push(liczba2[i] * liczba1[j]);
		}
	}
	arr = arr.reverse();

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			arr[i].push(0);
		}

		for (let j = i; j <= arr.length - 1; j++) {
			arr[i].unshift(0);
		}
	}

	preparing(arr);

	let newArr = [];
	let rest = 0;

	for (let i = arr[0].length - 1; i >= 0; i--) {
		let temp = 0;
		for (let j = arr.length - 1; j >= 0; j--) {
			temp += arr[j][i];
		}
		temp += rest;
		rest = Math.floor(temp / 10);
		temp %= 10;
		newArr.unshift(temp);
	}
	let iterator = 0;
	while (newArr[iterator] === 0) {
		newArr.shift();
	}

	return newArr.join("");
}

function parsing(liczby) {
	liczby = liczby.split("");

	for (let i = 0; i < liczby.length; i++) {
		liczby[i] = parseInt(liczby[i]);
	}

	return liczby;
}

function preparing(arr) {
	for (let i = 0; i < arr.length; i++) {
		let rest = 0;
		for (let j = arr[i].length - 1; j >= 0; j--) {
			arr[i][j] += rest;
			rest = Math.floor(arr[i][j] / 10);
			arr[i][j] %= 10;
		}
	}
}

const getFactorial = (nrSilni) => {
	let silnia = "1";
	for (let i = 1; i <= nrSilni; i++) {
		silnia = multiplying(silnia, i.toString());
	}
	return silnia;
};

export default getFactorial;
