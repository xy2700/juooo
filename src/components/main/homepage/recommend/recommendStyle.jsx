import styled from "styled-components"

export const RecommendWrap = styled.div`
    margin-top: 1.06667rem;
    padding: 0 .4rem;
    overflow:auto;
    >.title-wrap{
        overflow:auto;
        >h3{
            font-size: .53333rem;
            font-weight: 700;
            color: #232323;
            float: left;
            margin:0;           
        }
    }
    >.recommend-list{
        margin-top: 0.53333rem;
        >ul{
            >li{
            display: flex;
            margin-bottom: .86667rem;
            position: relative;
                >.show-icon{
                    width: 2.93333rem;
                    height: 4rem;
                    border-radius: .10667rem;
                    border: 1px solid #ebebeb;
                    position: relative;
                    overflow: hidden;
                    >a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        img{
                            border: none;
                            border-color: transparent;
                            vertical-align: middle;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    >.juooo_sponsor{
                        z-index:2;
                        >.logo_i{
                            position: absolute;
                            left: .10667rem;
                            top: -.02667rem;
                            width: .77333rem;
                            height: .93333rem;
                            display: block;
                            >img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                >.item-desc {
                    -webkit-box-flex: 1; 
                    flex: 1;
                    margin-left: .4rem;
                    color: #232323;
                    padding-top: .13333rem;
                    >.show-date{
                        font-size: .32rem;
                        height: .64rem;
                        line-height: .64rem;
                        letter-spacing: 1px;
                        color: #666;
                        >strong{
                            color: #232323;
                            font-size: .42667rem;
                            margin-right: 0.15rem;
                        }
                    }
                    >a{
                        display: block;
                        color: #232323;
                        >h3{
                            width: 100%;
                            font-size: .45333rem;
                            line-height: .6rem;
                            min-height: .6rem;
                            max-height: 1.2rem;
                            margin-top: .33333rem;
                            word-break: break-all;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    >.venue{
                        margin-top: .33333rem;
                        width: 5.33333rem;
                        font-size: .32rem;
                        height: .64rem;
                        line-height: .64rem;
                        color: #666;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .price{
                        font-size: .29333rem;
                        color: #999;
                        height: .48rem;
                        line-height: .48rem;
                        margin-top: .26667rem;
                        >strong{
                            font-size: .42667rem;
                            letter-spacing: 0;
                            margin-right: .13333rem;
                            font-weight: 400;
                            color: #ff6743!important;
                        }
                    }
                }
            }   
            >.btn-more{
            display: block;
            margin: 0 auto;
            width: 4.24rem;
            height: .96rem;
            line-height: .96rem;
            border-radius: .10667rem;
            border: 1px solid #ff6743;
            font-size: .4rem;
            color: #ff6743;
            background:#fff;
            margin-bottom:1.8rem;
            img{
                width: .13333rem;
                height: .26667rem;
                margin-left: .13333rem;
                vertical-align: initial;
            }
        }        
        }
    }
`