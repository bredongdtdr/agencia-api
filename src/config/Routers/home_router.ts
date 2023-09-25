import { Router } from 'express'

export default (router: Router): void => {
    router.post('/', (request, Response)=>
    Response.json({ola: 'Esta é uma rota principal'}))
}