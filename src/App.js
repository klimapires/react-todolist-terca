import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {

  render() {
    
    var UmaListaDeTarefa = {
        titulo: "Linguagens de programação para aprender",
        tarefas: [
          {
            descricao: "Javascript",
            feito: true
          },
          {
            descricao: "PHP",
            feito: false
          },
          {
            descricao: "C#",
            feito: false
          }
        ]
    };

    var OtaListaDeTarefa = {
        titulo: "Loucuras ",
        tarefas: [
          {
            descricao: "a",
            feito: true
          },
          {
            descricao: "b",
            feito: false
          },
          {
            descricao: "c",
            feito: false
          }
        ]
    };


    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem-vindo ao SENAI</h2>
        </div>
        <Card lista={UmaListaDeTarefa} />
        <Card lista={OtaListaDeTarefa} />
      </div>
    );

  }
}

export default App;
