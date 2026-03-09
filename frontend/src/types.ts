//
export interface Vendedor {
  id: number;
  nome: string;
  saldo: number;
  comissao_percentual: number;
}

//
export interface Transacao {
  id: number;
  vendedorId: number;
  valorBruto: number;
  split: {
    plataforma: number;
    vendedor: number;
  };
  data: string;
};
