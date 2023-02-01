/* eslint-disable no-unused-vars */
import { Pets } from './components/list/list';
import { PET } from './mocks/pets';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

const addPets = new Pets('main', PET);
const addHeader = new Header('header');
const addFooter = new Footer('footer');
