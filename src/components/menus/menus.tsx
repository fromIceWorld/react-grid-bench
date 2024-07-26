
import {BorderOuterOutlined} from '@ant-design/icons'
import styles from './menu.module.css'
import Icon from '../Icon'

const menuList = [
    {
      id:'0',
      type: 'user',
      module: {
        remoteEntry: 'react_app/remoteEntry.js',
        remoteName: 'react_app',
        exposedModule: 'ListUserReactComponent',
        mount: 'createApp',
        unmount: 'unmount',
        isApp: true,
        webComponentSelector: '',
        config:{
          props:[
              {
                label:'users',
                type:'object',
                value:[
                  {
                    name:'1'
                  }
                ]
             }
            ],
            function:{
              
            }
      }
      },
      view: 0,
      icon: 'icon-javascript',
      name: 'user',
    },
    {
      id:'1',
      type: '饼状图',
      module: {
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'react_app',
        exposedModule: 'BarChartComponent',
        mount: 'createApp',
        unmount: 'unmount',
        isApp: true,
        webComponentSelector: '',
        config:{
          props:[
              {
                label:'users',
                type:'object',
                value:[
                  {
                    name:'1'
                  }
                ]
             }
            ],
            function:{
              
            }
      }
      },
      view: 0,
      icon: 'icon-javascript',
      name: '饼状图',
    },
  ];

const onDragStart = (e:any,item:any)=>{
  const {module} = item;
  e.dataTransfer.setData("module", JSON.stringify(module))
}
const onDragEnd = (e:any)=>{
  console.log(e,'onDragEnd')
}

const Menus = ()=>{
    return <>
    <p><BorderOuterOutlined className={styles.box}/></p>
    {menuList.map(item=><div onDragStart={(e)=>onDragStart(e,item)} onDragEnd={onDragEnd} draggable className= {styles.component} key={item.id}><Icon type={item.icon} ></Icon><span>{item.name}</span></div>)}</>
}
export default Menus