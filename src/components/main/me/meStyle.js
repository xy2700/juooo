import styled from "styled-components";

const my = styled.div`
.pages{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f6f6f6;
  padding-bottom: 1rem;
  .head{
    position: relative;
    width: 100%;
    height: 5.12rem;
    background: url(https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/integral.jpg) center 0 no-repeat;
    
    .head-top{
      width: 100%;
      height: 2.5rem;
      padding: .6rem .3rem 0 .3rem;
      div{
        float: left;
        img{
            border: 2px solid #e6e6e6;
            border-radius: 100%;
            width: 1.4rem;
            height: 1.4rem;
            background: #f5f5f5;
        }
        p{
          margin-left: .5rem;
          margin-top: .2rem;
          color: white;
          width: 6rem;
          font-size: 0.38267rem;
        }
        .id{
          font-size: 0.2rem;
        }
        i{
          color: white;
          font-size: .4rem;
          margin-left: 1rem;
          margin-top: .4rem;
        }
      }
    }
    .head-buttom{
      width: 9rem;
      height: 2rem;
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
      position: absolute;
      bottom: -2rem;
      left: 50%;
      margin-left: -4.5rem;
      background: url(https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/pic_plusCard.png) center  no-repeat;
      background-size: cover;
      color: #d8c9a3;
      div{
        float: left;
        img{
            width: 3.5rem;
            margin: 0.34rem 0.34rem 0 0.34rem;
        }
        p{
            font-size: 0.25rem;
            color: #d8c9a3;
            padding-left: 0.34rem;
            padding-top: 0.128rem;
            letter-spacing: 0.04533rem;
        }
        span{
          display: block;
          width: 2.5rem;
          height: 0.5rem;
          line-height: 0.5rem;
          border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
          font-size: 0.2rem;
          letter-spacing: 0.06533rem;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.2);
          margin-top: .4rem;
          margin-left: .9rem;
        }
      }
      .flash{
        width: 1rem;
        height: auto;
        position: absolute;
        left: -1rem;
        button:2rem;
      }
    }
  }
  .category-wrap{
    padding: 0.6rem 0;
    background: #fff;
    position: relative;
    z-index: 99;
    ul{
      display: flex;
      li{
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        p{
          font-size: 0.25rem;
          color: #8c8c8c;
          margin:0 1rem;
        }
        .warp-p{
          font-size: 0.25rem;
          color: #ff7919;
          margin-bottom: .1rem;
          span{
            font-size: 0.5rem;
          }
        }
      }
    }
  }
  .list{
    margin-top: 0.26rem;
    background: #fff;
    a{
        display: block;
        position: relative;
        margin-left: .9rem;
        height: 1.1rem;
        font-size: .39rem;
        line-height: 1.1rem;
        color: #999;
        i{
            font-size: 0.32rem;
            line-height: 1rem;
            color: #999;
            margin-right: .3rem;
        }
        p{  
            position: absolute;
            right: 1rem;
            top: 0;
            font-size: .2rem;
            color: #999;
            display: inline;
        }
        span{
          position: absolute;
          right: 0.5rem;
          top: 0.35rem;
        }
    }
  }
  .service{
    div{
        display: block;
        width: 7rem;
        height: .9rem;
        margin: 0.32rem auto 1rem;
        background-color: #ffffff;
        border-radius: 0.06rem;
        border: 1px solid #e6e6e6;
        text-align: center;
        color: #ff7919;
        font-size: 0.3rem;
        font-weight: bold;
        line-height: .9rem;
        span{
          margin-left: .2rem;
        }
    }
  }
}






.plus{
    -webkit-animation: cardJump .6s .6s linear forwards;
    animation: cardJump .6s .6s linear forwards;
}
@keyframes cardJump{
	from {bottom: -2rem;}
	to {bottom: 0;}
}
@-webkit-keyframes cardJump /*Safari and Chrome*/
{
	from {bottom: -2rem;}
	to {bottom: 0;}
}

.flash-cartoon{
    -webkit-animation: cartoon 2s 2s linear forwards;
    animation: cartoon 2s 2s linear forwards;
}
@keyframes cartoon{
	from {
	  left: -1rem;
	}
	to {
	  left: 12rem;
	}
}
@-webkit-keyframes cartoon /*Safari and Chrome*/
{
	from {
	  left: -1rem;
	}
	to {
	  left: 12rem;
	}
}




`;




export default my
