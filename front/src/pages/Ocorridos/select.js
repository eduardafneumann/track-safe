import "./ocorridos.css";

import React, { useState } from "react";

function Select({ name, value, handleChange }) {
  if (name == "tipo") {
    return (
      <select name={name} value={value} onChange={handleChange}>
        <option value=""></option>
        <option value="Física">Física</option>
        <option value="Sexual">Sexual</option>
        <option value="Psicológica">Psicológica</option>
      </select>
    );
  } else {
    return (
      <select name={name} value={value} onChange={handleChange}>
        <option value=""></option>
        <option value="Parda">Parda</option>
        <option value="Preta">Preta</option>
        <option value="Indígena">Indígena</option>
        <option value="Branca">Branca</option>
        <option value="Amarela">Amarela</option>
      </select>
    );
  }
}

export default Select;
