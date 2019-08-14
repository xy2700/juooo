import styled from "styled-components";

const SwiperStyle=styled.div`

.swiper-container{
    width:100%;
    height:5.22667rem;
    .swiper-wrapper{
        .swiper-slide{
            img{
                width:100%;
                height:100%;
            }
        }

    }
    .swiper-pagination{
            .swiper-pagination-bullet{
                width:0.16rem;
                height:0.16rem;
                margin:0 .15rem;
            }
            .swiper-pagination-bullet-active{
                background:#fff;
                width:.333rem;
                border-bottom-left-radius:.4rem;
                border-bottom-right-radius:.4rem;
                border-top-left-radius:.4rem;
                border-top-right-radius:.4rem;
            }
        }
}

`

export default SwiperStyle