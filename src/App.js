import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
const customers = [{
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '960425',
  'gender':'남자',
  'job' : '대학생'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name' : '김성경',
  'birthday' : '960421',
  'gender':'남자',
  'job' : '프로그래머'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name' : '김길동',
  'birthday' : '960422',
  'gender':'여자',
  'job' : '직원'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                  key={c.id} //key설정해줘야지 에러가 안남
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
            );
          })
        }
      </div>
    )
  }
}

export default App;
