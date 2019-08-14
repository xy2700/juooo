import styled from "styled-components"

export const Perform = styled.div`
    font-family: Avenir,Helvetica,Arial,sans-serif;
    width: 100%;
    height: 100%;
    >.show_library{
        padding-top: 2.61333rem;
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 100%;
        >.head_nav{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 1.17333rem;
            line-height: 1.17333rem;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-bottom: 1px solid #ebebeb;
            background-color: #fefefe;
            z-index: 100;
            >span{
                position: absolute;
                top: 0;
                display: inline-block;
                width: 1.33333rem;
                height: 100%;
                left: 0;
                background-size: .53333rem .53333rem;
                img{
                    margin-top:20%;
                    height: 50%;
                    width: 50%;
                }
            }
            >h3{
                font-size: .48rem;
                font-weight: 400;
                color: #232323;
                padding: 0 1.33333rem;
            }
        }
        >.show_type_wrap{
            display: flex;
            padding-left: .4rem;
            padding-bottom: .26667rem;
            padding-top: .26667rem;
            background-color: #fefefe;
            position: fixed;
            left: 0;
            top: 1.17333rem;
            z-index: 10;
            width: 100%;
            box-sizing: border-box;
            >.show_type{
                -webkit-box-flex: 1;
                flex: 1;
                width: 7.33333rem;
                margin-right: .13333rem;
                overflow: hidden;
                overflow-x: scroll;
                >ul{
                    display: flex;
                    white-space: nowrap;
                    width: 17.6rem;
                    >li{
                        pointer-events: auto;
                        font-size: .4rem;
                        color: #232323;
                        padding: 0 .13333rem;
                        border-bottom: .04rem solid transparent;
                        border-radius: .02667rem;
                        height: .64rem;
                        line-height: .64rem;
                        margin-right: .4rem;
                    }
                    >.active{
                        color: #ff6743;
                        border-color: #ff6743;
                    }
                }
            }
            >.city_wrap{
                width: 2rem;
                border-left: .02667rem solid #e0e0e0;
                font-size: .4rem;
                color: #666;
                height: .37333rem;
                line-height: .37333rem;
                margin-top: .13333rem;
                text-align: center;
                >.city{
                    margin-right:0.1rem;
                }
                >.city_icon{
                    display: inline-block;
                    width: .29333rem;
                    height: .34667rem;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QjRBNjcwRDU2QTExMUU5Qjk4RkUwNDg5NTQ0RUI0MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QjRBNjcwRTU2QTExMUU5Qjk4RkUwNDg5NTQ0RUI0MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNEE2NzBCNTZBMTExRTlCOThGRTA0ODk1NDRFQjQyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdCNEE2NzBDNTZBMTExRTlCOThGRTA0ODk1NDRFQjQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k+3XFQAAAp9JREFUeNq0lktIlFEUx50piiAIooioyMrIChGiB0pBtIhpMYFNQpC0kRiE6YULa5WEoC2iRS+HaBMJvSMKVGhRLQQxCJFEs4jMqCCCaBH2YPqd+k+cbuMwY3Thx7lz7jn/737fPffeiWQymZL/0SL5hJPJ5AzMLtgB62Ceht5BH9yEy+l0+nPBwogmMKdgvlwv4ZX6i2Cx+m9gH+I38gojGMGcgEPwBU7DeRKHgrhyzF5IwTQ4CY3E/RScmmOybRJ9AjUEjuR6Iz2okQe0Y28p5ys0/TVjgmKYThiEapI/FrJQ5M3C9MAq2EZe129hBqdghvTtKhgcdon2ZjWwQa5emyUx31zMCsyA1qI86h4ch7Jfb/mH6DJMP1yFhLB+v8ayn8Zy0tKIe+GE7Lmg3OzTTIf1JC8xrC9fp2JKgtyEF66GURIHna8eSiGGv8/NzvoxjdU7v+WOmpYXtqDhYF22QjcJz3JUhfm6FeObaZR6Yet/CoJmw1ieghhTjG+mEfXC4zA3CLIVrswjXKkY32zbj3thK7XVKrtsuwJV+OI5atd8VYrxJbvStPzOewD7YaP61u6IayQ1Y6/LvxOa3Xi2bdKnueRnfFG2yS2Q7Z5auAAtMCJa5KvNng1qB7Na4ZbOrnKchLvBq8/BrNXPR4y/D8a3Y26rimKh8HLMY/huDyCgt8CzwhbxIdg3XkPe02hQm/aadTATukioKEDUYu4pp85EJzzoCbZbowM+wBaCByYQLdNMrcT2ENdRyA2yWwtqN8TmcPcxvlSiC6CB8fZi7rwGzFl4baVE8gv5F2Lug51uKfxnirpMJZLS3ffcZq7rqkeiRxBtK/qWduKHMa3wFuxwtxkfRfTYpK7/QPyAiemwOo5o66T/V/xL+yHAAH7VH3/5D8o0AAAAAElFTkSuQmCC);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: 50%;
                }
            }
        }
    }
`

export const Warp = styled.div`
    width: 100%;
    height: 100%;
    overflow:auto;
        >.library-wrap{   
            /* margin-bottom: 1rem; */
            box-sizing: border-box;
            position: relative;
            width: 100%;
            height: 100%;
            z-index:2;
            overflow:auto;
            >.recommend-wrap{
                padding-left: .4rem;
                padding-right: .4rem;
                >.recommend-list{
                    margin-top: 0;
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
                    }
                }
            }
            >p{
                font-size: .32rem;
                color: #666;
                text-align: center;
                height: .53333rem;
                line-height: .53333rem;
                padding-bottom: .26667rem;
            }
        }
`

export const City = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 1.17333rem;
    bottom: 0;
    z-index: 100;
    >.dialog_bg{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.6);
        >.filtrate_bg{
            width: 2.16rem;
            height: 100%;
            float: left;
        }
        >.filtrate-data{
            width: 7.84rem;
            height: 100%;
            background-color: #fefefe;
            float: right;
            padding: .4rem .4rem 0;
            box-sizing: border-box;
            position: relative;
            >.city-list{
                >.title{
                    font-size: .4rem;
                    color: #666;
                    height: .53333rem;
                    line-height: .53333rem;
                }
                >.list-wrap{
                    width:7.2rem;
                    height: 13.6rem;
                    padding-bottom: 1.2rem;
                    margin-top: .26667rem;
                    box-sizing: border-box;
                    overflow-y: scroll;
                    overflow-x: none;
                    >ul{
                        width:7.2rem;
                        >li{
                            float: left;
                            text-align: center;
                            width: 2.24rem;
                            height: .85333rem;
                            line-height: .85333rem;
                            border-radius: .05333rem;
                            background-color: #f5f5f5;
                            color: #232323;
                            font-size: .32rem;
                            margin-right: .16rem;
                            margin-bottom: .16rem;
                        }
                        .active{
                            background-color: #fff1e9;
                            color: #ff6743;
                        }
                    }
                }
            }
            >.foot{
                height: 1.2rem;
                border-top: 1px solid #ebebeb;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                text-align: center;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #fefefe;
                >span{
                    -webkit-box-flex: 1;
                    flex: 1;
                    font-size: .37333rem;
                    color: #232323;
                    height: 1.2rem;
                    line-height: 1.2rem;
                }
                >.active{
                    color: #fff;
                    background-color: #ff6743;
                }
            }
        }
    }
`
