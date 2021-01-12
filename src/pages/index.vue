<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="">手机 电话卡</a>
              <div class="children">
                <ul v-for="item in menuList" :key="item.id">
                  <li v-for="sub in item" :key="sub.id">
                    <a :href="sub ? '/#/product/' + sub.id : '' ">
                      <img :src="sub.img || '/imgs/item-box-1.png' " alt="">
                      {{sub.name || '小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id"><img :src="item.img" /></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">

      </div>
      <div class="banner">

      </div>
      <div class="product-box">

      </div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect : "cube",
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        },
        {
          id: '47',
          img: '/imgs/slider/slide-4.jpg'
        },
        {
          id: '48',
          img: '/imgs/slider/slide-5.jpg'
        }
      ],
      menuList: [
        [
          {
           id: 30,
           img: 'imgs/item-box-1.png',
           name: '小米CC9'
          },
          {
           id: 31,
           img: 'imgs/item-box-2.png',
           name: '小米8 青春版'
          },
          {
           id: 32,
           img: 'imgs/item-box-3.jpg',
           name: 'Redmi K20 Pro'
          },
          {
           id: 33,
           img: 'imgs/item-box-4.jpg',
           name: '移动4G+ 专区'
          }  
        ],
        [
          {
           id: 30,
           img: 'imgs/item-box-1.png',
           name: '小米CC9'
          },
          {
           id: 31,
           img: 'imgs/item-box-2.png',
           name: '小米8 青春版'
          },
          {
           id: 32,
           img: 'imgs/item-box-3.jpg',
           name: 'Redmi K20 Pro'
          },
          {
           id: 33,
           img: 'imgs/item-box-4.jpg',
           name: '移动4G+ 专区'
          }  
        ]
      ]
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
  @import '../assets/scss/config.scss';
  .index {
    .swiper-box {
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background-color: #55585A;
        // 盒模型: 包括padding
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              font-size: 16px;
              color: #FFFFFF;
              padding-left: 30px;
              display: block;
              position: relative;
              &:after {
                // 暂位
                content: '';
                width: 10px;
                height: 15px;
                background: url('/imgs/icon-arrow.png') no-repeat center;
                background-size: contain;
                position: absolute;
                right: 30px;
                top: 17.5px;
              }
            }
            &:hover {
              background-color: $colorA;
              transition: all .5s;
              .children {
                display: block;
              }
            }
            .children {
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid $colorH;
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                li {
                  height: 75px;
                  line-height: 75px;
                  // width: 241px;
                  // 平均值
                  flex: 1;
                  padding-left: 23px;
                }
                a {
                  color: $colorB;
                  font-size: 14px;
                }
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        img {
          width: 100%;
          height: 100%;
        }
      }  
    }
  }
</style>