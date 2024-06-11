
import logoSVG from '../../../assets/image/logo.svg';
import {GithubOutlined} from '@ant-design/icons';
import './Logo.css'

const goGithub = ()=>{
    window.open('https://github.com/fromIceWorld/demo-page');
}

const Logo = ()=>{
    return <div className='logo-area'>
                <img  className='logo-area-logo' src={logoSVG} alt='logo' style={{width:30}}/>
                <span className='logo-area-title'>组合</span>
                <GithubOutlined  className='link' onClick={goGithub}/>
            </div>
}
export default Logo