import fs from 'fs';
import path from'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, '../database/db.json');

export default class VendedorModel {
  static _readDB() {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  }

  static _writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  }

  // READ - Listar todos
  static listarTodos() {
    return this._readDB().vendedores;
  }

  // READ - Buscar por ID
  static buscarPorId(id) {
    const db = this._readDB();
    return db.vendedores.find(v => v.id === Number(id));
  }

  // UPDATE - Atualizar dados do vendedor
  static atualizar(id, novosDados) {
    const db = this._readDB();
    const index = db.vendedores.findIndex(v => v.id === Number(id));

    if (index !== -1) {
      // Mescla os dados antigos com os novos, mantendo o ID original
      db.vendedores[index] = { ...db.vendedores[index], ...novosDados, id: Number(id) };
      this._writeDB(db);
      return db.vendedores[index];
    }
    return null;
  }

  // DELETE - Remover vendedor
  static deletar(id) {
    const db = this._readDB();
    const novaLista = db.vendedores.filter(v => v.id !== Number(id));
    
    if (novaLista.length < db.vendedores.length) {
      db.vendedores = novaLista;
      this._writeDB(db);
      return true;
    }
    return false;
  }
}
