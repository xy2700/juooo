import styled from "styled-components"

export const Thrater = styled.div`
    font-family: Avenir,Helvetica,Arial,sans-serif;
    width: 100%;
    height: 100%;
    >.theater-wrap{
        height: 100%;
        >.theater-head{
            >.head_nav{
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 1.17333rem;
                line-height: 1.17333rem;
                text-align: center;
                box-sizing: border-box;
                border-bottom: 1px solid #ebebeb;
                background-color: #fefefe;
                z-index: 100;
                >h3{
                    font-size: .48rem;
                    font-weight: 400;
                    color: #232323;
                    padding: 0 1.33333rem;
                }
            }
        }
        >.theater-body{
            height: 100%;
            background-color: #fdfdfd;
            padding-top: 1.49333rem;
            padding-bottom: 1.65333rem;
            >.wrapper{
                height: 100%;
                >.content{
                    >.theater-list{
                        width: 9.2rem;
                        margin: 0 auto;
                        >ul{
                            >li{
                                >.theater-info-shows{
                                    background-color: #fefefe;
                                    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                                    border-radius: .10667rem;
                                    border: 1px solid #ebebeb;
                                    margin-bottom: .4rem;
                                    padding: .54667rem .44rem .56rem;
                                    >.theater-info{
                                        display: flex;
                                        -webkit-box-pack: justify;
                                        justify-content: space-between;
                                        -webkit-box-align: center;
                                        align-items: center;
                                        >.theater-pic-name-count{
                                            display: flex;
                                            color: #232323;
                                            >.theater-pic-wrap{
                                                width: 1.33333rem;
                                                height: 1.33333rem;
                                                margin-right: .26667rem;
                                                overflow: hidden;
                                                >img{
                                                    width: 1.33333rem;
                                                    height:100%;
                                                    vertical-align: middle;
                                                    border-radius: .10667rem;
                                                }
                                            }
                                            >.theater-name-count-wrap{
                                                max-width: 6rem;
                                                >.theater-name{
                                                    margin-top:0.1rem;
                                                    width: 100%;
                                                    overflow: hidden;
                                                    white-space: nowrap;
                                                    text-overflow: ellipsis;
                                                    padding: .08rem 0 .13333rem;
                                                    font-size: .45333rem;
                                                    color: #232323;
                                                    font-weight: 700;
                                                }
                                                >.theater-count{
                                                    color: #666;
                                                    font-size: .32rem;
                                                    margin-top:0.1rem;
                                                }
                                            }
                                        }
                                        >.theater-link{
                                            display: block;
                                            padding: .26667rem 0 .26667rem .26667rem;
                                            >img{
                                                width: .37333rem;
                                                height: .37333rem;
                                            }
                                        }
                                    }
                                    >.theater-shows{
                                        margin-top: .34667rem;
                                        >.theater-show-wrap{
                                            >.swiper-container{
                                                margin-left: auto;
                                                margin-right: auto;
                                                position: relative;
                                                overflow: hidden;
                                                z-index: 1;
                                                >.swiper-wrapper{
                                                    display: flex;
                                                    position: relative;
                                                    width: 100%;
                                                    height: 100%;
                                                    z-index: 1;
                                                    >.swiper-slide{
                                                        width: 3.04rem;
                                                        >.theater-show-date{
                                                            position: relative;
                                                            width: 3.04rem;
                                                            border-bottom: .05333rem solid #ebebeb;
                                                            border-radius: .02667rem;
                                                            padding-bottom: .38667rem;
                                                            margin-bottom: .46667rem;
                                                            >p{
                                                                color: #b3b3b3;
                                                                font-size: .37333rem;
                                                                padding-right: .18667rem;
                                                                text-align: center;
                                                                height: .33333rem;
                                                            }
                                                            >span{
                                                                position: absolute;
                                                                left: 50%;
                                                                bottom: -.12rem;
                                                                display: inline-block;
                                                                width: .18667rem;
                                                                height: .18667rem;
                                                                margin-left: -.18667rem;
                                                                border-radius: 50%;
                                                                background-color: #ccc;
                                                            }
                                                        }
                                                        >a{
                                                            display: block;
                                                            width: 3.04rem;
                                                            height: 3.89333rem;
                                                            line-height: 3.89333rem;
                                                            overflow: hidden;
                                                            >img{
                                                                border: none;
                                                                border-color: transparent;
                                                                vertical-align: middle;
                                                                width: 2.85333rem;
                                                                height: 100%;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
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
`