import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
    };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Women_Indian_Main_Banners_web_3466e7b36d/Women_Indian_Main_Banners_web_3466e7b36d.png"
                    className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Fragrances_web_dfeb94c95b/Fragrances_web_dfeb94c95b.png"
                    className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/J_and_J_web_a66325f963/J_and_J_web_a66325f963.png"
                    className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Fragrances_web_dfeb94c95b/Fragrances_web_dfeb94c95b.png"
                    className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;