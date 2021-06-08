const app = document.getElementById('root')

//const logo = document.createElement('img')
//logo.src = 'assets/img/imageGafisa.jpg'

const container = document.createElement('div')
container.setAttribute('class', 'container')
container.setAttribute('id', 'id01')

const container01 = document.createElement('div')
container01.setAttribute('class', 'container01')

//app.appendChild(logo)
app.appendChild(container)

app.appendChild(container01)


function imprime(){
    return(alert("Ola"))
}

function oculta(){
   document.getElementById('id01').style.display = "none"
}

// Replace ./data.json with your JSON feed
fetch('https://my-json-server.typicode.com/tractian/fake-api/assets')

    .then((response) => {
        return response.json()
    })

    .then((data) => {    

        const card01 = document.createElement('div')
        card01.setAttribute('class', 'card')   
        const botao = document.createElement('button')
        botao.textContent = 'Click'
        botao.onclick = oculta 
        container01.appendChild(card01)           
        card01.appendChild(botao)        

        for(var i=0; i<data.length; i++){
            const card = document.createElement('div')
            card.setAttribute('class', 'card')            

            const h8 = document.createElement('h8')
            h8.textContent = data[i].name

            console.log(data.length)

            const p = document.createElement('p')      
            p.textContent = data[i].status

            const ola = document.createElement('p')      
            ola.textContent = data[i].healthscore

            const botao = document.createElement('button')
            botao.textContent = 'Ola'
            botao.onclick =  imprime           

            container.appendChild(card)
            card.appendChild(h8)
            card.appendChild(botao)
            card.appendChild(p)
            card.appendChild(ola)
        } 

        for(var i=0; i<data.length; i++){
            const card = document.createElement('div')
            card.setAttribute('class', 'card')            

            const h8 = document.createElement('h8')
            h8.textContent = data[i].name

            console.log(data.length)

            const p = document.createElement('p')      
            p.textContent = data[i].status

            const ola = document.createElement('p')      
            ola.textContent = data[i].healthscore

            const botao = document.createElement('button')
            botao.textContent = 'Ola'
            botao.onclick =  imprime           

            container01.appendChild(card)
            card.appendChild(h8)
            card.appendChild(botao)
            card.appendChild(p)
            card.appendChild(ola)
        }            
    })

    .catch((err) => {
    
    })