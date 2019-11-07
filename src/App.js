import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import Customer from './components/Customer' 
import './App.css';

const customers = [
  {
  'id' : 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동a',
  'birthday' : '961221',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id' : 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '홍길동b',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '홍길동c',
    'birthday' : '961223',
    'gender' : '남자',
    'job' : '대학생'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map( d=>{
            return (
              <Customer 
                key={d.id}
                id={d.id}
                image={d.image}
                name={d.name}
                birthday={d.birthday}
                gender={d.gender}
                job={d.job}
              />
            )
          })
        }
      </div>
  );
  }
}

export default App;
