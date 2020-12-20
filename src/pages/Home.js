import React from 'react';
import './Home.css'
import Teasia from '../Teasia.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home' onDragStart={event => event.preventDefault()}>
      <img src={Teasia} className='Img' alt='kaibot'></img>
      <h4 className='Desc'>태시아봇은 서버관리와 뮤직, 웹검색,<br /> 자동자가진단등 유용한기능들을<br /> 가지고있는 다기능 봇입니다.</h4>
      <div className='btn-container'>
        <Link to={{
          pathname: 'https://discord.com/oauth2/authorize?client_id=775542914117795860&permissions=8&scope=bot'
        }} target='_blank'>
          <button>
            <div>초대하기</div>
          </button>
        </Link>
        <Link to='/commands'>
          <button>
            <div>명령어</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
