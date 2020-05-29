<template>
  <div id="modules_box">
    <div class="text item">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="7">
            <div class="grid-content bg-purple">
              <el-form-item label="活动时间">
                <el-col :span="10">
                  <el-input v-model="form.name" />
                </el-col>

                <el-col class="line" :span="2">
                  <div class="line_box"></div>
                </el-col>
                <el-col :span="10">
                  <el-input v-model="form.name" />
                </el-col>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="4">
            <div class="grid-content bg-purple-light">
                <el-input v-model="form.name" placeholder="请选择 "></el-input>
            </div>
          </el-col>

          <el-col :span="3">
            <div class="grid-content bg-purple">
                <el-button style="margin-left:15px" type="primary" @click="onSubmit">立即创建</el-button>
            </div>
          </el-col>

        </el-row>
      </el-form>
    </div>

    <div class="text item">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="#" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="120"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick(row) {
      console.log(row);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
#modules_box {
  .text {
    font-size: 14px;
  }
  .box-card {
    width: 480px;
  }
  .item {
    padding: 18px 0;
    background: #fff;
    border: 5px;
    margin-bottom: 20px;
    .el-row {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }

    .line {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .line_box {
        width: 18px;
        height: 1px;
        border-top: 1px solid #000;
      }
    }
  }
}
</style>