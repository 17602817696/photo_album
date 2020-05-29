<template>
  <div id="order_box">
    <div class="text item">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="用户ID">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="用户名">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="订单号">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="订单状态">
                <el-select v-model="form.region" placeholder="请选择订单状态">
                  <el-option label="待付款" value="beijing"></el-option>
                  <el-option label="已付款" value="beijing"></el-option>
                  <el-option label="已取消" value="beijing"></el-option>
                  <el-option label="过期" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="付款方式">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="微信" value="beijing"></el-option>
                  <el-option label="支付宝" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="支付设备">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="IOS" value="beijing"></el-option>
                  <el-option label="PC" value="beijing"></el-option>
                  <el-option label="Andriod" value="beijing"></el-option>
                  <el-option label="小程序" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
                <el-form-item label="电话号码">
                  <el-input v-model="form.name" placeholder="请输入"></el-input>
                </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="订单类型">
                <el-select v-model="form.region" placeholder="请选择订单类型">
                  <el-option label="正常订单" value="shanghai"></el-option>
                  <el-option label="测试订单" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <el-form-item label="时间筛选">
                <el-col :span="11">
                  <el-date-picker
                    type="datetime"
                    placeholder="开始日期"
                    v-model="form.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">
                  <div class="line_box"></div>
                </el-col>
                <el-col :span="11">
                  <el-date-picker
                    type="datetime"
                    placeholder="结束日期"
                    v-model="form.date2"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="grid-content bg-purple-light">
              <el-form-item label="付费金额筛选" label-width="100">
                <el-col :span="8">
                  <el-input placeholder="请输入最小金额" v-model="form.name" />
                </el-col>

                <el-col class="line" :span="2">
                  <div class="line_box"></div>
                </el-col>
                <el-col :span="8">
                  <el-input placeholder="请输入最大金额" v-model="form.name" />
                </el-col>
              </el-form-item>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="发票状态">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="已开票" value="shanghai"></el-option>
                  <el-option label="未开票" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <el-form-item label="空间容量">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="500M" value="shanghai"></el-option>
                  <el-option label="2G" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="onSubmit">搜索</el-button>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单列表</span>
      </div>
      <div class="text item">
        <el-table :data="tableData" border style="width: 100%" :row-style="{height:'20px'}" :cell-style="{padding:'3px 0px'}">
          <el-table-column fixed prop="orderID" label="订单ID" width="100"></el-table-column>
          <el-table-column prop="userID" label="用户ID" width="100"></el-table-column>
          <el-table-column prop="orderNum" label="订单编号" width="100"></el-table-column>
          <el-table-column prop="phone" label="联系电话" width="100"></el-table-column>
          <el-table-column prop="money" label="金额" width="100"></el-table-column>
          <el-table-column prop="orderState" label="订单状态" width="100"></el-table-column>
          <el-table-column prop="payWay" label="支付方式" width="100"></el-table-column>
          <el-table-column prop="payEquipment" label="支付设备" width="100"></el-table-column>
          <el-table-column prop="orderType" label="订单类型" width="100"></el-table-column>
          <el-table-column prop="userName" label="用户名" width="100"></el-table-column>
          <el-table-column prop="capacity" label="空间容量" width="100"></el-table-column>
          <el-table-column prop="invoiceState" label="开票状态" width="100"></el-table-column>
          <el-table-column prop="creationTime" label="创建时间" width="100"></el-table-column>
          <el-table-column prop="payTime" label="付款时间" width="100"></el-table-column>
          <el-table-column prop="endTime" label="到期时间" width="100"></el-table-column>

          <el-table-column fixed="right" label="操作" width="80">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: ""
      },
      tableData: [
        {
          orderID: "2016-05-02",
          userID: "王小虎",
          orderNum: "上海",
          phone: "普陀区",
          money: "上海区金",
          orderState: 200333,
          payWay: 200333,
          payEquipment: 200333,
          orderType: 200333,
          userName: "2016-05-02",
          capacity: 200333,
          invoiceState: 200333,
          creationTime: 200333,
          payTime: "2016-05-02",
          endTime: "2016-05-02",
        },
        {
          orderID: "2016-05-02",
          userID: "王小虎",
          orderNum: "上海",
          phone: "普陀区",
          money: "上海区金",
          orderState: 200333,
          payWay: 200333,
          payEquipment: 200333,
          orderType: 200333,
          userName: "2016-05-02",
          capacity: 200333,
          invoiceState: 200333,
          creationTime: 200333,
          payTime: "2016-05-02",
          endTime: "2016-05-02",
        },
        {
          orderID: "2016-05-02",
          userID: "王小虎",
          orderNum: "上海",
          phone: "普陀区",
          money: "上海区金",
          orderState: 200333,
          payWay: 200333,
          payEquipment: 200333,
          orderType: 200333,
          userName: "2016-05-02",
          capacity: 200333,
          invoiceState: 200333,
          creationTime: 200333,
          payTime: "2016-05-02",
          endTime: "2016-05-02",
        },
        {
          orderID: "2016-05-02",
          userID: "王小虎",
          orderNum: "上海",
          phone: "普陀区",
          money: "上海区金",
          orderState: 200333,
          payWay: 200333,
          payEquipment: 200333,
          orderType: 200333,
          userName: "2016-05-02",
          capacity: 200333,
          invoiceState: 200333,
          creationTime: 200333,
          payTime: "2016-05-02",
          endTime: "2016-05-02",
        },
      ]
    };
  },
  methods: {
    //   搜索
    onSubmit() {
      console.log("submit!");
    },
    // 表格
    handleClick(row) {
      console.log(row);
    }
  }
};
</script>

<style lang="less">
#order_box {
  .text {
    font-size: 14px;
  }
  .box-card {
    width: 100%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
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

    .grid-content {
      border-radius: 4px;
      min-height: 36px;
      padding: 0 15px;
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
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }


  }
}
</style>