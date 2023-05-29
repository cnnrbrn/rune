export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function get(key) {
	return JSON.parse(localStorage.setItem(key));
}

export function remove(key) {
	localStorage.removeItem(key);
}
