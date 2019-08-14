import styled from "styled-components";

export const HeaderCont = styled.div`
z-index:100;
display:flex;
justify-content:space-between;
align-items : center;
position:fixed;
left:0;
top:0;
padding:0 0.4rem;
height:1.17rem;
flex-shrink: 0;
width:100%;

&.scrSelect{
    background-color:#fff;
    >.city{
        background:#fff;
        color:#000;
        >i{
        color:#ffaa3a;
        font-size:.6rem;
    }
    }
    >.search{
        background:rgba(0,0,0,.05);
        color:#ccc;
    }
    
}
>a{
    text-decoration:none;
}
.city{
    display:flex;
    background:rgba(0,0,0,.3);
    justify-content:center;
    width:1.56rem;
    height:0.74rem;
    border-bottom-left-radius:0.46rem;
    border-bottom-right-radius:0.46rem;
    border-top-left-radius:0.46rem;
    border-top-right-radius:0.46rem;
    align-items : center;
    color:#fff;
        >span{
        font-size:0.4rem;
        display:inline-block;
        width:0.866rem;
        font-weight:bold;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    >i{
        font-size:0.4rem;
        margin-right:.053rem;
        margin-top:.05rem;
    }
}
.search{
    border-bottom-left-radius:0.46rem;
    border-bottom-right-radius:0.46rem;
    border-top-left-radius:0.46rem;
    border-top-right-radius:0.46rem;
    background:rgba(0,0,0,.2);
    width:6.346rem;
    height:0.746rem;
    line-height:.746rem;
    color:#fff;
    i{
        font-size:.55rem;
        width:0.533rem;
        height:0.533rem;
        vertical-align:middle;
        margin-left:.34rem;
        margin-right:0.22rem;
        margin-top:-.1rem;
    }
}
>span{
    width:.72rem;
    height:.66667rem;
    margin-right:0.8rem;
    img{
        width:100%;
        height:100%;
    }
}

`
