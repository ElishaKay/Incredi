
export async function getPercentageDifferences() {
    const response = await fetch(`/api/sums-per-parent`);
    return await response.json();
}

export async function getSumsPerParentPerYear(category) {
    const response = await fetch(`/api/percentage-difference-per-date`);
    return await response.json();
}