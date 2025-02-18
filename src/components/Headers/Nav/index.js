
import { Button } from '@mui/material';
// import { CiHome } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Nav = () => {
 return (
    <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 newpart1'>
                                <div className='catwrapper'>
                                <Button className='allCart'>
                                    <span className='icon1 mr-2'><IoIosMenu/></span>
                                    <span class="text">ALL CATEGORIES</span>
                                    <span className='icon2 ml-2'><FaAngleDown/></span>
                                </Button>
                                    <div className='sidebarnav'>
                                        <ul>
                                            <li><Link to="/"><Button>Men</Button></Link></li>
                                            <li><Link to="/"><Button>Wpmen</Button></Link></li>
                                            <li><Link to="/"><Button>beauty</Button></Link></li>
                                            <li><Link to="/"><Button>watches</Button></Link></li>
                                            <li><Link to="/"><Button>kids</Button></Link></li>
                                            <li><Link to="/"><Button>gift</Button></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-9 newpart2 d-flex align-items-center'>
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'><Link to="/"><Button>Home </Button></Link></li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Men</Button></Link>
                                        <div className='submenu shadow'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Women</Button></Link>
                                        <div className='submenu shadow'>
                                            <Link to="/"><Button>clothing</Button></Link>
                                            <Link to="/"><Button>footwear</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li className='list-inline-item'><Link to="/"><Button>watches</Button></Link></li>
                                    <li className='list-inline-item'><Link to="/"><Button>kids</Button></Link></li>
                                    <li className='list-inline-item'><Link to="/"><Button>gifts</Button></Link></li>
                                    <li className='list-inline-item'><Link to="/"><Button>gifts</Button></Link></li>
                                    <li className='list-inline-item'><Link to="/"><Button>Contact </Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
 )
}

export default Nav;