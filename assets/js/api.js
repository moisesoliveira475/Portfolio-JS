async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/moisesoliveira475/Portfolio-JS/main/data/profile.json'

    const fetching = await fetch(url)
    return await fetching.json()
}