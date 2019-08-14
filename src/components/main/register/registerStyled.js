import styled from "styled-components";

const registerStyled = styled.div`
  body{
    width: 100%;
    height: 100%;
  }
  .notlogin-bg{
    background-image: url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: hidden;
    background-color:#fff;
    .navbar{
      width: 100%;
      height: 1.87733rem;
      overflow: hidden;
      div{
        line-height: 1.87733rem;
        padding: 0 0.68267rem 0 0.4rem;
        width: 100%;
        height: 100%;
        i{
          font-size: 1rem;
          color: #d8d8d8;
        }
      }
    }
    .content{
        overflow: hidden;
        padding: 0 1rem 0;
        height: 15rem;
        .content-box{
          h1{
            height: 1.024rem;
            font-size: 0.7rem;
            font-weight: 700;
            font-stretch: normal;
            line-height: 1.024rem;
            color: #232323;
          }
          .content-form{
            overflow: hidden;
            form{
              p{
                width: 100%;
                height: 2rem;
                font-size: .5rem;
                line-height: 2rem;
                border-bottom:1px solid #ccc;
                &:last-child{
                  border:none;
                }
                input{
                  float: right;
                  border:none;
                  background:none;  
                  outline:none;  
                  margin-top: 1rem;
                  height: .8rem;
                  padding-left: .4rem;
                  width:100%;
                  font-size:.4rem;
                }
                input::placeholder{
                    color:#ccc;
                    font-size:.4rem;
                  }
                button{
                    margin: .8rem auto 0;
                    padding: 0;
                    border: 1px solid transparent;  //自定义边框
                    outline: none;    //消除默认点击蓝色边框效果
                    height: 1rem;
                    width: 5rem;
                    display: block;
                    border-radius:.3rem;
                    background-color:#ccc;
                    color: white;
                }
                .butselect{
                  
                  background-color:#ffaa3a;
                }
              }
            }
          }
        }
    }
    .footer-wrap{
        position: absolute;
        width: 100%;
        bottom: 1.28rem;
        .footer-box{
            display: flex;
            justify-content: center;
            div{
              display: flex;
              justify-content: center;
              width: 2rem;
              img{
              display: block;
              height: 1rem;
              }
            }
        }
    }
  }
  
  
  
  
  
  
  
  
`;


export default registerStyled
