import app from '../config/app'

// type Pessoa = {
//   nome: string
//   email: string
// }

// const listPessoas: Pessoa[] = []

// router.post('/formulario', (request, response) => {
//   // const { nome, email } = request.body
//   listPessoas.push({ nome: request.body.nome, email: request.body.email })
//   return response.status(201).json({}) // CREATED
// })

// router.get('/carregar', (request, response) => {
//   listPessoas.push({ nome: 'Lucas Ribeiro', email: 'lucasribeiro@gmail.com' })
//   listPessoas.push({ nome: 'Patricia Cardoso', email: 'patriciacardoso@gmail.com' })
//   listPessoas.push({ nome: 'Maria Silva', email: 'mariasilva@gmail.com' })
//   return response.json({ list: listPessoas })
// })

app.listen(3000, () => { console.log('Running port 3000') })