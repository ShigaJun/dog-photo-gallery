export async function fetchImages(breed) {
    const response = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random/12`
    );
    const data = await response.json();
    console.log(data.message);
    return data.message;
}