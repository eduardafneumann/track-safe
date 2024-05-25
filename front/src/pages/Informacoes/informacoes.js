import "./informacoes.css";

import React, { useState, useEffect } from "react";

function Informacoes() {
  const canais_denuncia = [
    { nome: "Canal de Denúnicias", endereco: "180", link: false },
    {
      nome: "Canal do Telegram",
      endereco:
        "Basta acessar o aplicativo, digitar na busca “DireitosHumanosBrasil”",
      link: false,
    },
    { nome: "Whatshapp", endereco: "+55 61 99611-0100", link: false },
    {
      nome: "Videochamada em Libras para denúncia",
      endereco: "https://atendelibras.mdh.gov.br/acesso",
      link: true,
    },
  ];

  return (
    <div className="informacoes-body">
      <h1 className="informacoes-title">Informações</h1>

      <h2 className="informacoes-subtitle">
        Leia mais sobre os tipos de violência de gênero
      </h2>

      <p className="informacoes-paragraph">
        Acesse{" "}
        <a
          href="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html"
          target="_blank"
        >
          a página do Instituto Maria da Penha
        </a>
        .
      </p>

      <h2 className="informacoes-subtitle">
        Violência de gênero <b>é crime</b>, sua denúncia é importante!
      </h2>

      <div className="channels">
        <table className="channels-table">
          <tbody>
            {canais_denuncia.map((item) => (
              <tr>
                <td className="channel-name">
                  <b>{item.nome}</b>
                </td>
                {item.link ? (
                  <td className="channel-adress">
                    <a href={item.endereco} target="_blank">
                      Clique aqui
                    </a>
                  </td>
                ) : (
                  <td className="channel-adress">{item.endereco}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Informacoes;
