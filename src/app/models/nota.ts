export class Nota {

  constructor(
    public chaveNfe:string,
    public cnpjRemetente: string,
    public razaoSocial: string,
    public serie: string,
    public numeroNota: string,
    public armazem: string,
    public cnpjDestinatario: string,
    public dataPriorizacao: string,
    public solicitante: string,
    public usuario: string,
    public obs: string

  ){

  }

}
