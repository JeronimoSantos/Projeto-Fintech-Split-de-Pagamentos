import assert from 'node:assert';
import test from 'node:test';

const BASE_URL = 'http://localhost:3000/pagamentos';

test('Fluxo Completo da Fintech API', async (t) => {
  
  // 1. Testar Listagem Inicial
  await t.test('Deve listar os vendedores iniciais', async () => {
    const response = await fetch(`${BASE_URL}/vendedores`);
    const dados = await response.json();
    assert.strictEqual(response.status, 200);
    assert.ok(Array.isArray(dados), 'Deveria retornar um array');
  });

  // 2. Testar o Split de Pagamento (POST)
  await t.test('Deve processar um split de pagamento de R$ 200', async () => {
    const payload = { vendedorId: 1, valorTotal: 200 };
    const response = await fetch(`${BASE_URL}/split`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    const resultado = await response.json();
    assert.strictEqual(response.status, 201);
    // Se a comissão é 10%, o vendedor deve receber 180
    assert.strictEqual(resultado.detalhes.split.vendedor, 180);
  });

  // 3. Testar Atualização de Comissão (PUT)
  await t.test('Deve atualizar a comissão do vendedor', async () => {
    const response = await fetch(`${BASE_URL}/vendedores/1`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comissao_percentual: 20 })
    });
    
    const atualizado = await response.json();
    assert.strictEqual(atualizado.comissao_percentual, 20);
  });

  // 4. Testar Erro de Vendedor Inexistente
  await t.test('Deve retornar 404 para vendedor inexistente', async () => {
    const response = await fetch(`${BASE_URL}/vendedores/999`);
    assert.strictEqual(response.status, 404);
  });
});
