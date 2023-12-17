import CasoDeUso from "../../shared/CasoDeUso";
import DiaTrabalhado from "../model/DiaTrabalhado";
import PrismaRepo from "./PrismaRepo";


export default class CreateRegister implements CasoDeUso<DiaTrabalhado, void>{

  constructor(private readonly prismaRepo: PrismaRepo) { }

  async handle(dado: DiaTrabalhado): Promise<void> {
    await this.prismaRepo.create(dado)
  }
}