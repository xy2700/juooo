import styled from "styled-components";

export const Classify = styled.div`
.head{
  width: 100%;
  height: 1.17333rem;
  display: flex;
  justify-content: space-around;
   align-items:center;
}
.search{
    width: 8.05333rem;
    height: .8rem;
    background-color: #f5f5f5;
    border-radius: .4rem;
    padding: 0 .22667rem 0 .37333rem;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    >input{
        height: .53333rem;
        line-height: .53333rem;
        width: 6.26667rem;
        font-size: .34667rem;
        letter-spacing: 0;
        color: #666;
        background: transparent;
        border: none;
    }

    p{
        width: .53333rem;
        height: .53333rem;
        display: block;
        line-height: .53333rem;
        font-size: .44667rem;
        color:#ccc;
    }

    i{
        width: .53333rem;
        height: .53333rem;
        line-height: .53333rem;
        display: block;
        font-size: .44667rem;
        color:#ccc;
    }
}
.cancel{
    font-size: .37333rem;
    color: #666;
    margin-left: -.4rem;
    
}   
.scout-content{
  display: block;
  overflow: hidden;
  width: 100%;
  height: 9rem;
  padding: .69333rem .4rem 0;
  span{
    font-size: .34667rem;
    font-weight: 400;
    color: #666;
    float: left;
    display: block;
    height: .53333rem;
    line-height: .53333rem;
  }
  ul{
      width: 9rem;
      overflow: hidden;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      li{
        padding: 0 .66667rem;
        height: .93333rem;
        line-height: .93333rem;
        font-size: .37333rem;
        color: #232323;
        background-color: #f5f5f5;
        border-radius: .08rem;
        margin-right: .34667rem;
        margin-bottom: .34667rem;
      }
  }
}

.seek-box{
  width: 100%;
  overflow: hidden;
  padding-left: .4rem;
  padding-right: .4rem;
  margin-top: .53333rem;
  .seek{
    overflow: hidden;
    .NotToSearch{
      margin-top: 1.13333rem;
      margin-bottom: 1rem;
      text-align: center;
      img{
        width: 2.4rem;
        height: 1.73333rem;
        margin: 0 auto;
      }
      span{
        font-size: .34667rem;
        color: #999;
        height: .53333rem;
        line-height: 1.53333rem;
        margin-top: .53333rem;
      }
    }
    .tj{
      font-size: .53333rem;
      font-weight: 700;
      color: #232323;
    }
    ul{
    margin-top: .5rem;
        li{
          margin-bottom: .86667rem;
          position: relative;
          display: flex;
          .seek-top{
            width: 2.93333rem;
            height: 4rem;
            border-radius: .10667rem;
            position: relative;
            overflow: hidden;
            img{
              width: 100%;
              
            }
          }
          .seek-botton{
            flex: 1;
            margin-left: .4rem;
            color: #232323;
            padding-top: .13333rem;
            h1{
                font-size: .32rem;
                height: .64rem;
                line-height: .64rem;
                letter-spacing: 1px;
                color: #666;
                margin: 0;
                span{
                    color: #232323;
                    font-size: .42667rem;
                }
            }
            h2{
                width: 6rem;
                font-size: .45333rem;
                line-height: .6rem;
                min-height: .6rem;
                max-height: 1.2rem;
                margin-top: .33333rem;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            h3{
                margin-top: .33333rem;
                width: 5.33333rem;
                font-size: .32rem;
                height: .64rem;
                line-height: .64rem;
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            h4{
                font-size: .29333rem;
                color: #999;
                height: .48rem;
                line-height: .48rem;
                margin-top: .26667rem;
                span{
                    font-size: .4rem;
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
  .c_ff6{
      color: #ff6743!important;
  }
  
}





`;
