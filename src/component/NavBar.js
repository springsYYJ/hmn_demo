import React from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
const NavBar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    const navigate = useNavigate() // <-- hooks must be INSIDE the component

    const onLoginClick = (event) => {
        authenticate == true ? goHomeAndLogout():navigate('/login')  ;

    }

    const goHomeAndLogout = () => {
        setAuthenticate(false);
        navigate('/');
    }

    const onSearchProduct = () => {
        navigate('/product?q=드레스')
    }

    const searchProduct = (event) => {
        if (event.key === 'Enter') {
            let searchKeyword = event.target.value;
            navigate(`/?q=${searchKeyword}`)
        }
    }

    return (
        <div>
            <div className='login-btn' onClick={onLoginClick}>
                <div><FontAwesomeIcon icon={faUser} />  {authenticate == true ? '로그아웃' : '로그인'}</div>
            </div>
            <div className='nav-logo'>
                <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png'></img>
            </div>
            <div className='nav-area'>
                <ul className='nav-area-menu'>
                    {menuList.map(menu =>
                        <li>{menu}
                        </li>)
                    }
                </ul>
                <div className='nav-area-search'>
                    <FontAwesomeIcon icon={faSearch} onClick={onSearchProduct}></FontAwesomeIcon>
                    <input type='text' className='nav-searchTxt' placeholder="제품 검색" onKeyPress={(event) => searchProduct(event)}></input>
                </div>
            </div>
        </div>
    )
}

export default NavBar