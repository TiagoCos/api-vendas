import express from 'express'


let server = express()

server.use(express.json())

server.listen(3333, () => {
    console.log('servidor iniciado')
})