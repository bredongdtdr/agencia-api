import express, { Router } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
app.use(router)

type pessoa = {
nome:string
email:string
}

// GET, POST, PUT, DELETE, PATCH
router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'Brendon' }))

  router.post('/carregar', (request, response) =>{
  // nome, email
  const { nome, email} = request.body
  return response.json({nome, email})
})
router.get('/carregar', (request, response) => {
  const list: string[] = []
  list.push('lucas ribeiro')
  list.push('camilo de sousa')
  list.push('maria clara')

  return response.json({ list })
})

app.listen(3000, () => { console.log('Running port 3000') })

