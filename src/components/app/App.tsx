import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';
import { Attachment } from '@consta/uikit/Attachment';
import { Avatar } from '@consta/uikit/Avatar';
import { Layout } from '@consta/uikit/Layout';
import { Loader } from '@consta/uikit/Loader';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { User } from '@consta/uikit/User';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../../pages/main-page/MainPage';
import ServicePage from '../../pages/service-page/ServicePage';
// import ServiceDetailPage from '../../pages/servie-detail-page/ServiceDetailPage';

import './App.css'


const App = () => (
  <Theme preset={presetGpnDefault}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/service" element={<ServicePage />}/>
          <Route path="/servicedetail" element={<ServiceDetailPage />}/>
          
      </Routes>
    </BrowserRouter>
  </Theme>
);




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
