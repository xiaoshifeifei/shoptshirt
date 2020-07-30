<template>
  <div class="products-layout" :class="{ 'mobile-all': !isPC }" ref="layout">
    <div class="menu-button" v-if="!isPC">
      <Button @click="menuOpen = !menuOpen">Menu</Button>
    </div>
    <div :class="{ 'pc-menu': isPC, 'mobile-menu': !isPC }" v-show="isPC || menuOpen">
      <Collapse simple style="width: 100%;">
        <Panel name="1">
          Products
          <div slot="content">
            <button
              class="ivu-btn genders"
              :class="{ active: product.id === prod.id }"
              v-for="prod in data.left_tree"
              :key="prod.name"
              @click="product = prod"
            >
              {{ prod.name }}
            </button>
          </div>
        </Panel>
        <Panel name="2">
          Categories
          <div slot="content">
            <button
              class="ivu-btn genders"
              :class="{ active: gender === cate }"
              v-for="cate in data.blank_id_gender"
              :key="cate"
              @click="selectGender(cate)"
            >
              {{ cate }}
            </button>
          </div>
        </Panel>
       
        <Panel name="3">
          Colors
          <div slot="content" style="display: flex; flex-flow: row wrap;">
            <div
              class="colors color-OK"
              :style="{ 'background-color': code }"
              v-for="(code, colo) in data.select_color"
              :key="colo"
              @click="selectColor(colo)"
            >
            <div class="color-bef" v-if="color == colo"></div>
          </div>
          </div>
        </Panel>
        <Panel name="4">
          Sizes
          <div slot="content">
            <button
              class="ivu-btn genders"
              :class="{ active: size === cate }"
              v-for="cate in data.select_size"
              :key="cate"
              @click="selectSize(cate)"
            >
              {{ cate }}
            </button>
          </div>
        </Panel>
      </Collapse>
    </div>
    <div class="products" v-show="isPC || !menuOpen">
      <div class="tags" :style="{ 'margin-top': isPC ? '0' : '40px' }">
        <Tag type="dot" closable name="gender" v-if="gender !== ''" @on-close="selectGender('')">{{ gender }} </Tag>
        <Tag type="dot" closable name="color" v-if="color !== ''" @on-close="selectColor('')">{{ color }}</Tag>
        <Tag type="dot" closable name="size" v-if="size !== ''" @on-close="selectSize('')">{{ size }}</Tag>
      </div>
      <Scroll class="scroll" :on-reach-bottom="handleReachBottom">
        <div
          class="product"
          v-for="product in rq_data.list.data"
          :key="product.products_id"
          :style="{ 'background-color': choose.products_id === product.products_id ? '#D8D8D8' : '' }"
          @click="choosed(product)"
        >
          <div class="img">
            <img :src="host + product.products_design_img" alt="" />
          </div>
          <div class="content">
            <div style="font-size: 18px;">{{ product.products_en_name }}</div>
            <div style="font-size: 18px;font-weight: 700;">{{ product.products_market_price }}</div>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import { Collapse, Panel, Button, Tag, Scroll } from 'view-design'

export default {
  components: {
    Collapse,
    Panel,
    Button,
    Tag,
    Scroll,
  },
  name: 'Products',
  data() {
    return {
      product: {},
      size: '',
      gender: '',
      color: '',
      page: 1,
      rq_data: {
        list: {},
      },
      data: {},
      host: 'http://test5.heroinhere.com',
      choose: {},
      isPC: true,
      menuOpen: true,
    }
  },
  mounted() {
    this.product.id = 196
    this.getData()
    window.screenWidth = document.body.clientWidth
    this.isPC = window.screenWidth > 600
  },
  methods: {
    handleReachBottom() {
      console.log(0)
      this.$http
        .get(
          '/api/product/index',
          {
            id: this.product.id,
            size: this.size,
            gender: this.gender,
            page: ++this.page,
            color: this.color,
          },
          {
            'Content-Type': 'form',
          }
        )
        .then((res) => {
          console.log(res)
          this.rq_data.list.data = [...this.rq_data.list.data, ...res.data.list.data]
          // this.data = res.data;
        })
    },
    choosed(product) {
      this.choose = product
      console.log(product)
      this.$emit('choose', product)
    },
    selectSize(size) {
      this.size = size
      this.getData()
    },
    selectGender(gender) {
      this.gender = gender
      this.getData()
    },
    selectColor(color) {
      this.color = color
      this.getData()
    },
    getData() {
      this.page = 1
      this.$http
        .get(
          '/api/product/index',
          {
            id: this.product.id,
            size: this.size,
            gender: this.gender,
            page: this.page,
            color: this.color,
          },
          {
            'Content-Type': 'form',
          }
        )
        .then((res) => {
          console.log('resresresres',res);
          this.rq_data = res.data
          this.data = res.data
          this.choosed(res.data.list.data[0])
          console.log(this.rq_data)
        })
    },
  },
  watch: {
    product() {
      this.size = this.gender = this.color = ''
      this.getData()
    },
  },
}
</script>

<style lang="scss">
.ivu-scroll-wrapper {
  width: 100%;
}

.ivu-scroll-container {
  width: 100%;
  height: calc(100vh - 220px) !important;
}

.ivu-scroll-content {
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  .product {
    width: 400px;
    height: 450px;
    transition: background linear 90ms;

    .img {
      padding: 10px;

      img {
        width: 380px;
        height: 380px;
        box-shadow: 1px 0px 12px -3px;
      }
    }

    .content {
      height: 44px;
      line-height: 44px;
      display: flex;
      flex-flow: row;
      justify-content: space-around;
    }
  }

  :hover {
    background-color: #eee;
  }
}
</style>

<style scoped lang="scss">
.pc-menu {
  width: 300px;
}

.mobile-menu {
  width: 100vw;
  height: 100vh;
  position: absolute;
  padding-top: 50px;
  top: 0;
  left: 0;
  background: #ffffff;
}

.mobile-all {
  .products {
    width: 100% !important;
    margin-left: 0 !important;
  }

  .product {
    width: 100% !important;
  }

  .img {
    padding: 5px !important;

    img {
      width: 100% !important;
      height: 380px !important;
    }
  }
}

.menu-button {
  position: absolute;
  left: 0;
  top: 5px;
  width: 80px;
  height: 45px;
  line-height: 45px;
  z-index: 999;
  background: #ffffff;
  text-align: center;
}

.tags {
  height: 45px;
  width: 100%;
  background: #fff !important;
}

.products-layout {
  height: 100%;
  width: 100%;

  display: flex;

  .genders {
    height: 30px;
    line-height: 30px;
    margin: 5px;
  }

  .colors {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 15px;
    border: aqua 1px solid;
  }

  .products {
    flex: 1;
    margin-left: 20px;
    width: 100%;
  }
}
/* 修改样式start */
.color-OK {
  position: relative;
}
.color-bef {
  width: 20px;
  height: 10px;
  /* background-color: black; */
  position: absolute;
  top: 7px;
  left: 4px;
  border-left: 3px solid #ffffff;
  border-bottom: 3px solid #ffffff;
  transform: rotate(-40deg);
  box-shadow: -1px 1px 2px 0px;
}
/* 修改样式end */
</style>
