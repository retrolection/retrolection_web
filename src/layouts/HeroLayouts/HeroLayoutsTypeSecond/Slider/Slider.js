import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper';
import classes from "./Slider.module.css"
import $ from "jquery";

let heroLayoutsTypeSecond = null;
let mediaQuerySize = 600;

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {

        $(window).on('load resize', function () {
            let windowWidth = $(this).innerWidth();
                if (!heroLayoutsTypeSecond) {
                    heroLayoutsTypeSecond = new Swiper(`.swiper-container`, {
                        direction: windowWidth  <= mediaQuerySize ? 'horizontal' : 'vertical',
                        slidesPerView: 1,
                        spaceBetween: 30,
                        initialSlide: 1,
                        pagination: {
                            el: `.${classes.swiperPagination}`,
                            clickable: true,
                        },
                        centeredSlides: true
                    });
                }
        });
    }

    render(){
        return (
                <div className={classes.slider}>
                    <div className={`swiper-container`}>
                        <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.children}
                        </div>
                        <div className={`swiper-pagination ${classes.swiperPagination}`}></div>
                    </div>
                </div>
        );
    }
}

export default Slider;
