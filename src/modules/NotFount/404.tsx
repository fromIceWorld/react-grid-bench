import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


const NotFount = ()=>{
    const navigate  =useNavigate();
    function goBack(){
        navigate(-1)
    }
    
    return <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" onClick={goBack}>Go Back</Button>}
            />
}
export default NotFount