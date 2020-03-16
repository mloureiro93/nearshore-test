import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import Navbar from './components/Navbar'
import ReactDOM from 'react-dom'
import Jumbotron from './components/Jumbotron';
import Title from './components/Title';
import Cards from './components/Cards';
import Footer from './components/Footer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders navbar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar></Navbar>, div)
})

it('renders header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header></Header>, div)
})

it('renders jumbotron without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jumbotron></Jumbotron>, div)
})

it('renders cards without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards></Cards>, div)
})

it('renders footer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer></Footer>, div)
})




it('renders header correctly', () => {
  const {getByTestId} = render(<Header/>);
  expect(getByTestId('header')).toHaveTextContent('BLOCKCHAINCONSORTIUM')
})

it('renders navbar correctly', () => {
  const {getByTestId} = render(<Navbar/>);
  expect(getByTestId('navbar')).toHaveTextContent('About')
})

it('renders jumbotron correctly', () => {
  const {getByTestId} = render(<Jumbotron/>);
  expect(getByTestId('jumbo')).toHaveTextContent('We bring blockchain to life!')
})

it('renders title correctly', () => {
  const {getByTestId} = render(<Title/>);
  expect(getByTestId('title')).toHaveTextContent('Our latest news!')
})

it('renders card one correctly', () => {
  const {getByTestId} = render(<Cards/>);
  expect(getByTestId('card-1')).toHaveTextContent('Bringing Blockchain to Mountain Rescue')
})

it('renders card two correctly', () => {
  const {getByTestId} = render(<Cards/>);
  expect(getByTestId('card-2')).toHaveTextContent('Blockchain for complex Construction Projects')
})

it('renders card three correctly', () => {
  const {getByTestId} = render(<Cards/>);
  expect(getByTestId('card-3')).toHaveTextContent('Introducing veri-chain, the self identity network')
})

it('renders footer correctly', () => {
  const {getByTestId} = render(<Footer/>);
  expect(getByTestId('footer')).toHaveTextContent('About')
})




