
import styled from "styled-components";

export const NavCont = styled.div`

padding:.53rem .39rem 0;
background:#fff;
`
export const Classify = styled.div`
display:flex;
justify-content:space-around;
    .clf{
     width:1.199rem;
     height:1.73rem;
        a{
            text-decoration:none;
            display:flex;
          flex-direction:column;
          align-items:center;
            img{
                width:1.1994rem;
                height:1.1994rem;
                vertical-align:middle;
            }
            span{
                font-size: .34667rem;
                color: #232323;
                margin-top: .2rem;
            }
        }
    }
`
export const Operation = styled.div`
background:#f5f5f5;
;
box-shadow:
rgba(35, 35, 35, 0.08) 0px 4px 30px 2px;
margin-top:.8rem;
ul{
    display:flex;
    padding:0;
    justify-content:space-around;
        a{
             background:#fefefe;
             text-decoration:none;
             color:black;
             display:flex;
             align-items : center;
             justify-content : center;
            border-bottom-left-radius:6px;  
            border-bottom-right-radius:6px;  
            border-top-left-radius:6px;
             border-top-right-radius:6px;
            div{
                h3{
                    margin-bottom:.133rem;
                }
                p{
                    margin:0;
                    font-size:.3rem;
                    color:#666;
                    span{
                        color:#ff6743;
                    }
                }
                &:nth-child(2){
                    width:1.1994rem;
                    height:1.1994rem;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    &:nth-child(1){
        li{
            
            list-style:none;
            a{      
            padding:0 .45rem;
            width:3.52rem;
            height:2.4rem;
            align-items:center;
            justify-content:space-between;
            div:nth-child(1){
                h3{
                    font-size:.4rem;
                    margin-top:0;
                }
            }
            }
        }
    }
    &:nth-child(2){
      margin-top:.16rem;

        li{
            list-style:none;
            a{
              
                text-align:center;
                width:2.93rem;
                height:2.692rem;
                flex-direction:column;
                align-items:center;
             h3{
                font-size:.4rem;
             }
            }
        }
    }
}

`
export const Advert = styled.div`
margin-top: .8rem;
width: 100%;
height: 2.66667rem;
border-radius: 1.33333rem;
overflow: hidden;
border: 1px solid #add8e6;
div{
    height: 2.66667rem;
    a{
        height: 2.66667rem;
        display:block;
        img{
            width:100%;
            height:100%;
        }
    }
}
`
