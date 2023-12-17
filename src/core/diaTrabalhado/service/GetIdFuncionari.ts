import CasoDeUso from "../../shared/CasoDeUso";
import DiaTrabalhado from "../model/DiaTrabalhado";
import PrismaRepo from "./PrismaRepo";

export default class GetIdFuncionario implements CasoDeUso<number, DiaTrabalhado[]>{

  constructor(private readonly prismaRepo: PrismaRepo){}

  async handle(dado: number): Promise<DiaTrabalhado[]> {
    return await this.prismaRepo.getUser(dado)
  }
}


