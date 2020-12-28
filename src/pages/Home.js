import React from 'react';
import './Home.css'
import Teasia from '../Teasia.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home' onDragStart={event => event.preventDefault()}>
    <body>
    <!-- Channel Plugin Scripts -->
    <script>
      (function() {
        var w = window;
        if (w.ChannelIO) {
          return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
        }
        var ch = function() {
          ch.c(arguments);
        };
        ch.q = [];
        ch.c = function(args) {
          ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
          if (w.ChannelIOInitialized) {
            return;
          }
          w.ChannelIOInitialized = true;
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
          s.charset = 'UTF-8';
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        }
        if (document.readyState === 'complete') {
          l();
        } else if (window.attachEvent) {
          window.attachEvent('onload', l);
        } else {
          window.addEventListener('DOMContentLoaded', l, false);
          window.addEventListener('load', l, false);
        }
      })();
      ChannelIO('boot', {
        "pluginKey": "dddccf59-a91b-493a-9e29-0aa16e96e800"
      });
    </script>
    <!-- End Channel Plugin -->
    </body>
      <img src={Teasia} className='Img' alt='kaibot'></img>
      <h4 className='Desc'>태시아봇은 서버관리와 뮤직, 웹검색,<br /> 자동자가진단등 유용한기능들을<br /> 가지고있는 다기능 봇입니다.</h4>
      <div className='btn-container'>
        <Link to={{
          pathname: 'https://discord.com/api/oauth2/authorize?client_id=728820788278329424&permissions=8&scope=bot'
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
        <Link to='/developer'>
          <button>
            <div>개발자</div>
          </button>
        </Link>
        <Link to={{
          pathname: 'https://taesia.vercel.app/'
        }} target='_blank'>
          <button>
            <div>공식웹</div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
