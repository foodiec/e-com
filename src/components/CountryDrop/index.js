import React, { useContext, useEffect } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { MyContext } from '../../App';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    });

const CountryDrop = () => {
    const [ isOpen, setisOpen ] = useState(false);
    const [ selectedTab, setSelectedTab ] = useState(null);

    const [ countryList, setCountryList ] = useState([]);

    const context = useContext(MyContext);
    
    const selectCountry = (index, country)=>{
        setSelectedTab(index);
        setisOpen(false);
        context.setSelectedCountry(country);
    }

    useEffect(() => {
        setCountryList(context.countryList);
    },[])

    const filterList=(e) => {
        const keyword = e.target.value.toLowerCase();

        if(keyword != '') {
            const List = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(List);
        } else {
            setCountryList(context.countryList);
        }
    } // search box of countries

    return (
        <>
            <Button className='countryDrop' onClick={() => setisOpen(true)}>
                <div className='info d-flex flex-column'>
                    <span className="lable">your loc</span>
                    <span className="name">{context.selectedCountry!== "" ? 
                    context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...'
                    : context.selectedCountry  : 'select location' }
                    </span>
                </div>
                <span className="ml-auto"><FaAngleDown/></span>
            </Button>
            
            <Dialog open={isOpen} onClose={() => setisOpen(false)} 
            className="loc"  TransitionComponent={Transition}>
                <h4 className="mb-0">choose ypur delivery location</h4>
                <p>enetr your loc ................................</p>
                <Button className="closee" onClick={() => setisOpen(false)}
                    ><MdClose/></Button>

                <div className='headerSearch w-100'>
                    <input type='text' placeholder='search for area' onChange={filterList} />
                    <Button><IoIosSearch/></Button>
                </div>

                <ul className="countryList mt-3">
                    {
                        countryList?.length !==0 && countryList?.map((item,index)=>{
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index,item.country)}
                                    className={`${selectedTab===index ? 'active':''}`}
                                    >
                                    {item.country}</Button></li>
                            )
                        })
                    }
                    {/* <li><Button onClick={() => setisOpen(false)}>Noida</Button></li>
                    <li><Button onClick={() => setisOpen(false)}>Delhi</Button></li>
                    <li><Button onClick={() => setisOpen(false)}>Gurgoan</Button></li>
                    <li><Button>Jaipur</Button></li>
                    <li><Button>Delhi</Button></li>
                    <li><Button>Gurgoan</Button></li>
                    <li><Button>Delhi</Button></li>
                    <li><Button>Gurgoan</Button></li>
                    <li><Button>Jaipur</Button></li>
                    <li><Button>Delhi</Button></li>
                    <li><Button>Gurgoan</Button></li>
                    <li><Button>Delhi</Button></li>
                    <li><Button>Gurgoan</Button></li> */}
                </ul>


            </Dialog>
        </>
    )
}

export default CountryDrop;