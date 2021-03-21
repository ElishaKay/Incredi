
export async function getAllArticles() {
    const response = await fetch('/api/articles');
    return await response.json();
}

export async function getCategoryArticles(category) {
	console.log('category in getCategoryArticles service', category);

    const response = await fetch(`/api/articles/category/${category}`);
    return await response.json();
}

export async function getCountryArticles(country) {
	console.log('country in getCountryArticles service', country);

    const response = await fetch(`/api/articles/country/${country}`);
    return await response.json();
}

export async function getCountryArticlesByIP(ip) {
	console.log('IP in getCountryArticlesByIP service', ip);

    const response = await fetch(`/api/articles/countrybyip/${ip}`);
    return await response.json();
}
