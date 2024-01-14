import { useEffect } from 'react';
import './App.css';
import Connection from './components/Connection';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      console.log('here', process.env.REACT_APP_LOGGER);
      const response = await fetch(process.env.REACT_APP_LOGGER);

      if (response.ok) {
        localStorage.setItem('visited', 'true');
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      <div className='banner'>
        <img src='./images/banner.jpg' alt='banner' />
      </div>

      <div className='header'>
        <div>
          <div className='logo'>
            <img src='./images/logo.jpg' alt='logo' />
          </div>
          <div className='dnd'>
            <div className='dnd-line'></div>
          </div>
        </div>

        <div className='badge-container'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/b5/Discord_Active_Developer_Badge.svg'
            alt='developer'
          />
          <img src='./images/nitro.png' alt='nitro' />
          <img src='./images/boost.png' alt='boost' />
          <img src='./images/admin.png' alt='admin' />
        </div>
      </div>

      <div className='content-container'>
        <div className='content'>
          <div className='title'>
            <div className='name'>zoloft</div>
            <div className='username'>imzoloft</div>
          </div>

          <div className='content-separator'></div>

          <div className='description'>
            <div className='description-title'>ABOUT ME</div>
            <div className='description-content'>
              <div className='description-content-title'>
                Software Engineer & CyberSec
              </div>
              <div className='description-content-text'>
                <a href='https://imzoloft.xyz'>https://imzoloft.xyz</a>
              </div>

              <div className='description-content-title'>
                Revolutionize﹒ProxyAPI﹒Development
              </div>
              <div className='description-content-text'>
                <a href='https://discord.gg/2VDpC6xFkE'>
                  https://discord.gg/2VDpC6xFkE
                </a>
              </div>

              <div className='description-content-title'>Favorite Stack</div>
              <div className='description-content-text'>
                Golang﹒Typescript﹒React &nbsp;<div className='emoji'>🩷</div>
              </div>
            </div>

            <div className='description-title'>CONNECTIONS</div>

            <Connection
              imageUrl='./images/github.png'
              altText='github'
              username='imzoloft'
              isVerified={true}
              link={'https://github.com/imzoloft'}
            />

            <Connection
              imageUrl='./images/gitlab.png'
              altText='gitlab'
              username='imzoloft'
              isVerified={true}
              link={'https://gitlab.com/imzoloft'}
            />

            <Connection
              imageUrl='./images/telegram.png'
              altText='telegram'
              username='imzoloft'
              isVerified={true}
              link={'https://t.me/imzoloft'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
