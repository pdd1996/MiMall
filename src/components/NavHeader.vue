<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="">小米商城</a>
          <a href="">MIUI</a>
          <a href="">云服务</a>
          <a href="">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="">登录</a>
          <a href="">注册</a>
          <a href="" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视 E55A</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视 E55A</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视 E55A</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视 E55A</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视 E55A</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/config.scss';

  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #FFFFFF;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url('/imgs/icon-cart-checked.png') no-repeat center;
            background-size: contain;
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 112px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a {
            display: inline-block;
            width: 110px;
            &:before {
              // 伪类 占位
              content: '';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/imgs/mi-logo.png') no-repeat center;
              background-size: 55px; //background-size: contain
              transition: margin .2s;
            }
            &:after {
              content: '';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/imgs/mi-home.png') no-repeat center;
              background-size: 55px; //background-size: contain
            }
            &:hover:before {
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu {
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .children {
                height: 220px;
                opacity: 1;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 0;
              opacity: 0;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition: all .5s;
              overflow: hidden;
              .product {
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a {
                  display: inline-block;
                }
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img {
                  height: 137px;
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }
            }
          }
        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input {
              border: none;
              border-right: 1px solid #E0E0E0;
              box-sizing: border-box;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a {
              display: inline-block;
              width: 18px;
              height: 18px;
              background: url('/imgs/icon-search.png') no-repeat center;
              background-size: contain;
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>