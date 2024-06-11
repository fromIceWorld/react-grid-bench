import React from 'react';
import './App.css';
import HeaderPage from './modules/Header/Header';
import Bench from './modules/Bench/Bench'
import { Flex, Layout } from 'antd';
const { Header,  Content } = Layout;

const headerStyle:React.CSSProperties = {
  height:40,
  padding:0,
  backgroundColor:"#fff"
}
const ContentStyle:React.CSSProperties = {
  height: 'calc(100vh - 40px)',
}

 function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <HeaderPage></HeaderPage>
        </Header>
        <Content style={ContentStyle}>  
          <Bench></Bench>
        </Content>
      </Layout>
    
  </div>
  );
}

export default App;
