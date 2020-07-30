<template>
  <div style="width: 100%;height: 100%;">
    <!-- 第一部分头部 -->
    <div class="header">
      CHECKOUT USE CODE : 2020 TO GET 20% OFF ! ! ! FREE SHIPPING ON ORDERS OVER $80
    </div>
    <div class="t-shirt">
      <!-- 第二部分左侧 -->
      <template v-if="isPC">
        <!-- <div style="flex: 1;background-color: #fff;"></div> -->
        <div class="buttons">
          <!-- <Button @click="designsModal = true" class="btn_s trans_btn">getDesigns</Button> -->
          <div class="img-list">
            <div class="img-upd">
              <!-- 添加文字部分 -->
              <div class="clear_hidde">
                <ColorPicker v-model="color" alpha class="clear_hidde self_btn color-btnSelf" style="width: 100%;" />
                <Button @click="drawTextContent" class="color-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="1rem"
                    height="1rem"
                    fill="currentColor"
                  >
                    <path
                      d="M26.9 2H6.1c-2 0-3.6 1.6-3.6 3.6v4.5h2V5.6c.1-.9.8-1.6 1.6-1.6h9.3v24H10v2h12.9v-2h-5.5V4h9.4c.9 0 1.6.7 1.6 1.6v4.5h2V5.6c0-2-1.6-3.6-3.5-3.6z"
                    ></path>
                  </svg>
                  <div>Text</div>
                </Button>
                <Button @click="deleteGroup()" class="color-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="1rem"
                    height="1rem"
                    fill="currentColor"
                  >
                    <path
                      d="M10.992 23.623l.022-11.38 2 .003-.022 11.38zM14.92 23.623l.021-11.38 2 .003-.021 11.38zM18.997 23.623l.022-11.38 2 .003-.022 11.38z"
                    ></path>
                    <path
                      d="M27.94 5.75h-7.66a4.4 4.4 0 0 0-8.68 0H3.94v2H5v.29L6.71 26.6a3.73 3.73 0 0 0 3.76 3.4h10.94a3.73 3.73 0 0 0 3.76-3.4L26.81 8v-.29h1.11zm-4.76 20.68A1.75 1.75 0 0 1 21.41 28H10.47a1.75 1.75 0 0 1-1.77-1.57L7.07 7.87h17.75zM15.94 4.09a2.41 2.41 0 0 1 2.28 1.66h-4.56a2.41 2.41 0 0 1 2.28-1.66z"
                    ></path>
                  </svg>
                  <div>Delete</div>
                </Button>
              </div>
              <!-- 上传图片部分 -->
              <div class="img-list-m padd-sty" style="display: flex;padding: 0;">
                <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="[]"
                  :on-success="() => {}"
                  :format="['jpg', 'jpeg', 'png']"
                  :max-size="2048"
                  :on-format-error="() => {}"
                  :on-exceeded-size="() => {}"
                  :before-upload="uploadSuccess"
                  multiple
                  type="drag"
                  action="/"
                  class="upload_img"
                >
                  <div style="width: 70px;height: 70px;">
                    <!-- <Icon type="ios-camera" size="20"></Icon> -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="1 7 29 22"
                      width="1rem"
                      height="1rem"
                      fill="currentColor"
                    >
                      <path
                        d="M28 18.39v8.84a3.87 3.87 0 0 1-2.08.47H6a3.87 3.87 0 0 1-2-.47v-8.84H2v9c0 1.36 1.63 2.31 4 2.31h19.92c2.4 0 4.08-1 4.08-2.33v-9z"
                      ></path>
                      <path
                        d="M15.08 9.99v11.35h2V10.01l1.8 1.79 1.41-1.41-4.22-4.22-4.2 4.21 1.41 1.41 1.8-1.8z"
                      ></path>
                    </svg>
                    <div>
                      Upload
                    </div>
                  </div>
                </Upload>
              </div>
            </div>
            <div v-for="(img, index) in imageList" :key="index" :index="index">
              <img :src="img" @click="drawIMG(img)" />
            </div>

            <!-- <div class="img-list-m padd-sty" style="display: flex;">
              <Upload
                ref="upload"
                :show-upload-list="false"
                :default-file-list="[]"
                :on-success="() => {}"
                :format="['jpg', 'jpeg', 'png']"
                :max-size="2048"
                :on-format-error="() => {}"
                :on-exceeded-size="() => {}"
                :before-upload="uploadSuccess"
                multiple
                type="drag"
                action="/"
                class="upload_img"
              >
                <div style="width: 102px;height: 32px;border:1px solid skyblue;">
                  <Icon type="ios-camera" size="20"></Icon>
                  Upload files
                </div>
              </Upload>
            </div> -->
          </div>
        </div>
      </template>
      <!-- 第三部分中间部分 -->
      <div class="canvas-img">
        <div class="canvas" style="position: relative;" :class="{ mobile: !isPC }">
          <!-- <div class="fixed-list"
               v-if="isPC">
            <div class="color-item"
                 v-for="color in color_list"
                 :key="color.value"
                 :style="{ background: color.value }"
                 @click="changeColor(color.key)"></div>
          </div> -->

          <!-- <div class="fixed-list"
               v-if="isPC">
                <Icon type="md-arrow-dropup" size="35" @click="changeColorIndex"/>
                    <div class="fixed-list_fe">
                    <div class="color-item"
                     v-for="color in color_list"
                     :key="color.value"
                     :style="{ background: color.value }"
                     @click="changeColor(color.key)">
                    </div>
                  </div>
                <Icon type="md-arrow-dropdown" size="35" @click="changeColorIndexTwo"/>
          </div> -->
          <div class="title">create-your-own</div>
          <!-- <div ref="canvas" id="canvas" :style="{ background: selected_color }"></div> -->
          <div ref="canvas" id="canvas" :style="{ background: selected_color }"></div>
          <!-- 虚线盒子 -->
          <div class="cvs-line" :style="cvsLineStyle"></div>
          <div
            class="cvs-cover"
            :style="{
              left: isPC ? '100px' : '0vw',
              width: isPC ? '700px' : '100vw',
              height: isPC ? '700px' : '100vw',
            }"
          >
            <canvas
              id="cover-canvas"
              :style="{
                left: isPC ? '100px' : '0vw',
                width: isPC ? '700px' : '100vw',
                height: isPC ? '700px' : '100vw',
              }"
            ></canvas>
            <!-- <div class="previ-btn" v-if="isPC">
              <Button @click="preview()" class="flo_le trans_btn">preview</Button>
            </div> -->
          </div>
          <!-- 手机模块的颜色选择 -->
          <!-- <div class="mobile-color-list" v-if="!isPC">
            <div
              class="color-item"
              v-for="color in color_list"
              :key="color.value"
              :style="{ background: color.value }"
              @click="changeColor(color.key)"
            ></div>
          </div> -->
          <!-- 修改start -->
          <!-- <div class="mobile-color-list" v-if="!isPC">
            <Icon type="md-arrow-dropleft" size="40" @click="changeColorIndex" style="cursor: pointer;" />
            <div class="fixed-list_folt">
              <div
                class="color-item color-OK"
                v-for="color in color_list"
                :key="color.value"
                :style="{ background: color.value }"
                @click="changeColor(color.key)"
              >
                <div class="color-bef" v-if="color.key == showColor.key"></div>
              </div>
            </div>
            <Icon type="md-arrow-dropright" size="40" @click="changeColorIndexTwo" style="cursor: pointer;" />
          </div> -->
          <!-- 修改end -->
          <!-- <div class="sliders" v-if="selected">
            <div
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-size: 20px;
              "
            >
              angle：
            </div>
            <div style="padding: 10px 20px; flex: 1;" v-if="!isPC">
              <VSlider v-model="ang" :min="0" :max="360"></VSlider>
            </div>
            <Slider v-if="isPC" style="flex: 1;" v-model="ang" :min="0" :max="360" :tip-format="tipFormat"></Slider>
          </div>
          <div class="sliders" v-if="selected">
            <div
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
                font-size: 20px;
              "
            >
              scale：
            </div>
            <div style="padding: 10px 20px; flex: 1;" v-if="!isPC">
              <VSlider v-model="scale" :min="1" :max="200"></VSlider>
            </div>
            <Slider
              v-if="isPC"
              style="flex: 1;"
              v-model="scale"
              :min="1"
              :max="200"
              :tip-format="
                (val) => {
                  return 'scale：' + val + '%'
                }
              "
            ></Slider>
          </div> -->
          <div v-if="!isPC" :style="{bottom: isTru ? isPX : '0px'}" class="box-sty">
            <!-- <div style="margin:10px 0">
              <div style="margin: 1vw; width: 100%;display: inline-block;position: relative;margin-bottom: 20px;">
                <label>
                  <Input v-model="textInput" style="textInputBottom" placeholder="Please enter" class="Input-phone" />
                </label>
                <Icon type="md-close-circle" @click="deleteGroup()" v-if="selected" class="icon-del" />
              </div>
              添加文字部分
              <div class="img-add">
                <ColorPicker v-model="color" alpha />
                <span @click="drawText(textInput, textFont, color)" class="span-add">addText</span>
              </div>
            </div> -->
            <!-- <div style="margin: 1vw;">
              <div style="width:81%;margin-top: 20px;margin-bottom: 20px;">
                <label>
                  <Select v-model="textFont" class="Select-opt">
                    <Option value="PingFang-Light">PingFang-Light</Option>
                    <Option value="PingFang-Bold">PingFang-Bold</Option>
                    <Option value="inherit">inherit</Option>
                    <Option value="cursive">cursive</Option>
                    <Option value="fantasy">fantasy</Option>
                    <Option value="monospace">monospace</Option>
                    <Option value="sans-serif">sans-serif</Option>
                    <Option value="serif">serif</Option>
                  </Select>
                </label>
              </div>
            </div> -->

            <!-- <div
              style="
                text-align: center;
                margin: 1vw;
                margin-bottom: 10px;
              "
            >
              <Button class="btn-see" @click="preview()"
                >preview <Icon class="icon-see" type="ios-arrow-forward"
              /></Button>
              <Button class="find-btn" @click="designsModal = true"
                >designs <Icon class="icon-find" type="ios-arrow-forward" />
              </Button>
              <Button class="btn-s" @click="getPrice()"
                >get price <Icon class="icon-btns" type="ios-arrow-forward"
              /></Button>
              <Button class="btn-y" @click="showModal()"
                >choose product <Icon class="icon-btny" type="ios-arrow-forward" />
              </Button>
            </div> -->

            <!-- 文字颜色文字大小 -->
           <div style="width: 100%;height: 6.5rem;background-color:transparent;" class="text-poseti4" v-if="showColor_val == 4 || 5">
            <div class="text-content-size" v-if="showColor_val == 4 || 5">
              <div class="sliders" v-if="selected">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 20px;
                  "
                >
                  Angle：
                </div>
                <div style="padding: 10px 20px; flex: 1;" v-if="!isPC">
                  <VSlider v-model="ang" :min="0" :max="360"></VSlider>
                </div>
                <Slider v-if="isPC" style="flex: 1;" v-model="ang" :min="0" :max="360" :tip-format="tipFormat"></Slider>
              </div>
              <div class="sliders" v-if="selected">
                <div
                  style="
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 20px;
                  "
                >
                  Scale：
                </div>
                <div style="padding: 10px 20px; flex: 1;" v-if="!isPC">
                  <VSlider v-model="scale" :min="1" :max="200"></VSlider>
                </div>
                <Slider
                  v-if="isPC"
                  style="flex: 1;"
                  v-model="scale"
                  :min="1"
                  :max="200"
                  :tip-format="
                    (val) => {
                      return 'scale：' + val + '%'
                    }
                  "
                ></Slider>
              </div>
            </div>
            <div class="text-content" v-if="showColor_val == 4">
              <div style="display: inline-block;text-align: center;" class="color-btnAp flo-color">
                <ColorPicker v-model="color" alpha />
                <div >White</div>
              </div>
              <Button @click="deleteGroup()" class="color-btnAp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="red"
                >
                  <path
                    d="M10.992 23.623l.022-11.38 2 .003-.022 11.38zM14.92 23.623l.021-11.38 2 .003-.021 11.38zM18.997 23.623l.022-11.38 2 .003-.022 11.38z"
                  ></path>
                  <path
                  d="M27.94 5.75h-7.66a4.4 4.4 0 0 0-8.68 0H3.94v2H5v.29L6.71 26.6a3.73 3.73 0 0 0 3.76 3.4h10.94a3.73 3.73 0 0 0 3.76-3.4L26.81 8v-.29h1.11zm-4.76 20.68A1.75 1.75 0 0 1 21.41 28H10.47a1.75 1.75 0 0 1-1.77-1.57L7.07 7.87h17.75zM15.94 4.09a2.41 2.41 0 0 1 2.28 1.66h-4.56a2.41 2.41 0 0 1 2.28-1.66z"
                ></path>
                </svg>
                <div>Delete</div>
              </Button>
           
            </div>
           </div>

            <!-- 颜色模块 -->
            <div style="background-color: #fff;" class="text-content text-poseti3" v-if="showColor_val == 3">
              <div class="mobile-color-list" v-if="!isPC">
                <Icon type="md-arrow-dropleft" size="40" @click="changeColorIndex" style="cursor: pointer;" />
                <div class="fixed-list_folt">
                  <div
                    class="color-item color-OK"
                    v-for="color in color_list"
                    :key="color.value"
                    :style="{ background: color.value }"
                    @click="changeColor(color.key)"
                  >
                    <div class="color-bef" v-if="color.key == showColor.key"></div>
                  </div>
                </div>
                <Icon type="md-arrow-dropright" size="40" @click="changeColorIndexTwo" style="cursor: pointer;" />
              </div>
            </div>
            <!-- 添加文字部分 -->
            <div style="background-color: #fff;" class="text-content animationt1 text-poseti1" v-if="showColor_val == 1">
              <Button @click="drawTextAp(textInput, textFont, color)" class="color-btnAp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                >
                  <path
                    d="M26.9 2H6.1c-2 0-3.6 1.6-3.6 3.6v4.5h2V5.6c.1-.9.8-1.6 1.6-1.6h9.3v24H10v2h12.9v-2h-5.5V4h9.4c.9 0 1.6.7 1.6 1.6v4.5h2V5.6c0-2-1.6-3.6-3.5-3.6z"
                  ></path>
                </svg>
                <div>Text</div>
              </Button>
              <div class="color-btnAp flo-color">
                <Upload
                  ref="upload"
                  :show-upload-list="false"
                  :default-file-list="[]"
                  :on-success="() => {}"
                  :format="['jpg', 'jpeg', 'png']"
                  :max-size="2048"
                  :on-format-error="() => {}"
                  :on-exceeded-size="() => {}"
                  :before-upload="uploadSuccess"
                  multiple
                  type="drag"
                  action="/"
                  class="upload_img_ap"
                >
                  <div style="width: 100%;height: 100%;">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="1 7 29 22"
                      width="1rem"
                      height="1rem"
                      fill="currentColor"
                    >
                      <path
                        d="M28 18.39v8.84a3.87 3.87 0 0 1-2.08.47H6a3.87 3.87 0 0 1-2-.47v-8.84H2v9c0 1.36 1.63 2.31 4 2.31h19.92c2.4 0 4.08-1 4.08-2.33v-9z"
                      ></path>
                      <path
                        d="M15.08 9.99v11.35h2V10.01l1.8 1.79 1.41-1.41-4.22-4.22-4.2 4.21 1.41 1.41 1.8-1.8z"
                      ></path>
                    </svg>
                    <div>
                      Upload
                    </div>
                  </div>
                </Upload>
              </div>
            </div>
            <!-- 选换衣服颜色 -->
            <div style="background-color: #fff;" class="text-content text-poseti2" v-if="showColor_val == 2">
              <Button @click="color_color" class="color-btnAp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="rgb(117, 0, 51)"
                >
                  <path
                    d="M16.95,3.11l-.74-1-.75,1c-.34.46-8.27,11.42-8.27,18a9,9,0,0,0,18,0C25.2,14.65,17.28,3.58,16.95,3.11Zm-.76,25.14A7.18,7.18,0,0,1,9,21.08c0-4.85,5.2-12.93,7.18-15.82,2,2.91,7.17,11.06,7.17,15.83A7.18,7.18,0,0,1,16.19,28.25Z"
                  ></path>
                  <path
                    d="M19.48,19.3a1.1,1.1,0,0,0-1.1,1.1,3,3,0,0,1-2.94,2.94,1.1,1.1,0,0,0,0,2.2,5.15,5.15,0,0,0,5.15-5.14A1.1,1.1,0,0,0,19.48,19.3Z"
                  ></path>
                </svg>
                <div>Color</div>
              </Button>

              <Button @click="showModal()" class="color-btnAp flo-color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                >
                  <path
                    d="M12.1,11H9.48l.32-.32a8.92,8.92,0,0,1,12.61,0l0,.05,1.41-1.41,0-.05a10.92,10.92,0,0,0-15.44,0l-.26.26V7.06h-2V13h6Z"
                  ></path>
                  <path
                    d="M20,19v2h2.62l-.32.32a8.92,8.92,0,0,1-12.61,0c-.12-.12-.23-.26-.35-.39L7.94,22.35c.12.13.23.26.35.39a10.92,10.92,0,0,0,15.44,0l.26-.26v2.46h2V19Z"
                  ></path>
                </svg>
                <div>Change</div>
              </Button>
            </div>

            <div style="background-color: #fff;" class="text-content text-pore text-poseti" v-if="showColor_val == '' || 1 || 2 || 3 || 4">
              <Button @click="showAddText" class="color-btnAp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                >
                  <path d="M26.02 14.98h-9.01v-9h-2v9h-9v2h9v9h2v-9h9.01v-2z"></path>
                </svg>
                <div>Add</div>
              </Button>
              <Button @click="ProductBtn" class="color-btnAp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                >
                  <path
                    d="M29.88 11.09L22.81 4h-4.87v1a2.15 2.15 0 0 1-.62 1.54 1.92 1.92 0 0 1-1.32.62A2.13 2.13 0 0 1 13.9 5V4H8.94l-6.87 6.89 4.52 4.52L8.4 13.6v11.27a2.77 2.77 0 0 0 2.87 2.65h9.34a2.77 2.77 0 0 0 2.87-2.65V13.73l1.88 1.88zM21.48 10v14.87c0 .35-.4.65-.87.65h-9.34c-.47 0-.87-.3-.87-.65V10h-2v.75l-1.81 1.83-1.69-1.69L9.76 6H12a4.11 4.11 0 0 0 4 3.16A3.91 3.91 0 0 0 18.75 8a4.09 4.09 0 0 0 1.09-2H22l5.07 5.07-1.69 1.69-1.9-1.86V10z"
                  ></path>
                </svg>
                <div>Products</div>
              </Button>
              <!-- 查看图片 -->
              <Button @click="preview()" class="color-btnAp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                >
                  <circle cx="12.97" cy="12.55" r="2.5"></circle>
                  <path
                    d="M29.21 5.91a2.88 2.88 0 0 0-2.05-.86H4.93a3 3 0 0 0-2.93 3v16a3 3 0 0 0 .85 2.11 2.88 2.88 0 0 0 2.09.89h22.21a3 3 0 0 0 2.93-3v-16a3 3 0 0 0-.87-2.14zM4.93 7.05h22.23a.9.9 0 0 1 .64.27 1 1 0 0 1 .3.73v14.66L20 14.57l-6.61 6.67L9.3 18.3 4 23.62V8.05a1 1 0 0 1 .93-1zM27.14 25H5.39l4.12-4.13 4.07 2.94 6.42-6.4L27.48 25a.87.87 0 0 1-.34 0z"
                  ></path>
                </svg>
                <div>Preview</div>
              </Button>

              <Button class="color-btnAp color-blu" @click="getPrice()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                >
                  <path
                    d="M4.326,7l-2.326,0l0,-2c0.811,0 1.621,-0.009 2.432,0c0.306,0.011 0.608,0.061 0.899,0.16
                    c0.708,0.243 1.312,0.752 1.67,1.409c0.136,0.251 0.233,0.518 0.296,0.796l0.135,0.635l22.913,0
                    c-0.993,3.304 -1.986,6.608 -2.978,9.911c-0.084,0.271 -0.201,0.529 -0.355,0.767
                    c-0.378,0.584 -0.959,1.026 -1.623,1.235c-0.29,0.091 -0.591,0.134 -0.895,0.137l-14.486,0l0.631,2.95l15.361,0
                    c0.923,-0.008 1.812,0.352 2.47,1c0.672,0.658 1.05,1.56 1.05,2.5c0,1.92 -1.58,3.5 -3.5,3.5
                    c-1.92,0 -3.5,-1.58 -3.5,-3.5c0,-0.535 0.123,-1.044 0.342,-1.5l-10.679,0c0.22,0.464 0.337,0.976 0.337,1.5
                    c0,1.92 -1.58,3.5 -3.5,3.5c-1.92,0 -3.5,-1.58 -3.5,-3.5c0,-1.781 1.359,-3.27 3.091,-3.476
                    c-1.037,-5.114 -1.908,-10.268 -3.285,-15.299c-0.097,-0.327 -0.355,-0.589 -0.683,-0.685
                    c-0.104,-0.031 -0.209,-0.041 -0.317,-0.04Zm21.653,18c-0.39,0.003 -0.765,0.161 -1.039,0.44
                    c-0.281,0.281 -0.439,0.663 -0.439,1.06c0,0.823 0.677,1.5 1.5,1.5c0.823,0 1.5,-0.677 1.5,-1.5
                    c0,-0.823 -0.677,-1.5 -1.5,-1.5c0,0 -0.001,0 -0.001,0c0,0 -0.021,0 -0.021,0Zm-16.958,-0.001
                    c-0.007,0.001 -0.014,0.001 -0.021,0.001c-0.376,0.01 -0.734,0.164 -1,0.43c-0.286,0.282 -0.448,0.667 -0.448,1.069
                    c0,0.823 0.677,1.5 1.5,1.5c0.823,0 1.5,-0.677 1.5,-1.5c0,-0.806 -0.649,-1.472 -1.449,-1.499l-0.082,0l0,-0.001Z
                    m-1.161,-14.999l1.721,8.052c4.991,0.023 9.988,0.247 14.972,-0.004c0.309,-0.022 0.595,-0.183 0.769,-0.44
                    c0.059,-0.086 0.101,-0.18 0.131,-0.279l2.202,-7.329l-19.795,0Z"
                  ></path>
                </svg>
                <div class="color-blu">
                  get price
                </div>
              </Button>
            </div>
            <!-- 图片部分 -->
            <div style="display: flex; flex-flow: row wrap;">
              <div class="img-list-m" v-for="(img, index) in imageList" :key="index" :index="index">
                <img :src="img" @click="drawIMG(img)" />
              </div>
            </div>
          </div>

          <div class="previ-btn" v-if="isPC">
            <Button @click="preview()" class="flo_le trans_btn">Preview</Button>
          </div>
        </div>
      </div>
      <!-- 第四部分右侧部分 -->
      <div v-if="isPC" class="self-rig">
        <!-- <div class="label_height">
          <label class="label_st clear_hidde">
            <Input v-model="textInput" placeholder="Please enter" clearable class="coloe_btn trans_btn input_btn" />
          </label>
          <div style="display: inline-block;width:5px;"></div>
          <div class="clear_hidde">
            <ColorPicker v-model="color" alpha class="coloe_btn clear_hidde self_btn" />
            <Button
              @click="drawText(textInput, textFont, color)"
              style="box-shadow: 2px 1px 7px -1px;"
              class="coloe_btn trans_btn clear_hidde"
              >addText</Button
            >
            <Button @click="deleteGroup()" v-if="selected" class="coloe_btn trans_btn clear_hidde">delete</Button>
          </div>

          <div style="width: 300px;height: 40px;"></div>
          <label>
            <Select v-model="textFont" style="border: 1px solid skyblue;" class="coloe_btn trans_btn">
              <Option value="PingFang-Light">PingFang-Light</Option>
              <Option value="PingFang-Bold">PingFang-Bold</Option>
              <Option value="inherit">inherit</Option>
              <Option value="cursive">cursive</Option>
              <Option value="fantasy">fantasy</Option>
              <Option value="monospace">monospace</Option>
              <Option value="sans-serif">sans-serif</Option>
              <Option value="serif">serif</Option>
            </Select>
          </label>
          <div
            style="
                text-align: center;
                display: flex;
                justify-content: space-between;
                margin: 40px 0 0 0;
              "
          >
            <ColorPicker v-model="color" alpha class="coloe_btn trans_btn" />
            <Button
              @click="drawText(textInput, textFont, color)"
              style="box-shadow: 2px 1px 7px -1px;"
              class="coloe_btn trans_btn"
              >addText</Button
            >
            <Button @click="deleteGroup()" v-if="selected" class="coloe_btn trans_btn">delete</Button>
          </div>
          <div
            style="
                text-align: center;
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
              "
          >
            <Button @click="preview()" class="flo_le trans_btn">preview</Button>
            <Button @click="showModal()" class="flo_ri trans_btn">choose product</Button>
          </div>
        </div> -->

        <div v-if="isPC" class="footer_sw">
          <!-- 文字编辑区域start -->
          <div class="slider-bo" v-if="selected">
            <label class="label_st">
              <Input v-model="textInput" placeholder="Please enter" clearable class="input_btn" />
            </label>
            <!-- 文字旋转与缩放 -->
            <div style="width: 100%;height: 1.875rem;line-height: 1.875rem;margin-top: 1rem;">
              <span
                style="
                  font-size: .9375rem;
                  width: 1.875rem;
                  height: 1.875rem;
                  line-height: 1.875rem;
                  display: inline-block;
                  width: 30%;
                  transform: translateY(-30%);
                "
              >
                Angle：
              </span>
              <div style="width:70%; display: inline-block;">
                <div style="padding: 10px 20px; flex: 1;" v-if="!isPC">
                  <VSlider v-model="ang" :min="0" :max="360"></VSlider>
                </div>

                <Slider v-if="isPC" v-model="ang" :min="0" :max="360" :tip-format="tipFormat"></Slider>
              </div>
            </div>
          </div>
          <div class="slider-rig" v-if="selected">
            <span
              style="
                  font-size: .9375rem;
                  width: 1.875rem;
                  height: 1.875rem;
                  line-height: 1.875rem;
                  display: inline-block;
                  width: 30%;
                  transform: translateY(-30%);
                "
            >
              Scale：
            </span>
            <div style="width:70%; display: inline-block;">
              <div style="padding: 10px 20px; flex: 1;" v-if="!isPC">
                <VSlider v-model="scale" :min="1" :max="300"></VSlider>
              </div>
              <Slider
                v-if="isPC"
                style="flex: 1;"
                v-model="scale"
                :min="1"
                :max="200"
                :tip-format="
                  (val) => {
                    return 'scale：' + val + '%'
                  }
                "
              ></Slider>
            </div>
          </div>
          <div class="text-content" v-if="selected">
            <Button @click="drawText(textInput, textFont, color)" class="color-btns">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="1rem"
                height="1rem"
                fill="currentColor"
              >
                <path
                  d="M26.9 2H6.1c-2 0-3.6 1.6-3.6 3.6v4.5h2V5.6c.1-.9.8-1.6 1.6-1.6h9.3v24H10v2h12.9v-2h-5.5V4h9.4c.9 0 1.6.7 1.6 1.6v4.5h2V5.6c0-2-1.6-3.6-3.5-3.6z"
                ></path>
              </svg>
              <div>addText</div>
            </Button>
            <Button @click="deleteGroup()" class="color-btns">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="1rem"
                height="1rem"
                fill="currentColor"
              >
                <path
                  d="M10.992 23.623l.022-11.38 2 .003-.022 11.38zM14.92 23.623l.021-11.38 2 .003-.021 11.38zM18.997 23.623l.022-11.38 2 .003-.022 11.38z"
                ></path>
                <path
                  d="M27.94 5.75h-7.66a4.4 4.4 0 0 0-8.68 0H3.94v2H5v.29L6.71 26.6a3.73 3.73 0 0 0 3.76 3.4h10.94a3.73 3.73 0 0 0 3.76-3.4L26.81 8v-.29h1.11zm-4.76 20.68A1.75 1.75 0 0 1 21.41 28H10.47a1.75 1.75 0 0 1-1.77-1.57L7.07 7.87h17.75zM15.94 4.09a2.41 2.41 0 0 1 2.28 1.66h-4.56a2.41 2.41 0 0 1 2.28-1.66z"
                ></path>
              </svg>
              <div>Delete</div>
            </Button>
          </div>
          <!-- 文字编辑区域end -->
          <!-- 衣服名称 -->
          <div v-if="!selected">
            <div style="width: 100%;position: absolute;top: 0;">
              <Button
                @click="showModal()"
                style="width: 100%; height: 50px; background-color: #00b2a5;color: #fff;
              font-size: 20px;"
                >choose product</Button
              >
            </div>
            <div
              style="margin-top:60px;font-size: 18px;font-weight: 700;padding:0 20px;
        "
              :title="getNames"
            >
              {{ getNames }}
            </div>
            <!-- 星级 -->
            <div style="margin-top: .9375rem;font-size: 16px;font-weight: 700;padding-left: 20px;">
              ⭐⭐⭐⭐⭐
            </div>

            <!-- 颜色选择区域 -->
            <div style="font-size: 18px;position: absolute;bottom: 100px;">
              <span style="font-weight: 700;padding-left: 20px;">Product color:</span> <span>{{ colorKey }}</span>
            </div>
            <div class="fixed-list" v-if="isPC">
              <Icon type="md-arrow-dropleft" size="30" @click="changeColorIndex" style="cursor: pointer;" />
              <div class="fixed-list_fe">
                <div
                  class="color-item"
                  v-for="color in color_list"
                  :key="color.value"
                  :style="{ background: color.value }"
                  @click="changeColor(color.key)"
                >
                  <div class="color-bef" v-if="color.key == showColor.key"></div>
                </div>
              </div>
              <Icon type="md-arrow-dropright" size="30" @click="changeColorIndexTwo" style="cursor: pointer;" />
            </div>
          </div>

          <Button @click="getPrice()" class="getPrice_btn">get price</Button>
        </div>
       
      </div>
    </div>
    <Modal v-model="modalShow" title="Choose Product" fullscreen>
      <div>
        <products :data="rq_data" @choose="getDetail"></products>
      </div>
      <Button slot="footer" class="slot_btn" v-if="isPC" @click="modalShow = false">
        choose a product
      </Button>
      <Button slot="footer" class="slot_botton" v-if="!isPC" @click="modalShow = false">
        choose a product
      </Button>
    </Modal>
    <Modal v-model="previewShow" width="56.25rem" title="Preview" :fullscreen="!isPC">
      <div style="max-width: 100vw;">
        <img style="width: 100%;" :src="previewIMG" alt :style="{ background: selected_color }" />
      </div>
      <div slot="footer" style="text-align: center;">
        Preview the product
      </div>
    </Modal>
    <Modal v-model="designsModal" title="Get Designs" :fullscreen="!isPC">
      <div class="design-content">
        <div class="search">
          <Select v-model="design.cate" style="width: 200px;">
            <Option v-for="(item, index) in design.cate_arr" :value="index" :key="item.id">{{ item.name }} </Option>
          </Select>
          <Input v-model="design.keys" />
          <Button @click="searchDesigns">search</Button>
        </div>
        <div class="design-list">
          <img
            v-for="img in design.list"
            :src="img.designImg"
            alt
            :key="img.id"
            @click="imageList.push(img.designImg)"
          />
        </div>
      </div>
      <Button
        slot="footer"
        style="text-align: center;"
        @click="
          imageList = [
            ...imageList,
            ...design.list.map((img) => {
              return img.designImg
            }),
          ]
        "
      >
        Add to designs
      </Button>
    </Modal>
    <Modal v-model="priceModal" title="Add to cart" :fullscreen="!isPC">
      <p slot="header" style="color:#000;text-align:center;font-size: 1rem;">
        <span>Add to cart</span>
      </p>
      <div class="size-content">
        <div class="size-item" v-for="(size, index) in size_nums" :key="index">
          <div class="size-title">{{ size.name }}</div>
          <div class="size-value" style="text-align: center;">
            <Button @click="sizeDel(size)" style="padding: 0 0.5rem;">-</Button>
            <Input
              v-model="size.value"
              datatype="number"
              @input="sizeChange"
              style="width: 100px; text-align: center;"
            />
            <Button @click="sizeAdd(size)" style="padding: 0 0.5rem;">+</Button>
          </div>
        </div>
      </div>
      <Button slot="footer" style="text-align: center;" @click="addToCart">
        Total: ${{ all_price }} Add to cart
      </Button>
    </Modal>
    <!-- 点击文字弹窗 -->
    <Modal v-model="TextShow" fullscreen footer-hide>
      <label>
        <Input
          v-model="textInput"
          placeholder="Please enter"
          clearable
          style="padding-top: 50px;padding-bottom: 50px;"
        />
      </label>
      <div style="width: 100%;padding: 0 .625rem;">
        <Button style="width: 50%;border: 1px solid skyblue;" @click="closeCan">Cancel</Button>
        <Button style="width: 50%;border: 1px solid skyblue;" @click="drawText(textInput, textFont, color, '11')"
          >Apply</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import zrender from 'zrender'
import { Button, ColorPicker, Icon, Input, Modal, Option, Select, Slider, Upload } from 'view-design'
import VSlider from 'vant/lib/slider'
import 'vant/lib/slider/style'

export default {
  components: {
    Option,
    Slider,
    Button,
    Input,
    Select,
    ColorPicker,
    VSlider,
    Upload,
    Icon,
    Modal,
  },
  name: 'Index',
  data() {
    return {
      isPX:'0px',
      paramsScale: 1,
      TextShow: false,
      showColor_val: '',
      getNames: '',
      showColor: {},
      colorKey: '',
      zr: undefined,
      group: undefined,
      zlevel: -999999999,
      elements: [],
      ang: 0,
      scale: 100,
      selected: undefined || 0,
      textInput: 'your text here',
      textFont: 'initial',
      color: 'rgba(255,255,255,1)',
      cutShape: undefined,
      isPC: true,
      imageList: [],
      bgimg: '',
      host: 'http://test5.heroinhere.com',
      color_list: [],
      clothes: [],
      rq_data: {},
      details: {},
      modalShow: false,
      priceModal: false,
      previewShow: false,
      isTru:false,
      previewIMG: '',
      selected_color: '#FFF',

      // add to cart form data
      current_products_code: '',
      size_num: {},
      size_nums: [],
      color_key: '',
      all_price: 0,

      // designsModal
      designsModal: false,
      design: {
        keys: '',
        cate: 0,
        list: [],
        cate_arr: [],
      },

      // clip image
      clipImage: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
      clipImages: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },

      // cover image path
      coverImageUrl: '',
      wi: 500,
    }
  },
  computed: {
    cvsLineStyle() {
      window.screenWidth = document.body.clientWidth
      if (window.screenWidth == '768' || window.screenWidth == '1024') {
        const scale = 1

        return {
          top: this.clipImage.y * scale + 'px',
          left: (this.isPC ? 100 : window.screenWidth * 0.15) + this.clipImage.x * scale + 'px',
          width: this.clipImage.width * scale + 'px',
          height: this.clipImage.height * scale + 'px',
        }
      } else {
        const scale = this.isPC ? 1 : (window.screenWidth * 0.7) / 500
        return {
          top: 30 + this.clipImage.y * scale + 'px',
          left: (this.isPC ? 100 : 0) + this.clipImage.x * scale + 'px',
          width: this.clipImage.width * scale + 'px',
          height: this.clipImage.height * scale + 'px',
        }
      }
    },
  },
  watch: {
    size_num() {
      this.size_nums = Object.keys(this.size_num).map((item) => {
        return {
          name: this.size_num[item],
          id: item,
          value: 0,
        }
      })
    },
    selected(n) {
      if (n && n._children[0].type === 'text') {
        this.textInput = n._children[0].style.text
        this.textFont = n._children[0].style.fontFamily
      }
    },
    color(n) {
      if (this.selected) {
        this.selected.border.attr('style', { stroke: n })
        if (this.selected._children[0].type === 'text') {
          this.selected._children[0].attr('style', { textFill: n })
        }
      }
    },
    textFont(n) {
      if (this.selected) {
        if (this.selected._children[0].type === 'text') {
          this.selected._children[0].attr('style', {
            ...this.selected._children[0],
            fontFamily: n,
          })
        }
      }
    },
    textInput(n) {
      if (this.selected) {
        console.log('this.selected', this.selected)

        if (this.selected._children[0].type === 'text') {
          this.selected._children[0].attr('style', {
            ...this.selected._children[0],
            text: n,
          })
        }
      }
    },
    ang(n) {
      if (this.selected) {
        this.selected.attr('rotation', ((360 - n) / 180) * Math.PI)
        this.selected.border.attr('rotation', ((360 - n) / 180) * Math.PI)
      }
    },
    scale(n) {
      if (this.selected) {
        this.selected.attr('scale', [n / 100, n / 100])
        this.selected.border.attr('scale', [n / 100, n / 100])
      }
    },
  },
  mounted() {
    let v = this
    window.screenWidth = document.body.clientWidth
    v.isPC = window.screenWidth > 600

    v.zr = zrender.init(document.getElementById('canvas'))
    v.group = new zrender.Group()
    v.zr.add(this.group)
    v.drawBackground(v.bgimg, v.$refs.canvas.clientWidth, v.$refs.canvas.clientHeight)

    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        v.isPC = window.screenWidth > 600
        v.zr = zrender.init(document.getElementById('canvas'))
        v.group = new zrender.Group()
        v.zr.add(this.group)
        v.drawBackground(v.bgimg, v.$refs.canvas.clientWidth, v.$refs.canvas.clientHeight)
      })()
    }
  },
  created() {
    this.getDesigns()
  },
  methods: {
    calculate() {
      let num = 0
      for (let it of this.size_nums) {
        if (it.value > 0) {
          num += it.value
        }
      }
      this.all_price = (this.details.price * num).toFixed(2)
    },
    sizeDel(it) {
      if (it.value > 0) {
        it.value--
      }

      this.calculate()
    },
    sizeChange(e) {
      console.log(e)
      this.calculate()
    },
    sizeAdd(it) {
      it.value++
      this.calculate()
    },
    searchDesigns() {
      this.$http
        .get(
          '/api/gallery/images',
          {
            cid: this.design.cate_arr[this.design.cate].id,
            keyword: this.design.keys,
            page: 1,
            page_size: 20,
          },
          {
            'Content-Type': 'form',
          }
        )
        .then((res) => {
          this.$nextTick(() => {
            this.design.list = res.data
          })
        })
    },
    getDesigns() {
      this.$http
        .get(
          '/api/gallery/category',
          {},
          {
            'Content-Type': 'form',
          }
        )
        .then((res) => {
          this.$nextTick(() => {
            this.design.cate_arr = res.data
          })
        })
    },
    async addToCart() {
      this.priceModal = false
      const up = this.$Message.loading({
        content: 'Uploading...',
        duration: 0,
      })
      const scale = this.isPC ? 1 : ((window.screenWidth * 0.7) / 500) * 3
      const x = +(this.clipImage.x * scale).toFixed(2)
      const y = +(this.clipImage.y * scale).toFixed(2)
      const width = +(this.clipImage.width * scale).toFixed(2)
      const height = +(this.clipImage.height * scale).toFixed(2)
      let url = await this.unloadFile(await this.getIMG({ x, y, width, height }))
      up()
      let detail = {
        color: this.color_key,
        image: url,
      }
      let params = {
        products_code: this.current_products_code,
      }
      let i = 0
      for (const size of this.size_nums) {
        if (size.value > 0) {
          detail.size = size.id
          detail.num = size.value
          params['product_detail[' + i + ']'] = JSON.stringify(detail)
          i++
        }
      }
      const msg = this.$Message.loading({
        content: 'Loading...',
        duration: 0,
      })
      this.$http
        .get('/api/cart/design', params, {
          'Content-Type': 'form',
        })
        .then((res) => {
          if (res.code != 1) {
            msg()
            return
          } else {
            msg()
            this.$Message.info(res.msg)
          }
        })
    },
    crosIMG(origin, draw) {
      this.getURLBase64(origin).then(draw)
    },
    getPrice() {
      const scale = this.isPC ? 1 : (window.screenWidth * 0.7) / 500
      const x = this.clipImage.x * scale
      const y = this.clipImage.y * scale
      const width = this.clipImage.width * scale
      const height = this.clipImage.height * scale
      this.getIMG({ x, y, width, height })
      this.priceModal = true
    },
    preview() {
      console.log('this.clipImagevthis.clipImage', this.clipImage)
      let scale = this.isPC ? 1 : ((window.screenWidth * 0.7) / 500) * 3
      let x = +(this.clipImage.x * scale).toFixed(2)
      let y = +(this.clipImage.y * scale).toFixed(2)
      let width = +(this.clipImage.width * scale).toFixed(2)
      let height = +(this.clipImage.height * scale).toFixed(2)
      console.log('true', x, y, width, height)
      this.getIMG({ x, y, width, height })
      this.previewShow = true
    },
    showModal() {
      this.modalShow = true
    },
    changeColor(key) {
      this.colorKey = key
      this.color_key = key
      if (this.isPC) {
        console.log(99999999);
        this.selected_color = this.details.color[key]
      }
      this.coverImageUrl = ''
      this.changeBackground(this.details.image[key].image[0])
      if (key) {
        this.showColor.key = key
      }
    },
    // 轮播效果
    changeColorIndex() {
      this.color_list.map((item, index) => {
        if (index == 0) {
          this.colorKey = item.key
          var color_index = item
          this.color_list.shift()
          this.color_list.push(color_index)
          if (this.color_list.length > 0) {
            this.showColor.key = this.color_list[0].key
            this.showColor.value = this.color_list[0].value
            this.changeColor(this.showColor.key)
          }
        }
      })
    },
    // 轮播效果
    changeColorIndexTwo() {
      this.color_list.map((item, index) => {
        if (this.color_list.length - 1 == index) {
          var color_index = item
          this.colorKey = item.key
          this.color_list.pop()
          this.color_list.unshift(color_index)
          if (this.color_list.length > 0) {
            this.showColor.key = this.color_list[0].key
            this.showColor.value = this.color_list[0].value
            this.changeColor(this.showColor.key)
          }
        }
      })
    },
    changeBackground(url) {
      const v = this
      this.$nextTick(() => {
        v.bgimg = url
        v.zr = zrender.init(document.getElementById('canvas'))
        v.group = new zrender.Group()
        v.zr.add(this.group)
        v.drawBackground(v.bgimg, v.$refs.canvas.clientWidth, v.$refs.canvas.clientHeight)
        v.coverImageUrl = ''
        v.drawCutShape()
      })
    },
    getDetail({ products_code, products_en_name }) {
      this.getNames = products_en_name
      this.current_products_code = products_code
      this.$http
        .get(
          '/api/product/detail',
          {
            products_code: products_code,
          },
          {
            'Content-Type': 'form',
          }
        )
        .then((res) => {
          console.log('res图片有多宽',res);
          const colors = res.data.color
          this.details = res.data
          this.color_list = []
          for (const color in colors) {
            this.color_list.push({
              key: color,
              value: colors[color],
            })
          }
          if (this.color_list.length > 0) {
            this.colorKey = this.color_list[0].key
            this.showColor.key = this.color_list[0].key
            this.showColor.value = this.color_list[0].value
          }
          this.size_num = {}
          for (const prop of res.data.product_property) {
            this.size_num[prop.id] = prop.val
          }
          this.size_nums = Object.keys(this.size_num).map((item) => {
            return {
              name: this.size_num[item],
              id: item,
              value: 0,
            }
          })

          if (res.data.image[this.color_list[0].key]) {
            console.log('最开始画布的定位以及宽高', res.data.point, '---------------------------')
            const points = res.data.point
            const scale = this.isPC ? 700 / points.img_height : ((window.screenWidth) / points.img_height) * 2
            console.log('points',points);
            console.log('scale倍数',scale);
            console.log('window.screenWidth',window.screenWidth);
            console.log('window.screenWidth * 0.7',window.screenWidth);
            console.log('gaodu',window.screen.height);
            console.log('(window.screenWidth * 0.7) / 500',(window.screenWidth) / 500);
            //修改
            this.clipImages.x = points.offset_x * scale
            this.clipImages.y = points.offset_y * scale
            this.clipImages.width = points.width * scale
            this.clipImages.height = points.height * scale

            this.clipImage.x = points.offset_x * scale
            this.clipImage.y = points.offset_y * scale
            this.clipImage.width = points.width * scale
            this.clipImage.height = points.height * scale
            if (this.isPC) {
              this.selected_color = this.color_list[0].value
            }
            // this.selected_color = this.color_list[0].value
            this.color_key = this.color_list[0].key
            console.log(
              'res.data.image[this.color_list[0].key].image[0]',
              res.data.image[this.color_list[0].key].image[0]
            )
            this.changeBackground(res.data.image[this.color_list[0].key].image[0])
          }
        })
    },
    getData() {
      this.$http
        .get(
          '/api/product/index',
          {
            id: 196,
            page: 1,
          },
          {
            'Content-Type': 'form',
          }
        )
        .then((res) => {
          this.rq_data = res.data
          this.clothes = res.data.list.data
          this.getDetail(this.clothes[0])
        })
    },
    async unloadFile(base64) {
      const fd = new FormData()
      let file = this.base64ToBlob(base64)
      fd.append('file', file, 'upload.png')
      const res = await this.$http.post('/api/common/uploadImage', fd, {
        'Content-Type': 'multipart/form-data',
      })
      console.log('上传文件', res)

      if (res.code != 1) {
        return this.$Message.info(res.msg)
      }
      this.previewIMG = this.host + res.data.url
      return this.previewIMG
    },
    uploadSuccess(file) {
      this.isTru = true
      if(window.screenWidth == 360 || window.screenWidth == 320) {
          this.isPX = "-100px"
      }else if (window.screenWidth == 411 && window.screen.height == 731 || window.screenWidth == 414) {
        this.isPX = "-40px"
      }else if (window.screenWidth == 375 && window.screen.height == 667) {
        this.isPX = "-70px"
      }else if (window.screen.height == 812 && window.screenWidth == 375){
        this.isPX = "0px"
      }else if (window.screen.height == 823 && window.screenWidth == 411){
        this.isPX = "0px"
      }
      const reader = new FileReader()
      const v = this
      reader.readAsDataURL(file) //将文件读取为 DataURL
      console.log('filefile', file)

      reader.onload = (e) => {
        //文件读取成功完成时触发
        v.imageList.push(e.target.result)
      }
    },
    deleteGroup() {
      const s = this.selected
      this.clearBorder()
      this.getByName('background').remove(s)
    },
    clearBorder() {
      for (const el of this.elements) {
        let e = this.getByName(el)
        if (e && e.selected) {
          this.group.remove(e.border)
          e.selected = false
        }
      }

      if (this.selected) {
        this.selected = undefined
        this.ang = 0
        this.scale = 100
      }
    },
    tipFormat(val) {
      return 'angle: ' + val + '°'
    },
    // 递归查找
    getByName(name, group = this.group) {
      for (const child of group._children) {
        if (name === child.name) {
          return child
        } else if (child._children) {
          const c = this.getByName(name, child)
          if (c) {
            return c
          }
        }
      }
      return null
    },
    createNameGroup(name) {
      return new zrender.Group({
        name: name,
        getRect: function() {
          return this.parent.getBoundingRect([this])
        },
      })
    },
    // 绘制背景图
    drawBackground(img, width, height) {
      let v = this
      let background = v.createNameGroup('background')
      background.getRect = function() {
        return this.parent.getBoundingRect([this])
      }
      this.crosIMG(img, (img) => {
        background.add(
          new zrender.Image({
            style: {
              image: img,
              x: 0,
              y: 0,
              width: width,
              height: height,
              stroke: '#000000',
            },
            zlevel: v.zlevel,
            id: new Date().getTime(),
            draggable: false,
          }).on('click', function() {
            v.clearBorder()
          })
        )
        this.group.add(background)
      })
    },
    drawBorder(root) {
      const v = this
      v.clearBorder()
      const rect = root.getRect()
      const width = rect.width
      const height = rect.height
      v.ang = 360 - ((root.parent.rotation / Math.PI) * 180 || 360)
      v.scale = Math.floor(root.parent.scale[0] * 100)

      const shape = new zrender.Rect({
        position: root.parent.position,
        rotation: root.parent.rotation,
        origin: root.parent.origin,
        scale: root.parent.scale,
        shape: {
          x: root.style.x - 5, // 起点横坐标
          y: root.style.y - 5, // 起点纵坐标
          width: width + 10, // 宽
          height: height + 10, // 高
        },
        style: {
          fill: 'transparent', // 填充颜色，默认#000
          stroke: '#eeeeee', // 描边颜色，默认null
          lineWidth: 1, // 线宽， 默认1
        },
        zlevel: ++v.zlevel,
        id: new Date().getTime(),
        type: 'border',
        draggable: true,
        getRect: function() {
          return this.parent.getBoundingRect([this])
        },
      }).on('mousemove', function(e) {
        e.event.preventDefault()
        let pos = [...e.topTarget.position]
        v.selected.attr('position', [pos[0], pos[1]])
        let text = v.selected._children[0]
        const rect = text.getRect()
        this.attr('origin', [rect.x + rect.width / 2, rect.y + rect.height / 2])
        v.selected.attr('origin', [rect.x + rect.width / 2, rect.y + rect.height / 2])
      })
      shape.attr('origin', [rect.x + rect.width / 2, rect.y + rect.height / 2])
      root.parent.attr('origin', [rect.x + rect.width / 2, rect.y + rect.height / 2])
      root.parent.border = shape
      v.group.add(shape)
    },
    drawTextContent() {
      // const text = 'your text here'
      // this.textInput = 'your text here'
      // const font = 'initial'
      // const color = 'rgba(255, 255, 255, 1)'
      this.selected = true
      // this.drawText(text, font, color)
    },
    drawTextAp() {
      this.isTru = true
      if(window.screenWidth == 360 || window.screenWidth == 320) {
          this.isPX = "-100px"
      }else if (window.screenWidth == 411 && window.screen.height == 731 || window.screenWidth == 414) {
        this.isPX = "-40px"
      }else if (window.screenWidth == 375 && window.screen.height == 667) {
        this.isPX = "-70px"
      }else if (window.screen.height == 812 && window.screenWidth == 375){
        this.isPX = "0px"
      }else if (window.screen.height == 823 && window.screenWidth == 411){
        this.isPX = "0px"
      }
      this.TextShow = true
      // const text = 'your text here'
      // this.textInput = 'your text here'
      // const font = 'initial'
      // const color = 'rgba(255, 255, 255, 1)'
      // this.drawText(text, font, color)
    },
    drawText(text, font, color, params) {

      console.log('text, font, color, params',text, font, color, params);
      const v = this
      this.selected = true
      const bg = this.getByName('background')
      const bg_rect = bg.getRect()
      const id = 'text' + new Date().getTime()
      let ztext = new zrender.Text({
        style: {
          x: bg_rect.x + bg_rect.width / 2 - (text.length * 15) / 2 + 45,
          y: bg_rect.y + bg_rect.height / 2 - 40,
          text: text,
          fontSize: v.isPC ? 30 : 30,
          height: v.isPC ? 30 : 18,
          textFill: color,
          fontFamily: font,
        },
        zlevel: ++v.zlevel,
        id: id,
        draggable: false,
        type: 'text',
        getRect: function() {
          return this.parent.getBoundingRect([this])
        },
      }).on('click', function() {
        this.zlevel = ++v.zlevel
        v.drawBorder(this)
        v.selected = this.parent
        this.parent.selected = true
      })
      const t_bg = this.createNameGroup(id)

      bg.add(t_bg.add(ztext))
      v.elements.push(id)
      if (params == '11') {
        this.TextShow = false
        this.showColor_val = '4'
      }
    },
    drawIMG(src) {
      const v = this
      this.selected = true
      const bg = v.getByName('background')
      const bg_rect = bg.getRect()
      const id = 'img' + new Date().getTime()
      const iw = v.isPC ? 200 : 80
      v.crosIMG(src, (src) => {
        let ztext = new zrender.Image({
          style: {
            image: src,
            x: bg_rect.x + bg_rect.width / 2 - iw / 2,
            y: bg_rect.y + bg_rect.height / 2 - iw / 2,
            width: iw,
            height: iw,
          },
          zlevel: ++v.zlevel,
          id: id,
          draggable: false,
          type: 'img',
          getRect: function() {
            return this.parent.getBoundingRect([this])
          },
        }).on('click', function() {
          this.zlevel = ++v.zlevel
          v.drawBorder(this)
          v.selected = this.parent
          this.parent.selected = true
        })
        const t_bg = this.createNameGroup(id)

        bg.add(t_bg.add(ztext))
        v.elements.push(id)
      })
    },
    downloadFile(fileName, content) {
      let aLink = document.createElement('a')
      let blob = this.base64ToBlob(content) //new Blob([content]);

      let evt = document.createEvent('HTMLEvents')
      evt.initEvent('click', true, true) //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
      aLink.download = fileName
      aLink.href = URL.createObjectURL(blob)

      // aLink.dispatchEvent(evt);
      //aLink.click()
      aLink.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      ) //兼容火狐
    },
    //base64转blob
    base64ToBlob(code) {
      let parts = code.split(';base64,')
      let contentType = parts[0].split(':')[1]
      let raw = window.atob(parts[1])
      let rawLength = raw.length

      let uInt8Array = new Uint8Array(rawLength)

      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }
      return new Blob([uInt8Array], { type: contentType })
    },
    getIMG({ x, y, width, height }) {
      this.clearBorder()
      return new Promise((resolve) => {
        setTimeout(async () => {
          const canvas = this.zr.dom.children[0].children[0]
          const cvs = document.createElement('canvas')
          const ctx = cvs.getContext('2d')
          cvs.width = canvas.width
          cvs.height = canvas.height
          const cs = this.zr.dom.children[0].children

          const cvs_clip = document.createElement('canvas')
          const ctx_clip = cvs_clip.getContext('2d')
          cvs_clip.width = canvas.width
          cvs_clip.height = canvas.height

          ctx_clip.beginPath()
          ctx_clip.rect(x, y, width, height)
          ctx_clip.clip()
          for (let c = 1; c < cs.length; c++) {
            if (cs[c].tagName === 'CANVAS') {
              await this.getImg(ctx_clip, cs[c].toDataURL(), canvas.width, canvas.height)
            }
          }

          const back_cvs = document.createElement('canvas')
          const back_ctx = back_cvs.getContext('2d')
          back_cvs.width = canvas.width
          back_cvs.height = canvas.height
          back_ctx.beginPath()
          console.log(this.selected_color, 'fill-color----------------------')
          back_ctx.fillStyle = this.selected_color
          back_ctx.fillRect(0, 0, canvas.width, canvas.height)
          back_ctx.beginPath()
          back_ctx.rect(x, y, width, height)
          back_ctx.clip()

          await this.getImg(ctx, back_cvs.toDataURL(), canvas.width, canvas.height)
          

          const csv = document.createElement('canvas')
          let cst = csv.getContext('2d')
          csv.width = canvas.width
          csv.height = canvas.height
          cst.putImageData(cs[0].getContext('2d').getImageData(0, 0, canvas.width, canvas.height), 0, 0)

          await this.getImg(ctx, csv.toDataURL(), canvas.width, canvas.height)
          await this.getImg(ctx, cvs_clip.toDataURL(), canvas.width, canvas.height)
          this.previewIMG = cvs.toDataURL()
          resolve(this.previewIMG)
        }, 50)
      })
    },
    getURLBase64(url) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.responseType = 'blob'
        xhr.onload = function() {
          if (this.status === 200) {
            var blob = this.response
            var fileReader = new FileReader()
            fileReader.onloadend = function(e) {
              var result = e.target.result
              resolve(result)
            }
            fileReader.readAsDataURL(blob)
          }
        }
        xhr.onerror = function() {
          reject()
        }
        xhr.send()
      })
    },
    getImg(ctx, dataURL, width, height) {
      const img = new Image()
      return new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height)
          resolve()
        }
        img.src = dataURL
      })
    },
    drawCutShape() {
      let interval = setInterval(() => {
        const canvas = this.zr.dom.children[0].children[0]
        if (!canvas) return
        clearInterval(interval)
        let cover = document.getElementById('cover-canvas')
        let ctx = cover.getContext('2d')
        cover.width = canvas.width
        cover.height = canvas.height

        const scale = this.isPC ? 1 : ((window.screenWidth * 0.7) / 500) * 3
        const x = +(this.clipImage.x * scale).toFixed(2)
        const y = +(this.clipImage.y * scale).toFixed(2)
        const width = +(this.clipImage.width * scale).toFixed(2)
        const height = +(this.clipImage.height * scale).toFixed(2)
        console.log('测试', x, y, width, height)
        ctx.beginPath()
        ctx.rect(0, 0, cover.width, y)
        ctx.rect(0, 0, x, cover.height)
        ctx.rect(0, y + height, cover.width, cover.height - y - height)
        ctx.rect(x + width, 0, cover.width - x - width, cover.height)
        ctx.clip()

        const fill_cvs = document.createElement('canvas')
        const fill_ctx = fill_cvs.getContext('2d')
        fill_cvs.width = canvas.width
        fill_cvs.height = canvas.height

        fill_ctx.fillStyle = this.selected_color
        fill_ctx.fillRect(0, 0, canvas.width, canvas.height)

        this.getIMG({ x, y, width, height }).then(async (url) => {
          await this.getImg(ctx, fill_cvs.toDataURL(), canvas.width, canvas.height)
          await this.getImg(ctx, url, canvas.width, canvas.height)
          this.coverImageUrl = cover.toDataURL()
        })
      }, 10)
    },
    showAddText() {
      if (this.showColor_val == 1) {
        this.showColor_val = ''
      } else {
        this.showColor_val = 1
      }
    },
    ProductBtn() {
      if (this.showColor_val == 2) {
        this.showColor_val = ''
      } else {
        this.showColor_val = 2
      }
    },
    color_color() {
      this.showColor_val = 3
    },
    closeCan() {
      this.TextShow = false
    },
  },
}
</script>
<style>
@font-face {
  font-family: 'PingFang-Light';
  src: url('../assets/font/PingFang Light.ttf');
}

@font-face {
  font-family: 'PingFang-Bold';
  src: url('../assets/font/PingFang Bold.ttf');
}
</style>
<style scoped lang="scss">
@keyframes myfirst {
  0% {
    bottom: 0;
  }
  25% {
    bottom: 0.5rem;
  }
  50% {
    bottom: 1rem;
  }
  75% {
    bottom: 1.5rem;
  }
  100% {
    bottom: 2.5rem;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  0% {
    bottom: 0;
  }
  25% {
    bottom: 0.5rem;
  }
  50% {
    bottom: 1rem;
  }
  75% {
    bottom: 1.5rem;
  }
  100% {
    bottom: 2.5rem;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  0% {
    bottom: 0;
  }
  25% {
    bottom: 0.5rem;
  }
  50% {
    bottom: 1rem;
  }
  75% {
    bottom: 1.5rem;
  }
  100% {
    bottom: 2.5rem;
  }
}

@-o-keyframes myfirst /* Opera */ {
  0% {
    bottom: 0;
  }
  25% {
    bottom: 0.5rem;
  }
  50% {
    bottom: 1rem;
  }
  75% {
    bottom: 1.5rem;
  }
  100% {
    bottom: 2.5rem;
  }
}

.design-content {
  .search {
    display: flex;
    flex-flow: row;
  }

  .design-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    img {
      width: 80px;
      height: 80px;
    }
  }
}

.size-content {
  .size-item {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;

    .size-title {
      text-align: center;
      font-size: 0.875rem;
      flex: 1;
      display: flex;
      flex-flow: column;
      justify-content: center;
    }

    .size-value {
      margin: 0 10px;
      button {
        border: 1px solid #ccc;
        border-radius: 0;
      }
    }
  }
}
/deep/ [data-v-82b7485c] .ivu-input {
  text-align: center;
  border-left: transparent;
  border-right: transparent;
  border-radius: 0;
}

#canvas {
  height: 700px;
  width: 700px;
}

.header {
  height: 46px;
  width: 100%;
  background-color: #0970bb;
  line-height: 46px;
  text-align: center;
  font-size: larger;
  color: #ffffff;
  font-weight: bold;
  box-shadow: 1px 1px 1px 1px;
}

.title {
  width: 100%;
  font-size: large;
  text-align: center;
  font-weight: bold;
  color: black;
}

.t-shirt {
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: row; */
  margin-top: 10px;

  .buttons {
    /* text-align: center; */
  }

  .img-list-m {
    width: 20vw;
    padding: 1vw;

    img {
      width: 18vw;
      height: 18vw;
    }
  }

  .mobile {
    width: 100vw;
    padding: 0;

    .sliders {
      padding: 5px 15px;
    }

    #canvas {
      height: 100vw;
      width: 100vw;
      /* margin: 0 15vw; */
    }
  }
}
.canvas-img {
  float: left;
  height: 100%;
}
.canvas {
  width: fit-content;
  padding: 0 100px;
  position: relative;
  width: 100%;
  height: 100%;

  .mobile-color-list {
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .color-item {
      background-color: black;
      width: 30px;
      height: 30px;
      margin: 5px;
      border-radius: 5px;
      border: 2px solid cyan;
    }
  }

  .cvs-cover {
    position: absolute;
    z-index: 999;
    pointer-events: none;
    top: 27px;
    left: 0;
    #cover-canvas {
      width: 100vw;
      height: 100vw;
      pointer-events: none;
    }
  }

  .cvs-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    z-index: 999;
    border: 1px dotted #fff;
    pointer-events: none;
  }

  /* .fixed-list {
      position: absolute;
      top: 0;
      left: 20px;
      width: 60px;
      height: 500px;

      display: flex;
      flex-direction: column;


      .color-item {
        background-color: black;
        width: 60px;
        height: 60px;
        margin: 0 0 10px;
        border-radius: 5px;
        border: 2px solid cyan;
      }
    } */
}
.img-list {
  /* position: relative; */
  width: 14rem;
  display: flex;
  flex-flow: row wrap;
  height: fit-content;
  padding-top: 300px;
  .img-upd {
    position: absolute;
    top: 1.25rem;
    left: 0;
    width: 70px;
    height: 200px;
    box-shadow: 0px 0px 7px -4px;
  }

  .clear_hidde {
    .color-btn {
      width: 70px;
      height: 70px;
    }
    .color-btns {
      /* width: 70px; */
      /* margin: auto; */
    }
  }

  > div,
  img {
    width: 100px;
    height: 100px;
  }

  .img-list-m {
    width: 100px;
    height: 32px;
  }
}

.sliders {
  display: flex;
  flex-direction: row;
  padding: 2rem 5vw;
}
/deep/ .ivu-input {
  /* margin-bottom: 40px; */
  padding: 5px 19px;
}
/deep/ [data-v-3a0fc43d] .ivu-input {
  padding: 7px 26px;
}
/deep/ .ivu-btn {
  border: 1px solid transparent;
  padding: 0px 0px;
}

/deep/ .canvas .mobile-color-list[data-v-82b7485c] {
  width: 100%;
}

.sliders[data-v-82b7485c] {
  padding: 0.5rem 5vw;
}
.btn_s {
  width: 106px;
  margin-left: 0;
  margin-top: 30px;
  box-shadow: 3px 4px 23px -6px;
}
/deep/ .t-shirt .img-list-m[data-v-82b7485c] {
  padding: 0;
}
/deep/ .t-shirt .img-list-m[data-v-3a0fc43d] {
  padding: 0;
}

.footer_sw {
  width: 14rem;
  height: 300px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  box-shadow: 0px 4px 12px -2px;
}
.getPrice_btn {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: #00b2a5;
  color: #fff;
  font-size: 20px;
}

.fixed-list {
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;

  .color-item {
    position: relative;
    background-color: black;
    float: left;
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
    border-radius: 25px;
    border: 2px solid cyan;
    cursor: pointer !important;
  }
}

.fixed-list_fe {
  width: 800px;
  height: 30px;
  overflow: hidden;
}
.label_height {
  width: 400px;
  padding-top: 30px;
}
/* .trans_btn:hover {
  transform: translate3d(1px, 1px, 150px);
} */
.upload_img {
  height: 100%;
}
/* .upload_img:hover {
  transform: translate3d(1px, 1px, 150px);
} */
/* .slot_btn:hover {
  transform: translate3d(1px, 1px, 150px);
} */
.coloe_btn {
  box-shadow: 2px 1px 7px -1px;
}
.flo_le {
  float: left;
  box-shadow: 2px 1px 7px -1px;
}
.flo_ri {
  float: right;
  box-shadow: 2px 1px 7px -1px;
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
.slot_btn {
  text-align: center;
  margin-right: 50%;
  box-shadow: 2px 1px 7px -1px;
}
.input_btn {
  width: 100%;
}
.clear_hidde {
  display: inline-block;
}
.color-OK {
  position: relative;
  float: left;
}
.fixed-list_folt {
  width: 200px;
  height: 40px;
  overflow: hidden;
  float: left;
}
/* 手机端样式start */
.Input-phone {
  width: 80%;
  box-shadow: 2px 1px 7px -1px;
}
.img-add {
  padding: 0 5px;
  width: 100%;
  height: 40px;
}
.icon-del {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
  display: inline-block;
  color: red;
  font-size: 30px;
}
.span-add {
  display: inline-block;
  background-image: linear-gradient(to right bottom, #19be6b, #19be6b);
  width: 60px;
  height: 30px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  box-shadow: 2px 1px 7px -1px;
  margin: 0 5px;
  line-height: 30px;
}
.span-del {
  display: inline-block;
  background-color: #ed4014;
  color: #fff;
  border-radius: 6px;
  box-shadow: 2px 1px 7px -1px;
  width: 44px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.Select-opt {
  border: 1px solid skyblue;
  border-radius: 5px;
  box-shadow: 2px 1px 7px -1px;
}
.find-btn {
  margin-top: 5px;
  margin-bottom: 5px;
  position: relative;
  width: 100%;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  text-align: left;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: transparent;
  border-left: transparent;
  color: #000;
  border-radius: 6px;
  .icon-find {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
  }
}
.btn-s {
  position: relative;
  margin-bottom: 5px;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: transparent;
  border-left: transparent;
  color: #000;
  width: 100%;
  text-align: left;
  border-radius: 6px;
  .icon-btns {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
  }
}
.btn-see {
  position: relative;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: transparent;
  border-left: transparent;
  color: #000;
  width: 100%;
  text-align: left;
  border-radius: 6px;
  .icon-see {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
  }
}
.btn-y {
  position: relative;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: transparent;
  border-left: transparent;
  color: #000;
  width: 100%;
  text-align: left;
  border-radius: 6px;
  .icon-btny {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
  }
}
.over-hide {
  overflow: hidden;
}
/* /deep/ .t-shirt .img-list .img-list-m[data-v-4cb7c3ad]  {
  padding-top: 0 !important;
  padding-left: 0 !important;
  box-shadow: 4px 2px 8px -2px;
} */
/deep/ .t-shirt .img-list-m[data-v-3626332f] {
  padding: 0;
  box-shadow: 4px 2px 8px -2px;
}
/deep/ .canvas .mobile-color-list[data-v-750fe325] {
  width: 100%;
}
/* 手机端样式end */
.previ-btn {
  position: absolute;
  top: 93%;
  left: 50%;
  transform: translate(-50%,0);
}
.slider-bo {
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  padding: 0.3125rem 0.625rem;
  margin: 1.25rem auto 0;
}
.slider-rig {
  width: 100%;
  padding: 0.3125rem 0.625rem;
  margin: auto;
}
.text-content {
  width: 100%;
  height: 2.5rem;
  padding: 0 0.625rem;
  box-shadow: 0px 0px 9px -5px;
}
.text-poseti {

  position: absolute;
  bottom: 0;
}
.text-poseti2 {
  animation: myfirst 0.5s linear 1;
  animation-fill-mode: forwards;
  position: absolute;
  bottom: 0;
}
.text-poseti1 {
  animation: myfirst 0.5s linear 1;
  animation-fill-mode: forwards;
  position: absolute;
  bottom: 0;
}
.text-poseti3 {
  animation: myfirst 0.5s linear 1;
  animation-fill-mode: forwards;
  position: absolute;
  bottom: 0;
}
.text-poseti4 {
  animation: myfirst 0.5s linear 1;
  animation-fill-mode: forwards;
  position: absolute;
  bottom: 0;
}

.text-content-size {
  width: 100%;
  height: 4rem;
  padding: 0 0.625rem;
}
.color-btnAp {
  display: inline-block;
  width: 23%;
  height: 1.4rem;
}
.flo-color {
  float: left;
}
.color-blu {
  background-color: #00b2a5;
  width: 3.75rem;
  transform: translate(-1px, 0);
  color: #fff;
}
.color-btns {
  float: right;
  width: 3.75rem;
  height: 2.5rem;
}
.label_st {
  width: 100%;
}
/* .color-btnSelf {
  width: 100%;
} */
.self-rig {
  float: right;
  width: 14rem;
  /* height: 320px; */
  /* width: 300px; */
  position: relative;
}
.buttons {
  position: relative;
  float: left;
  width: 14rem;
}
.box-sty {
  position: absolute;
  height: 12rem;
  width: 100%;
  bottom: 0px;
}
/deep/ .t-shirt .img-list-m[data-v-449e7d26] {
  padding: 0;
}
/deep/ [data-v-449e7d26] .ivu-input {
  padding: 6px 26px;
}
/deep/ .ivu-color-picker .ivu-select-dropdown  {
  left: 91px !important;
  top: -40px !important;
}
/deep/ .ivu-select-dropdown {
  width: 267px !important;
  margin: 40px 0 0 0 !important;
}

@media all and (min-width: 1600px) {
  .t-shirt {
    width: 68.75rem;
    margin: auto;
  }
  .img-list {
    width: 14rem;
  }
  .canvas-img {
    width: 900px;
  }
  .canvas {
    width: 900px;
  }
  .self-rig {
      width: calc((100% - 900px) / 2);
      position: absolute;
      right: 0;
      top: 770px;
    }
  
}

@media all and (min-width: 1400px) and (max-width: 1600px) {
  .t-shirt {
    position: relative;
    width: 90%;
    margin: auto;
    .img-list {
      width: 200px;
    }
    .canvas-img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 900px;
    }
    .canvas {
      width: 900px;
    }
    .self-rig {
      width: calc((100% - 900px) / 2);
      position: absolute;
      right: 5%;
      top: 730px;
    }
  }
}
@media all and (min-width: 900px) and (max-width: 1400px) {
  .t-shirt {
    position: relative;
    width: 100%;
    margin: auto;
    .buttons {
      width: 100%;
      height: 300px;
      .img-list {
        position: relative;
        display: flex;
        flex-direction: row;
        margin-left: 5%;
        overflow: hidden;
        width: 50%;
        height: 300px;
        padding-top: 0;
        padding-left: 100px;
        .img-upd {
          position: absolute;
          left: 0;
          top: 30px;
          width: 70px;
          height: 240px;
          display: inline-block;
        }
      }
    }
    .self-rig {
      width: 300px;
      height: 300px;
      position: absolute;
      right: 2%;
      top: 0;
    }

    .canvas-img {
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 900px;
    }
    .canvas {
      width: 900px;
    }
  }
}
@media all and (min-width: 765px) and (max-width: 900px) {
  .t-shirt {
    position: relative;
    width: 100%;
    margin: auto;
    .buttons {
      width: 100%;
      height: 300px;
      .img-list {
        position: relative;
        display: flex;
        flex-direction: row;
        margin-left: 0;
        overflow: hidden;
        width: 60%;
        height: 300px;
        padding-top: 0;
        padding-left: 100px;
        .img-upd {
          position: absolute;
          left: 0;
          top: 30px;
          width: 70px;
          height: 240px;
          display: inline-block;
        }
      }
    }
    .self-rig {
      width: 300px;
      height: 300px;
      position: absolute;
      right: 0;
      top: 0;
    }

    .canvas-img {
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 900px;
    }
    .canvas {
      width: 700px;
    }
  }
}
</style>
