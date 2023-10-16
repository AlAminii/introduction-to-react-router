/* eslint-disable react/jsx-no-undef */
import { Link,  } from 'react-router-dom';

const Header = () => {
    return (
        <div className='space-x-4'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/users'>Users</Link>
         <Link to='/posts'>Posts</Link>
        </div>
    );
};

export default Header;