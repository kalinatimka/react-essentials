import './App.css';
import restaurant from './restaurant.jpg';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
      <img src={restaurant} alt='Restaurant'/>
      <ul>
        {props.dishes.map(dish => <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>It's true.</p>
    </footer>
  );
}

const dishes = [
  'Macaroni and Cheese',
  'Salmon',
  'Tofu with vegetables',
  'Minestrone',
];

const dishesObj = dishes.map((dish, index) => {
  return {
    id: index,
    title: dish,
  }
})

function App() {
  return (
    <div className="App">
      <Header name="Tsimafei"/>
      <Main dishes={dishesObj}/>
      <Footer/>
    </div>
  );
}

export default App;
