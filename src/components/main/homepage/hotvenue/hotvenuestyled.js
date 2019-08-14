import styled from "styled-components";

export const HotVenueCont = styled.div`
margin-top:.8rem;
margin-left:.4rem;
.venuetitle{
    margin-bottom:.4rem;
            display:flex;
            justify-content:space-between;
            align-content:center;
            width:100%;
        >h3{
            font-size: .53333rem;
           
        }
        i{
         margin-top:.02rem;
         margin-right:.4rem;
         font-size:.6rem;
        }
}
.venueContent{
    .swiper-wrapper{
        .swiper-slide{
            width:7.01rem;
            /* margin-left:.53rem; */
            height: 7.2rem;
            border: 1px solid #ebebeb;
            padding: .53333rem .45333rem;
            border-radius: .10667rem;
            .venueInfo{
                height: 1.36rem;
               .info-img{
                float:left;
                width: 1.33333rem;
                height: 1.33333rem;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                img{
                    width:100%;
                    height:100%;
                }
               }
               .info-name{
                   float:left;
                    margin-left:.26667rem;
                    width: 3.33333rem;
                   h3{
                    text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
                    margin-top: .06667rem;
                    font-size: .45333rem;
                    color: #232323;
                    height: .6rem;
                    line-height: .6rem;
                    font-weight: 700;
                   }
                   p{
                    margin-top: .2rem;
                    font-size: .32rem;
                    color: #666;
                    height: .4rem;
                    line-height: .4rem;
                   }
               }
            }
            .venuecon{
                
                width:100%;
                margin-top:.3rem;
                display:flex;
                justify-content:space-around;
                .venuetime{
                width:50%;
                    p{
                        border-bottom:2px solid #eee;
                        font-size: .37333rem;
                        color: #b3b3b3;
                        line-height: .46667rem;
                        height: .90667rem;
                        text-align: center;
                        span{
                            display:block;
                        width: .18667rem;
                        height: .18667rem;
                        background-color:#ccc;
                        border-radius: 50%;
                        margin: .38333rem auto 0;
                        }
                    }
                    a{
                        margin-top:.4rem;
                    width: 2.85333rem;
                     height: 3.89333rem;
                     border-radius: .10667rem;
                     border: 1px solid #ebebeb;
                     overflow: hidden;
                     display:block;
                                         img{
                            width:100%;
                            height:100%;
                        }
                    }
                }
            }
        }
    }
}
`