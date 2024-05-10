import './App.css';
import { useState } from 'react';

const user = {
  name: 'Rowan',
  imageLoc: require('./images/pfp1.jpg'),
  imageSize: 90
};

const cars = [
  {title: 'Porsche', isBritish: false, id: 1},
  {title: 'McLaren', isBritish: true, id: 2},
  {title: 'Mercedes', isBritish: false, id: 3}
]


export default function MyApp() {

  const listItems = cars.map(cars =>
    <li
      key={cars.id}
      style={{
        color: cars.isBritish ? 'blue' : 'red'
      }}
    >
      {cars.title}
    </li>
  );

  return (
    <div>
      <h1>Welcome to my app</h1>
      <h3>Counters that update seperately:</h3>
      <MyButton />
      <br />
      <MyButton />
      <br />
      <h1>{user.name}</h1>
      <img src={user.imageLoc}
        className='avatar'
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <br />
      <ul>{listItems}</ul>
    </div>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}