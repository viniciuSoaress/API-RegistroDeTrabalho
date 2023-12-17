import { Router } from "express";
import CreateRegister from "../../core/diaTrabalhado/service/CreateRegister";

export default class CreateController {
  constructor(
    readonly server: Router,
    casoDeUso: CreateRegister
  ){
    server.post('/', async (req, res, next) => {
      try {
        const {idFuncionario, idDiaDaSemana} = req.body

        const create = await casoDeUso.handle({idDiaDaSemana, idFuncionario})

        res.send(create)
      } catch (error) {
        next(error)
      }
    })
  }
}