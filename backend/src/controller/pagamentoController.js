import Vendedor from '../model/Vendedor.js';

// GET - Listar
export const listarVendedores = (req, res) => {
    const vendedores = Vendedor.listarTodos();
    res.json(vendedores);
};

// GET - Buscar um
export const buscarVendedor = (req, res) => {
    const vendedor = Vendedor.buscarPorId(req.params.id);
    vendedor ? res.json(vendedor) : res.status(404).json({ erro: "Não encontrado" });
};

// PUT - Atualizar (ex: mudar % de comissão)
export const atualizarVendedor = (req, res) => {
    const atualizado = Vendedor.atualizar(req.params.id, req.body);
    atualizado ? res.json(atualizado) : res.status(404).json({ erro: "Não encontrado" });
};

// DELETE - Remover
export const excluirVendedor = (req, res) => {
    const excluiu = Vendedor.deletar(req.params.id);
    excluiu ? res.status(204).send() : res.status(404).json({ erro: "Não encontrado" });
};

export const processarPagamento = (req, res) => {
    const { vendedorId, valorTotal } = req.body;

    // 1. Busca os dados através do Model
    const vendedor = Vendedor.buscarPorId(vendedorId);
    
    if (!vendedor) {
        return res.status(404).json({ erro: "Vendedor não encontrado no sistema." });
    }

    // 2. Regra de Negócio: Cálculo do Split
    const valorComissao = (valorTotal * vendedor.comissao_percentual) / 100;
    const valorLiquidoVendedor = valorTotal - valorComissao;
    const novoSaldo = vendedor.saldo + valorLiquidoVendedor;

    const novaTransacao = {
        id: Date.now(),
        vendedorId,
        valorBruto: valorTotal,
        split: { plataforma: valorComissao, vendedor: valorLiquidoVendedor },
        data: new Date().toISOString()
    };

    // 3. Salva as alterações através do Model
    Vendedor.atualizarSaldoESalvarTransacao(vendedorId, novoSaldo, novaTransacao);

    res.status(201).json({
        mensagem: "Split de pagamento realizado!",
        detalhes: novaTransacao
    });
};
