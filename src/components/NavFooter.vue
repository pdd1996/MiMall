<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="">预约维修服务</a><span>|</span>
      <a href="">7天无理由退货</a><span>|</span>
      <a href="">15天免费换货</a><span>|</span>
      <a href="">满99元包邮</a>
    </div>
    <div class="copyright">Copyright @2021 pdd337816464@gmail.com All Rights Roserved.</div>
  </div>
</template>

<script>
export default {
  name: 'nav-footer'
}
</script>

<style lang="scss" scope>
  .footer {
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;
       img {
         width: 53px;
         height: 36px;
         margin-bottom: 13px;
       }
    }
    .footer-link {
      margin-bottom: 13px;
      a {
        color: #999999;
        display: inline-block;
      }
      span {
        margin: 0 10px;
      }
    }
  }
</style>