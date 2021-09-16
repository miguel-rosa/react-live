import React from "react";
import "./styles.css";

function Pessoa ({
  nome,
  idade,
  altura,
  gostaDeProgramar,
  livrosFavoritos
}) {
  return (
    <div className="pessoa">
      <p className="text">Nome: {nome}</p>
      <p className="text">Idade: {idade}</p>
      <p className="text">Altura: {altura}</p>
      <p className="text">Gosta de Programar? {gostaDeProgramar ? "Sim" : "Não"}</p>
      <p className="text">Livros Favoritos:</p>
      <ul className="list">
        {
          livrosFavoritos.map((livro) => (
          <li className="list__item">
            {livro}
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pessoa;