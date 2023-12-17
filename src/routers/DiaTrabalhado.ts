import { Router } from "express";
import RepositorioPrisma from "../external/RepositorioPrisma";
import CreateRegister from "../core/diaTrabalhado/service/CreateRegister";
import CreateController from "../adaptter/diaTrabalhado/CreateController";
import GetRegisters from "../core/diaTrabalhado/service/GetRegisters";
import GetController from "../adaptter/diaTrabalhado/GetController";
import GetIdDiaDaSemana from "../core/diaTrabalhado/service/GetIdDiaDaSemana";
import GetDiaController from "../adaptter/diaTrabalhado/GetDiaController";
import GetIdFuncionario from "../core/diaTrabalhado/service/GetIdFuncionari";
import GetFuncionarioController from "../adaptter/diaTrabalhado/GetFuncionarioController";

export const routerDiaT = Router()

const prisma = new RepositorioPrisma()

const cretae = new CreateRegister(prisma)
new CreateController(routerDiaT, cretae)


const get = new GetRegisters(prisma)
new GetController(routerDiaT, get)

const getDay = new GetIdDiaDaSemana(prisma)
new GetDiaController(routerDiaT, getDay)

const getFuncionario = new GetIdFuncionario(prisma)
new GetFuncionarioController(routerDiaT, getFuncionario)