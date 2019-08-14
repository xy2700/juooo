import styled from "styled-components";

export const DetailsCont = styled.div`
    background-color: #f5f5f5;
.detail_brief{
    background-color: #fefefe;
    >.brief_pri{
        position: relative;
    height: 6.12rem;
    overflow: hidden;
        >img{
            border: none;
            border-color: transparent;
            vertical-align: middle;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            height: auto;
            background-color: #b8abab;
            -webkit-filter: blur(.53333rem);
            filter: blur(.53333rem);
        }
        >.brief_mask{
            position: absolute;
            left: 0;
            right: 0;
            height: 6.12rem;
            background-color: rgba(0,0,0,.1);
          
        }
        >.brief_fg{
            position: relative;
            height: 6.12rem;
            .fg_title{
                height: 1.18667rem;
                text-align:center;
                line-height:1.18667rem;
                i{
                    margin-top:.3rem;
                    color:#fefefe;
                    font-size:.5rem;
                }
                .fa-angle-left{
                    margin-left:.2rem;
                    margin-top:.1rem;
                    float:left;
                    font-size:.9rem;
                }
                span{
                    font-size:.48rem;
                    font-weight: 700;
                 color:#fefefe;

                }
                .fa-heart{
                    margin-top:.35rem;
                    margin-right:.3rem;
                    float:right;
                }
                .fa-home{
                    font-size:.6rem;
                    margin-right:.3rem;
                float:right;
                }
            }
            .fg_content{
                display: flex;
                padding: 0 .4rem;
                position: relative;
                .cont_img{
                    width: 2.93333rem;
                 height: 4rem;
                 margin-top: .4rem;
                 -ms-flex-negative: 0;
                 flex-shrink: 0;
                                 img{
                                    width: 100%;
                        height: 100%;
                        border-radius: .10667rem;
                    }
                }
                .cont_info{
                    margin-top: .54667rem;
                margin-left: .38667rem;
    
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
    
                    flex-direction: column;
                    .info_name{
                        font-size: .50667rem;
                        line-height: .61333rem;
                        font-weight: 700;
                        color: #fefefe;
                    }
                    .info_tag{

                    }
                    .info_price{
                        position:absolute;
                        bottom:0;
                        span{
                            font-size: .42667rem;
                            font-weight: 700;
                            height: .42667rem;
                            line-height: .42667rem;
                            color: #fefefe;
                            display: inline-block;
                            white-space: nowrap;
                        }
                        i{
                            width: .6rem;
                            height: .45rem;
                            line-height: .90667rem;
                            display: inline-block;
                            margin-left: .32rem;
                            background-repeat: no-repeat;
                            background-size: .6rem .45rem;
                            background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAiCAMAAAAuwqolAAAAk1BMVEUAAAD+/v79/f3+/v7+/v7+/v7+/v7+/v7+/v719fX4+Pj6+vr19fX19fX19fX4+Pj19fX19fX19fX19fX19fX+/v719fX19fX6+vr19fX19fX19fX+/v719fX19fX19fX19fX19fX19fX19fX19fX19fX+/v719fX19fX19fX19fX19fX19fX19fX19fX+/v719fV9zcGJAAAAL3RSTlMAuxIirfJuJunlnXkDu6tqLxr++PTux8OJY1xRKCEQ9vDr39rZ0syzm5d1ZE1HPwTyT6EAAAD2SURBVDjL1dXJroJAFATQ6gFQQYHnPL55Htr//7p3S40rDLejC60Euhb3ACGkATKfBGUSn8l8J7VQxqadDD5FRHKPxMYAmyAgKuE6gHORwIQLgelW8lyzLkfs3RZQvHBqDqbH2pNSGmPGQU6zhkf64FTOVt/zBpYyHGIaQE7webzBks06596CkzSABccGUqo7lva39EcwkdKX9dG2gzXBE/DLdYFj/PgEKPgkQxSvsryrPo0uL72Zy+mhVoEJQUX2DRUYEPR5QAdmBJLRWgnKAyihBD/7+WmhBdWWGTpowWYHvm5gEzgPRG+V8ZvxKm67X0X/UP4BBv02+Z4342cAAAAASUVORK5CYII=)
;

}
                        
                    }
                }
            }
        }
    }
    .brief_sec{
        background:#fefefe;
        padding: 0 .4rem .57333rem;
        display: flex;
        
        .sec_info{
            width:100%;
            display: flex;
            justify-content:space-between;
            .info_poi{
            .sinfo_time{
                margin-top: .78667rem;
    font-size: .48rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
 
                span{
                    &:nth-child(1){
                        display: inline-block;
    font-weight: 700;
    height: .48rem;
    line-height: .48rem;
                    }
                    &:nth-child(2){
                        display: inline-block;
    font-size: .32rem;
    height: .48rem;
    line-height: .48rem;
    margin-left: .12rem;
                    }
                }
            }
            .info_place{
                font-size: .42667rem;
    font-weight: 700;
    color: #232323;
    margin-top: .42667rem;
    margin-right: 1.52rem;
    line-height: .61333rem;
            }
        }
            .info_pon{
                flex-grow: 0;
  
    flex-shrink: 0;
    margin-top: .88rem;
    width: 1.06667rem;
    height: 1.06667rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABUFBMVEUAAAD/b0D/dj7/dD//dD//bkD/hjn/gzr/gzr/jTf/cj//hjr/YUT/cUD/fjz/fjz/cED/iDn/fTz/dT7/aUL/cj//ej3/bkH/YUT/jjj/a0H/hzn/YkT/b0D/ej3/YkT/iDn/fTz/ZET/dz7/akL/jjf/YUT/cz//jjf/akH/YEX/a0H/X0X/jTj/eT3/hDr/jTf/ezz/fD3/eT3/ZkP/ijn/Y0T/eT7/fD3/iDn/dz7/gDz/Z0P/izj/fD3/gTv/bEH/jTj/YEX/dT//hzn/fzz/YUX/gjv/aEP/gjv/YEX/a0L/gDz/fTz/X0X/dz7/b0D/YEX/YEX/YUX/X0X/X0X/jjj/X0X/aUL/ZEP/hDr/a0H/Z0P/gjv/hzn/YkT/bUH/dD//fjz/iTn/gDv/b0D/ckD/izj/eD7/dj7/ej3/ZkP/hjr/YUX/fD3/jTjE6Qr8AAAAWHRSTlMAAwsJBlEtIte/vayUd3dsa09LNy3+/ff29vPy8OjZ1dTOv7KxsK6opKGdjIiHg3BsVCkb+fn29vTz8u7j4+Dg2c7NyMbDtbOoqKWXl5eNiYN9cXBuSTYm/xOd2QAAAeBJREFUOMt90ldbIjEUBuBvGiIg3d7L6trddXvvvdhFURRQGQvy/+9MDMlJxhm/6/dJToOejpXk2MvK1WA8melAeHKdjXq9Urna3z88PDn5mgshOx8b3ChUq40XAsRabHFT18z1dc+SpRv7ATONgLm48CcdMm5nqxUwNW7884Sr0MMoc16dkWZFGYmUqVaz7en0hxQtzVmvmFhE0f6tOTud4iZmFPT+Tzr99538jJnT4yKvWjPxPG6THyFzPAs4/WS+22pwk8wIVB5wkKNtfHG10X2WD5XLHhapsRi0PO6WpjQPWv1PGJmRpjSBt6qxRybypDl4g6dqQKsmWpXm4AnohCwTWRyVGLrcA03aNpEtH2JoUG0jZqKiMkMYUxtLm6hLmr1RJNUJjVhGSR+kOZrGMkfizDI6yipztIkYncfzAplCL0PCNItAnE7olZqnN0APjQJY1m864TmA4yXKZJobfB6vybDNdw8P8wGRGbLBklFGnJBpmlui2XHDqG0I88lqn84LhsgYD/Xtop18j++Hm+Y2VJbo7k3zD1r+hxedCqwzrOgFBJJVnwnD0DrupCtY0AJCsmaaFEIzr5s5ROQ3mV8WojIrG5uONrB+CPTNxT1xp7iZcIB7VepZ31zQ3AD3qlOhjBDHJAAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: .48rem .58667rem;
    background-color: #ededed;
    outline: none;
    border-radius: 50%;
            }
        }
    }

}

.detail_tips{
    background: #fefefe;
    padding-bottom: .53333rem;
    .bis_tips{
        position: relative;
    overflow: hidden;
    height: 1.25333rem;
    background-color: #fefefe;
        img{
            position: absolute;
    top: 0;
    left: .61333rem;
    width: 1.57333rem;
    height: .37333rem;
    border: none;
    border-color: transparent;
    vertical-align: middle;
        }
        .tips_info{
            width: 9.2rem;
    height: 1.2rem;
    margin: .05333rem auto 0;
    background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#ff6743,#ff6743);
    background-blend-mode: normal,normal;
    display: flex;
    -webkit-box-align: center;
    border-radius: .13333rem;
    align-items: center;
    color:#fff;
           span{
            font-size: .41333rem;
    color: #fff;
    margin-left: .4rem;
    -webkit-box-flex: 1;
  
    flex-grow: 1;
           } 
           i{
            font-size:.7rem;
            color: #fff;
            margin-right:.3rem;
            margin-left:.2rem;
           }
        }
    }
}
.detail_dis{
    margin-top: .32rem;
    
    .dis_cont{
    height: 1.38667rem;
    background-color: #fefefe;
    width: 100%;
    font-size: .34667rem;
    color: #232323;
        display:flex;
        justify-content:space-between;
        align-content:center;
        span{
            margin:0 .34rem;
            line-height:1.3866rem;
            i{
                margin-left:.34rem;
            }
        }
    }
}
.detail_scount{
    background-color: #fefefe;
    margin-top: .32rem;
    .scount_cont{
    .scount_item{
        display: flex;
    padding: .4rem 0;
    margin:0 .4rem;
    border-bottom:1px solid #ccc;
        span{
            &:nth-child(1){
                font-size: .37333rem;
    color: #999;
    display: inline-block;
    height: .64rem;
    line-height: .64rem;
   
    flex-shrink: 0;
            }
            &:nth-child(2){
                font-size: .34667rem;
    color: #232323;
    line-height: .64rem;
    padding-top: .02667rem;
    margin-left: .4rem;
    margin-bottom: -.14667rem;
            }
        }
    }
    .scount_sup{
            display: flex;
         padding: .4rem;
            >span{
            &:nth-child(1){
                font-size: .37333rem;
                color: #999;
                display: inline-block;
                height: .64rem;
                line-height: .64rem;

                flex-shrink: 0;
            }
           &:nth-child(2){
            
                    flex-wrap: nowrap;
                    height: .64rem;
                    line-height: .64rem;
                    align-items: center;
                    font-size: .32rem;
                    color: #999;
                    display: flex;
                 
                 >span{
                    color: #999;
                    margin:.4rem;
                 }
            }
        }
    }
}
}
.detail_city{
    height: 4.02667rem;
    background: #fefefe;
    overflow: hidden;
    margin-top: .32rem;
    .city_title{
        margin-top: .12rem;
    margin-left: .4rem;
    margin-right: .4rem;
    display: flex;
    height: 1.58667rem;
    align-items: center;
    justify-content:space-between;
    h3{
        font-size:.5333rem;
        font-weight:bold;
        color:black;
    }
    span{
        b{
            color:#ff6743;
        }
        
        i{
            font-size:.4rem;
            margin-left:.2rem;
        }
    }

    }
    .city_info{
        overflow-x: scroll;
        .info_list{
            height:1.8rem;
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            display:-webkit-box;
            div{
                
                display:flex;
                width:2.4rem;
                height:1.65rem;
                margin-left:.32rem;
                border-radius:.1rem;
                border:1px solid #ccc;
                align-items:center;
                flex-direction:column;
                justify-content : center;
                span{
                    &:nth-child(1){
                        font-size:.4333rem;
                        font-weight:bold;
                    }
                    &:nth-child(2){
                        margin-top:.16rem;
                    }
                }
            }
            .select{
               border:1px solid #ff6743;
               color:#ff6743; 
            }
            .forbidden{
                border:1px solid  #ebebeb;
                color: #ebebeb;
               
            }
        }
    }
  

}
.detail_introduce{
    margin-top: .32rem;
    height: 16.89333rem;
    background-color: #fefefe;
    padding: 0 .4rem;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    .intro_title{
        font-size:.53rem;
        font-weight:bold;
        line-height:.53rem;
        margin-top:.65rem;
        color:#232323;
    }
    .intro_cont{
        margin-top: .52rem;
    padding-bottom: .66667rem;
        p{
            font-size:.4rem;
            line-height:.74rem;
            color:#232323;
            img{
                width:100%;
                height:100%;
                vertical-align:middle;
            }
        }
    }
    .intro_mask{
        text-align:center;
        color:#ff6743;
        font-size:.37rem;
        line-height:1.37rem;
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        background:#fff;
    }
    .intro_more{
        position:absolute;
        width:100%;
        height:2.68rem;
        left:50%;
        transform: translateX(-50%);
       bottom:1.37rem;
        background:url("https://m.juooo.com/static/img/white-mask.ff6558e.png") no-repeat;
    }
}
.detail_warn{
    margin-top: .32rem;
background-color: #fefefe;
height: 1.86667rem;
    padding: .66667rem .4rem 0;
    .warn_title{
    font-size: .53333rem;
    height: .53333rem;
    line-height: .53333rem;
    font-weight: 700;
    color: #232323;
    display:flex;
    justify-content:space-between;
       
    }
    .warn_cont{
        margin-top: .53333rem;
        display:flex;
        justify-content:space-between;
        .cont_list{
            color:#999;
            display:flex;
            justify-content:space-between;
            width:1.5rem;
            align-items : center;
            .list_dian{
                width:.1rem;
                height:.1rem;
                background:#999;
                border-radius:50%;
            }
        }
    }
    
}
.detail_bottom{
    border: 1px solid #ebebeb;
    height: 1.32rem;
    width: 100%;
    background:#fff;
    display:flex;
    justify-content:center;
    position:fixed;
    left:0;
    bottom:0;
    z-index:11;
    .bottom_kf{
        width:1.36rem;
        display:flex;
        align-items:center;
         flex-direction:column;
         justify-content : center;
        img{
            width:.533rem;
            height:.533rem;
        }
    }
    .bottom_mai{
        text-align:center;
        line-height:1.32rem;
        width:100%;
        background-image: linear-gradient(-50deg,#ff4d4a,#ff9a34),linear-gradient(#fefefe,#fefefe);
        color:#fefefe;
        font-weight:bold;
        font-size:.45rem;
    }
}
.detail_recom{
    margin-bottom:1rem;
    margin-top: .32rem;
        padding-top:.5rem;
        background:#fff !important;
    }
    .ico {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 100;
    img {
      position: absolute;
      left: 45%;
      top: 20%;
    }
  }
  .zhezhao{
      z-index:-1;
      position:fixed;
      opacity:0;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.5);
      .zhezhao-cont{
       padding-bottom:2rem;
          background:#fff;
          position:fixed;
          bottom: -12rem;
          left:0;
          width:100%;
          border-top-left-radius:.3rem;
          border-top-right-radius:.3rem;
      .zcont-title{
        font-size: .53333rem;
    padding: .65333rem .4rem 0;
    height: .53333rem;
    line-height: .53333rem;
    display:flex;
    justify-content:space-between;
          h3{

          }
          i{

          }
      }
      .zcont-neiron{
          
          .neron-head{
              font-size:.4rem;
            margin-top: .53333rem;
            span{
                display: inline-block;
                 width: .10667rem;
                 height: .10667rem;
                 margin:0 .4rem;
                 background: #999;
                 border-radius: 50%;
                 margin-bottom:.08rem;
            }
          }
          .neron-info{
            margin-top: .28rem;
    font-size: .32rem;
    margin-left: .8rem;
    margin-right: .4rem;
    color: #666;
          }
      }
    }
  }
`