import styled from "styled-components";
export const PosCity = styled.div`
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height:17.77rem ;
    .head{
    position: fixed;
    top: 0;
    left: 0;
    height: 1.17333rem;
    line-height:1.17333rem;
    width: 100%;
    background-color: #fff;
    font-size: .48rem;
    color: #232323;
    border-bottom: 1px solid #ebebeb;
   z-index:100;
    text-align:center;
    display:flex;
    justify-content:space-between;
    i{
    padding:0 .4rem;
    margin-top:.2rem;
    font-size:.7rem;
    &:last-child{
        margin-top:.4rem;
        font-size:.5rem;
    }
    }
    }
    .BMap_bubble_content{
        font-weight:bold;
        font-size:.4rem;
    }
    .BMap_stdMpType4{
       left:.1rem !important;
       top:1.3rem !important;
    }
    .anchorBL{
        display:none;
    }
    .info{
        position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.26667rem;
    background: #fff;
    >.info_cont{
        padding: 0 0.64rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        >.cont-img{
            
            padding: 0.08533rem;
            width: 2.54133rem;
            height: 2.54133rem;
           img{
               width:100%;
               height:100%;
           }
        }
        .cont-title{
            display:flex;
            width: 5.66667rem;
    height: 3.26667rem;
    font-size: 0.39733rem;
    color: #666;
    flex-direction: column;
    justify-content:center;
    .title-name{
    display: block;
    overflow: hidden;
    font-size: 0.52533rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #212121;
    }
    .title-phone{
        display: block;
    margin-top: 0.42667rem;
    margin-bottom: 0.14933rem;
    }
    .title-yc{
        i{
            font-style:normal;
            color: #ff7919;
           
        }
    }
        }
        .cont-right{
            font-size:.4rem;
            color:#ccc;
        }
    }

    }
   .home{
       display:none;
       z-index:200;
       width:100%;
       height:100%;
       background:rgba(0,0,0,.6);
       position:fixed;
       top:0;
       left:0;
       .home-cont{
           background:#fff;
           position:fixed;
           top: 1.17333rem;
           right:.1rem;
           border-radius: 0.21333rem;
           ul{
               li{
                padding:.3rem 0.74667rem;
                border-bottom: 1px solid #f2f2f2;
                cursor: pointer;
                text-align:left;
                font-size:.35rem;
                   i{
                    vertical-align: middle;
                     margin-right: 0.64rem;
                     font-size: 0.52533rem;
                   }
                   &:last-child{
                       border:none;
                   }
               }
           }
       }
   }
`