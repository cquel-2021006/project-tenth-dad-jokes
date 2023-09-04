const jokeText = document.getElementById('joke')
const jokebtn = document.getElementById('button')

jokebtn.addEventListener('click', generateJoke)


generateJoke()

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    jokeText.innerHTML = data.joke
}

