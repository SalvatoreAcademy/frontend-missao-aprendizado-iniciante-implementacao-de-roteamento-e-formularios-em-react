export default function Create() {
  return (
    <div>
      <h1>Criar DevMon</h1>

      <form>
        <div>
          <label htmlFor="nome">Nome*:</label><br />
          <input type="text" id="nome" name="nome" placeholder="Insira o nome" />
        </div>

        <div>
          <label htmlFor="imagem">Imagem (URL)*:</label><br />
          <input type="text" id="imagem" name="imagem" placeholder="Insira a URL da imagem" />
        </div>

        <div>
          <label htmlFor="evoluiPara">Evolui Para (opcional):</label><br />
          <input type="text" id="evoluiPara" name="evoluiPara" placeholder="Insira o nome da evolução" />
        </div>

        <div>
          <button type="submit">Criar</button>
          <button type="reset">Reiniciar</button>
        </div>
      </form>
    </div>
  )
}
