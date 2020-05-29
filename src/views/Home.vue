<template>
  <div id="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <div class="headline">
              <span class="head_title">
                <i class="el-icon-wallet"></i>成长相册管理后台
              </span>
            </div>
            <el-menu
              :router="true"
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">系统首页</span>
              </el-menu-item>

              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单管理</span>
                </template>
                <el-menu-item index="/order/orderSearch">订单查询</el-menu-item>
              </el-submenu>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>系统模块管理</span>
                </template>
                <el-menu-item index="/order/uploadModules">系统上传模块管理</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>

      <!-- 右边 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div>
            <div class="head_user">
              <el-dropdown :hide-on-click="false">
                <span class="el-dropdown-link">
                  <div class="head_info">
                    <span>欢迎您!</span>
                    <span>超级管理员</span>
                  </div>
                  <div>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </div>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <router-link style="color:#000;text-decoration:none;" to="#">退出</router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

              <div class="head_img">
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                ></el-avatar>
              </div>
            </div>
            <div class="head_time">
              <span>20:20:20</span>2020年02月20日
            </div>
            <el-badge :value="99" class="item">
              <i class="el-icon-bell"></i>
            </el-badge>
          </div>
        </el-header>

        <div class="nav_crumbs">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(v,i) in this.$route.meta" :key="i">{{v}}</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 上传 -->
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
          >
            <!-- :file-list="fileList" -->
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </div>
        <!-- 身体 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    // 侧边栏
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      console.log(fileList)
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style lang="less">
#home {
  width: 100%;
  height: 100%;

  .el-aside {
    width: 260px !important;
    color: #333;
    background-color: #2d2d2d;
    .el-row {
      height: 100%;
      .headline {
        color: #fff;
        background: #1e1e1e;
        margin: 0;
        padding: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        .head_title {
          i {
            width: 30px;
            line-height: 30px;
            text-align: center;
            background: #fff;
            color: #e9574d;
            font-weight: 800;
            border-radius: 50%;
            margin-right: 5px;
          }
        }
      }
      .el-menu {
        border: none;
        flex: 1;
        background: #2d2d2d !important;
        .el-menu-item {
          color: #aaa !important;
          background: #2d2d2d !important;
        }
        .el-submenu__title {
          color: #aaa !important;
          background: #2d2d2d !important;
        }
        .el-menu-item.is-active {
          color: #fff !important;
          background-color: #2392ff !important;
        }
      }
      .el-col-12 {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }

  .el-container {
    height: 100%;
    .el-header {
      background-color: #fff;
      color: #333;
      text-align: right;
      box-shadow: 0px 2px 10px 0px #888;
      z-index: 1000;
      // line-height: 60px;
      div {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        .item {
          margin-top: 0;
          margin-right: 30px;
          .el-icon-bell {
            font-size: 24px;
            line-height: 60px;
          }
          .el-badge__content {
            font-size: 9px;
            height: 15px;
            background-color: red;
            border-radius: 50%;
            line-height: 16px;
          }
          .is-fixed {
            top: 16px;
            right: 5px;
          }
        }
        .head_time {
          width: 230px;
          height: 35px;
          border-left: 1px solid #333;
          border-right: 1px solid #333;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          span {
            margin-left: 8px;
          }
        }
        .head_user {
          .el-dropdown-link {
            cursor: pointer;
            display: flex;
            .head_info {
              display: flex;
              flex-direction: column;
              color: #000;
              font-size: 12px;
            }
          }
          .el-icon-arrow-down {
            font-size: 12px;
          }
          .head_img {
            margin-right: 10px;
          }
        }
      }
    }

    .nav_crumbs {
      height: 100px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f9f9f9;
    }

    .el-main {
      background-color: #f9f9f9;
      padding: 0 20px;
    }
  }
}
</style>
