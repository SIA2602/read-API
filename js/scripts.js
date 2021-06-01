const app = document.getElementById('root')

//const logo = document.createElement('img')
//logo.src = 'assets/img/imageGafisa.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')

//app.appendChild(logo)
app.appendChild(container)

// Replace ./data.json with your JSON feed
fetch('https://my-json-server.typicode.com/tractian/fake-api/assets')

    .then((response) => {
        return response.json()
    })

    .then((data) => {       
        for(var i=0; i<data.length; i++){
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = data[i].name

            console.log(data.length)

            const p = document.createElement('p')      
            p.textContent = data[i].status

            const ola = document.createElement('p')      
            ola.textContent = data[i].healthscore

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
            card.appendChild(ola)
        }     
    })

    .catch((err) => {
    
    })
