import React, { Component } from 'react';

class CardListItem extends Component {
  render() {

    return (
      <li>
        <input type="checkbox" />
        <p>
          Trazer o meu guarda-chuva
        </p>
      </li>
    );
  }
}

export default CardListItem;
