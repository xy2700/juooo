import styled from "styled-components";

export const HotTourcont = styled.div`
background-color: #f5f5f5;
        width: 100%;
        padding-top: .8rem;
        padding-bottom: .8rem;
        .tourtitle{
         
            margin-bottom:.4rem;
            display:flex;
            justify-content:space-between;
            align-content:center;
            width:100%;
        >h3{
            font-size: .53333rem;
            margin-left:.4rem;
            
        }
        i{
         margin-top:.02rem;
         margin-right:.4rem;
         font-size:.6rem;
        }
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 6.53333rem;
        height: 5.33rem;
        a{
            display: block;
            text-align:center;
            .itemimg{
                height: 3.73333rem;
                width: 100%;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                img{
                    width:100%;
                    height:100%;
                }
            }
            h3{
                height: .66667rem;
                 line-height: .66667rem;
                 font-size: .45333rem;
                 color: #232323;
                 margin-top: .33333rem;
                 width: 100%;
                 text-align: center;
                 overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
            }
            p{
                font-size: .34667rem;
                height: .53333rem;
                line-height: .53333rem;
                color: #666;
                text-align: center;
                        }
        }

    }
    .swiper-slide-active{

    }
    .swiper-slide-next{

    }
`