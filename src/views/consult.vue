<template>
    <div id="consult">
        <mu-appbar color="primary">
           <span class="bigTitle">充值扣费记录查询</span><br/>
           <span class="smallTitle">河北XX绒毛制品有限公司书</span>
        </mu-appbar>
        <mu-container class="demo-container">
        <mu-row gutter>
          <mu-col span="5">
            <mu-date-input 
            v-model="startDate" 
            label="开始时间" 
            label-float 
            full-width 
            no-display 
            container="bottomSheet">
            </mu-date-input>
          </mu-col>
          <mu-col span="5">
            <mu-date-input 
            v-model="endDate" 
            label="结束时间" 
            label-float 
            full-width 
            no-display 
            container="bottomSheet">
            </mu-date-input>
          </mu-col>
          <mu-col span="2">
            <mu-button fab small color="primary">
              <mu-icon value="search"></mu-icon>
            </mu-button>
          </mu-col>
        </mu-row>
        </mu-container>
        <mu-paper :z-depth="1">
            <mu-data-table 
            stripe
            height="400"
            :columns="columns" 
            :sort.sync="sort" 
            @sort-change="handleSortChange" 
            :data="list"
            no-data-text="暂无数据">
            <template slot-scope="scope">
                <td>{{scope.row.date}}</td>
                <td class="is-right">{{scope.row.type}}</td>
                <td class="is-right">{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.weight}}</td>
                <td class="is-right">{{scope.row.car}}</td>
                <td class="is-right">{{scope.row.cost}}</td>
            </template>
            </mu-data-table>
        </mu-paper>
        <mu-flex justify-content="center">
            <mu-pagination raised :total="total" :current.sync="current" :page-size="pageSize" :page-count="pageCount" @change="handleChange"></mu-pagination>
        </mu-flex>
        <mu-snackbar :position="normal.position" :open.sync="normal.open">
          {{normal.message}}
          <mu-button flat slot="action" color="secondary" @click="normal.open = false">Close</mu-button>
        </mu-snackbar>
    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      startDate: undefined,
      endDate: undefined,
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        {
          title: "时间",
          name: "date",
          width: 126,
          sortable: true
        },
        {
          title: "类型",
          name: "type",
          width: 80,
          align: "center",
          sortable: true
        },
        {
          title: "操作人",
          name: "name",
          width: 100,
          align: "center",
          sortable: true
        },
        {
          title: "净重(g)",
          name: "weight",
          width: 100,
          align: "center",
          sortable: true
        },
        {
          title: "运输车辆",
          name: "car",
          align: "center",
          sortable: true
        },
        {
          title: "费用(元)",
          name: "cost",
          width: 100,
          align: "center",
          sortable: true
        }
      ],
      list: [
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        },
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        },
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        },
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        },
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        },
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        },
        {
          date: "2018-6-3",
          type: "消费",
          name: "离开家",
          weight: "1000",
          car: "浙A 666666",
          cost: "120"
        }
      ],
      current: 1,
      total: 100,
      pageSize: 7,
      pageCount: 5,
      normal: {
        position: "bottom",
        message: "结束时间不能小于开始时间！",
        open: false,
        timeout: 2000
      }
    };
  },
  methods: {
    handleSortChange({ name, order }) {
      this.list = this.list.sort(
        (a, b) => (order === "asc" ? a[name] - b[name] : b[name] - a[name])
      );
    },
    handleChange(num) {
      console.log(num);
    },
    openNormalSnackbar() {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    }
  },
  watch: {
    startDate(newVal) { 
        if (this.endDate !== undefined && this.endDate < newVal) {
          this.endDate = undefined;
        }
      
    },
    endDate(newVal,oldVal) {
        if (this.startDate !== undefined && this.startDate > newVal) {
          this.openNormalSnackbar();
          this.endDate = oldVal;
        }
    }
  }
};
</script>
<style lang="less">
#consult {
  .mu-appbar-title{
    height: 56px;
    line-height: normal;
    .bigTitle{
      font-size:16px;
    }
    .smallTitle{
      font-size:10px;
    }
  }
  
  .mu-button {
    margin-top: 23px;
    margin-bottom: 12px;
  }
  .mu-paper{
    margin:0 8px;
  }
}
</style>

