import { Link } from 'react-router-dom';
import logo from '../../assets/images/bacola-logo-1.png';
import CountryDrop from '../CountryDrop/index.js';
import { Button } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import SearchBox from './SearchBox/index.js';
import Nav from './Nav/index.js';
import { MyContext } from '../../App.js';
import { useContext } from 'react';

const Headers = () => {

    const context = useContext(MyContext);

        return(
            <>
             <div className="headerWrap">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">dellayyy due to covid</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrap d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={logo} alt='logo'></img></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                
                                {
                                    context.countryList.length!==0 && <CountryDrop />
                                    //countries api
                                }

                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser /></Button>
                                    <div className='ml-auto cart d-flex align-items-center'>
                                        <span className='price'>$3.28</span>
                                        <div className='position-relative ml-2'> 
                                            <Button className='circle ml-2'>< IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <Nav />


             </div>
            </>
        )
}

export default Headers;