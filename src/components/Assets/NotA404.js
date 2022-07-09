import { Link } from 'react-router-dom';

const NotA404 = () => {
    return (
        <Link to="/menu/">
            <div className='notA404'>
                <img src="./img/not-a-404.png" alt="MOMO" className="notA404"/>
            </div>
        </Link>
    )
}

export default NotA404