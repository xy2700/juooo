import styled from "styled-components";
export const Header = styled.div`
width:100%;
height:1.32rem;
line-height:1.32rem;
border-bottom:0.03rem solid #ccc;
display:flex;
font-size:0.4rem;
position:fixed;
top:0;
left:0;
background:#fff;
z-index:3;

>a{
    margin-left:.4rem;
    margin-top:0.14rem;
}
>div{
margin-right:.8rem;
    flex:1;
    text-align:center;
}
`

export const Body = styled.div`
padding:1.2rem 0.2rem 0;
background:#fff;
overflow:hidden;
>p{
    padding-top:0.4rem;
    color: #999999;
    margin:0;
}
.hotcity{
    display:flex;
flex-wrap:wrap;
    >a{
    font-size:0.35rem;
    margin:0.33rem 0.15rem 0;
    width:2.88rem;
    height:1rem;
    line-height:1rem;
    text-align:center;
    background:#f5f5f5;
    text-decoration:none;
    color:black;
}
}
.precity{
    margin-top:.1rem;
    a{
    font-size:.34rem;
    margin:.13rem .2rem 0;
    width:2.5rem;
    height:.8rem;
    line-height:.8rem;
    text-align:center;
    background:#f5f5f5;
    text-decoration:none;
    color:black;
    display:inline-block;
}
}
.loccity{
    >a{
        font-size:.34rem;
    margin:.25rem .16rem 0;
    width:4rem;
    height:.80rem;
    line-height:.80rem;
    text-align:center;
    background:#f5f5f5;
    text-decoration:none;
    color:#ff7919;
    display:inline-block;
    }
}
.allcity{
    margin-top:.2rem;
    >span{
        .citykey{
            display:block;
            padding-left:.4rem;
          text-decoration:none;
            height:.7rem;
            line-height:.7rem;
            background:#f6f6f6;
            color:#666;
            margin-left:-.4rem;
            margin-right:-.4rem;
            &:target{
            padding-top:1.3rem;
            }
        }
        >div{
            .citys{
                display:block;
                height:1.2rem;
                line-height:1.2rem;
                font-size:.4rem;
                border-bottom:1px solid #ccc;
                color:#666;
                text-decoration:none;
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
export const Anchor = styled.div`
    position:fixed;
    right:.4rem;
    top:3.33rem;
    a{
        display:block;
        text-align:right;
        color:#666;
        text-decoration:none;
    }
`
export const Show = styled.div`
position:fixed;
left:50%;
top:50%;
transform:translate(-50%,-50%);
width:2.21rem;
height:2.21rem;
color:#ff7919;
line-height:2.21rem;
text-align:center;
font-size:.44rem;
border:0.03rem solid #e0e0e0;
border-radius:.11rem;
background:#fff;
display:none;
`