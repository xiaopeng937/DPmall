<template>
  <div class="MeMoney">
    <div>
      <span>
        {{30000000000 | sellCountFilter}}
        <b>元</b>
      </span>
      <p>我的余额</p>
    </div>
    <div>
      <span>
        {{100 | sellCountFilter}}
        <b>个</b>
      </span>
      <p>我的优惠</p>
    </div>
    <div>
      <span>
        {{110000 | sellCountFilter}}
        <b>分</b>
      </span>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MeMoney',
    filters: {
      sellCountFilter: value => {
        if(value >= 10000 && value < 100000000) {
          return (value/10000).toFixed(1) + '万'
        }
        if (value > 100000000) {
          return (value/100000000).toFixed(1) + '亿'
        }
         return value
      }
    }
  }
</script>

<style scoped>
  .MeMoney {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: space-around;
    background-color: #ffffff;
  }

  .MeMoney div {
    flex: 1;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .MeMoney div:nth-child(2) {
    border-left: 1px solid rgba(214, 214, 214, 0.6);
    border-right: 1px solid rgba(214, 214, 214, 0.6);
  }

  .MeMoney div span {
    font-size: 18px;
    font-weight: 600;
    color: rgba(243, 45, 45, 0.774);
  }

  .MeMoney p {
    width: 100%;
    padding-top: 5px;
    color: #797575;
  }

  .MeMoney div span b {
    font-size: 5px;
    color: #000000;
  }
</style>