/** @format */

export function defineStrengthPassword(password: string, indicator: number) {
	let strengthIndicator: number = indicator;

	let upper = false,
		lower = false,
		numbers = false;

	for (let index = 0; index < password.length; index++) {
		let char = password.charCodeAt(index);
		if (!upper && char >= 65 && char <= 90) {
			upper = true;
			strengthIndicator++;
		}

		if (!numbers && char >= 48 && char <= 57) {
			numbers = true;
			strengthIndicator++;
		}

		if (!lower && char >= 97 && char <= 122) {
			lower = true;
			strengthIndicator++;
		}
	}

	switch (strengthIndicator) {
		case 0:
			return { value: "weak", indicator: strengthIndicator };
		case 1:
			return { value: "medium", indicator: strengthIndicator };
		case 2:
			return { value: "strong", indicator: strengthIndicator };
		default:
			return { value: "weak", indicator: -1 };
	}
}
