
import styles from './index.module.css'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import useConfigStore from "../../store/config";

import BoxConfig from '../config-tabs/EditComponent/EditComponent';
import GridItemConfig from '../config-tabs/EditBoxStyle/EditBoxStyle';
import EditGridBox from '../config-tabs/EditGridBox/EditGridBox';
const items: TabsProps['items'] = [
    {
      key: '1',
      label: '组件',
      children: <BoxConfig></BoxConfig>,
    },
    {
      key: '2',
      label: 'box',
      children: <GridItemConfig></GridItemConfig>,
    },
    {
      key: '3',
      label: 'Grid Item',
      children: <EditGridBox></EditGridBox>,
    },
  ];

const Config = ()=>{
  const id =  useConfigStore((state:any)=>state.id);
    return <>
        <div className={styles['config-tab']}>
          <div>{id}</div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
    </>
}
export default Config