import styled from "styled-components";

const outLogin = styled.div`
  .body-box{
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    .navbar{
      
      width: 100%;
      height: 1rem;
      font-size: 0.4rem;
      color: #212121;
      
      background-color: #fff;
      .nav{
          display: flex;
          padding: 0 0.35rem 0 0.32rem;
          justify-content:space-between;
          align-items:center;
          line-height: 1rem;
          .left{
            i{
              font-size: .7rem;
              margin-top: .1rem;
            }
          }
          .right{
              i{
                  font-size: .5rem;
                  margin-top: .2rem;
              }
          }
      }
    }
    .content{
    >div{
     margin-top: .23rem;
    }
      .content-top{
        background-color:#fff;
        div{
          display: flex;
          justify-content:space-between;
          height: 1.5rem;
          line-height: 1.5rem;
          margin: 0 0.32rem 0 0.34rem;
          border-bottom:1px solid #f6f6f6 ;
          color: #212121;
          span{
              font-size: 0.35rem;
          }
          img{
            border-radius: 100%;
            width: 1rem;
            height: 1rem;
            background: #f5f5f5;
            margin-top: .2rem;
          }
        }
      }
      .content-bottom{
         background-color:#fff;
         >div{
            display: flex;
            justify-content:space-between;
            height: 1.2rem;
            line-height: 1.2rem;
            margin: 0 0.32rem 0 0.34rem;
            border-bottom:1px solid #f6f6f6 ;
            color: #212121;
            span{
                font-size: 0.35rem;
            }
            >div{
              color: #999;
              i{
                margin-left: .2rem;
                line-height: 1.2rem;
              }
            }
            .sr{
             color: #999;
             font-size: 0.25rem;
            }
         }   
      }
      .footer{
        margin: .6rem 0.32rem 3rem 0.34rem;
        span{
            display: block;
            border: none;
            border-radius: 0.1rem;
            width: 100%;
            height: 1.1rem;
            font-size: 0.4rem;
            line-height: 1.1rem;
            text-align: center;
            color: #212121;
            background-color: #fff;
        }
      }
    }
    
  }
`;




export default outLogin
