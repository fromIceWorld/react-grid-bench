import React from 'react';
import { Flex } from 'antd';
import Logo from '../../components/heders/Logo/Logo'
import Media
 from '../../components/heders/Media/Media'
import OperationBtns
 from '../../components/heders/OperationBtns/OperationBtns'
import './Header.css'



const Header = ()=>{
    return <Flex className='header' vertical={false} justify = {'space-between'}>
                <Logo></Logo>
                <Media></Media>
                <OperationBtns></OperationBtns>
            </Flex>
}
export default Header