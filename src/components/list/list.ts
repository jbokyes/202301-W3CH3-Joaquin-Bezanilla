/* eslint-disable no-unused-vars */
import { PetStructure } from '../../models/pets';
import { Component } from '../component/component';
import './list.scss';

export class Pets extends Component {
  constructor(public selector: string, public pets: PetStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.pets
      .map(
        (item) => `
        <div class = "cardbody">
        <li class="card">
          <img class="img" src="../img/${item.name}.jpg" alt="">
          <span>${item.name}, </span>
          <span title="">${item.id}, </span>
          <span>${item.breed}</span>
        </li>
        </div>`
      )
      .join('\n');
    return `
    <section class="tasks"><ul>${items}</ul></section>
    `;
  }
}
