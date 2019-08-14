import styled from "styled-components";
export const HotShow = styled.div`
    margin-top: .53333rem;
    padding-top: .53333rem;
    padding-left: .4rem;
    padding-bottom: .53333rem;
    .hot-title{
     display:flex;
     justify-content:space-between;
     align-content:center;
     width:100%;
        >h3{
            font-size: .53333rem;
            margin:0 0;
        }
        i{
         margin-top:.02rem;
         margin-right:.4rem;
         font-size:.6rem;
        }
    }
.hot-list{
    margin-top: .53333rem;
    .swiper-b{
      z-index:1 ;
        .swiper-wrapper{
      
            .swiper-slide{
                        width: 2.85333rem !important;
                        height: 4.89333rem;
                        border-radius: .10667rem;
                        border: 1px solid #ebebeb; 
                        margin-right:.2rem !important;
                        >div{
                            width: 2.85333rem !important;
                        height: 3.89333rem;
                            img{
                            border-radius: .10667rem;
                            width:100%;
                            height:100%;
                        }
                        }
                    h3{
                        font-size:.4rem;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        font-weight:bold;
                        width: 2.85333rem;
                        height:1rem;
                        line-height:1rem;
                    }
                }
            
            .slideimg{
                width:107px;
            }
        }
    }
}
`
