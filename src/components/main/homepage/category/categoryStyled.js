import styled from "styled-components";

const Category = styled.div`
    z-index: 1;
  .categoryWraps-box{
    overflow: hidden;
  }
  .category-box{
    overflow: hidden;
  }
  .category-title-wrap{
    overflow: hidden;
  }
  .category-title{
    overflow: hidden;
  }
  .category-title h1{
    font-size: .53333rem;
    font-weight: 700;
    color: #232323;
    float: left;
    padding-left: .4rem;
    height: .61333rem;
    line-height: .61333rem;
  }
  .category-title i{
    display: block;
    float: right;
    width: .53333rem;
    height: .53333rem;
    margin-top: .4rem;
    font-size:.6rem;
  }
  .category-centre{
    background: rgb(131, 124, 101);
    margin-top: .53333rem;
  }
  .bg_c{
    background-color: rgba(0,0,0,.2);
    padding: .37333rem 0 .37333rem .4rem;
  }
  .bg_c>a{
    display: flex;
  }
  .category-item-top{
    width: 2.85rem;
    height: 3.89rem;
    border-radius: .10667rem;
    border: 1px solid #ebebeb;
    position: relative;
    overflow: hidden;
  }
  .category-item-top img{
    border: none;
    border-color: transparent;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
  .juooo_sponsor{
     z-index: 10;
    position: absolute;
    left: .10667rem;
    top: -.02667rem;
    width: .77333rem;
    height: .93333rem;
    display: block;
    background-size: 100%;
  }
  .category-item-bottom{
    flex: 1;
    margin-left: .4rem;
    color: #fefefe;
    padding-top: .42667rem;
  }
  .category-item-bottom h2{
    font-size: .32rem;
    height: .64rem;
    line-height: .64rem;
    letter-spacing: 1px;
  }
  .category-item-bottom h2 span{
     margin-right: .2rem;
     font-size: .42667rem;
  }
  .category-item-bottom h3{
    width: 90%;
    font-size: .45rem;
    line-height: .6rem;
    max-height: 1.2rem;
    min-height: .6rem;
    margin-top: .33333rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .category-item-bottom h4{
    margin-top: .33333rem;
    width: 5.6rem;
    font-size: .32rem;
    height: .64rem;
    line-height: .64rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight:lighter;
  }
  //轮播
  .category-bottom{
    padding: .4rem 0 0 .4rem;
    
  }
  .category-banner{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .swiper-slide{
    width: 107px;
    margin-right: 8px;
    overflow: hidden;
    a{
      img{
        border-radius: .10667rem;
        border: 1px solid #ebebeb;
        width: 100%;
        position: relative;
      }
      h5{
        height: .66667rem;
        line-height: .66667rem;
        font-size: .45333rem;
        color: #232323;
        margin-top: .26667rem;
        margin-bottom: 0;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        font-size: .29333rem;
        color: #999;
        height: .48rem;
        line-height: .48rem;
        margin-top: .13333rem;
        span{
        color: #ff6743!important;
            font-size: .42667rem;
            letter-spacing: 0;
            margin-right: .13333rem;
            font-weight: 400;
        }
      }
    }
  }
  
  
  
  
  
  
  
  
`;


export default Category
