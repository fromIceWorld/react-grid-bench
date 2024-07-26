import { Flex } from 'antd';
import { Tabs } from "antd";
import styles from './LayoutPage.module.css'
import Grid
 from '../../components/grid-layout'

 import Menus from '../../components/menus/menus'
const {TabPane} = Tabs;

const tabs = [
    {
        label:"组件",
        key:"component",
        children:'Menus',
        component:Menus,
    },
    {
        label:"媒体查询",
        key:"media",
        children:'Menus',
        component:Menus,
    },
]



const LayoutPage = ()=>{
    return <>
         <Flex vertical={false} className={styles["menu-list"]}>
            <div className={styles['menus-tabs']}>
                <Tabs defaultActiveKey="component" items={tabs.map(item=>({
                    key:item.key,
                    label:item.label,
                    children:<item.component key={item.key} ></item.component>
                }))}>
                </Tabs>
            </div>
            <div className={styles['view-layout']}>
                <Grid></Grid>
            </div>
        </Flex>
    </>
}
export default LayoutPage