import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, titleChange] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>DotoriBlog</h4>
      </div>

      {/* <div className='list'>
        <h4>{ 글제목[0] }<button onClick={() => { 따봉변경(따봉+1) }}>👍</button> {따봉}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal) }}>{ a }<span onClick={(e) => {
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
                titleChange(i);
              }}>👍</span> {따봉[i]}</h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.slice(i, 1)
                글제목변경(copy)
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }}></input>
      <select onClick={() => {
        글제목변경(글제목.concat(입력값))
        따봉변경(따봉.concat(0))
      }}></select>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => { props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학']) }}>글수정</button>
  </div>
  )
}



export default App;
