<template>
  <v-app>
    <v-main class="pa-3">
      <!--overlay-->
      <v-overlay :value="overlay">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>

      <!--action-->
      <v-row
        no-gutters
        class="mb-2"
      >
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          outlined
          :disabled="passData.button && passData.button.restrict_btn.rules.disabled==1"
          @click="newPass()"
        >
          新辦
        </v-btn>

      </v-row>
      <!--data-->
      <v-hover
        v-slot="{ hover }"
        v-for="(item,index) in passData"
        :key="index"
      >
        <v-row
          no-gutters
          class="row-border hover-bd-l-color py-lg-4 pr-lg-0 py-md-2 pr-md-0 py-5 pr-2 pl-2 mr-3"
        >
          <!--advice && sem-->
          <v-col
            lg="2"
            md="2"
            cols="4"
          >
            <v-row no-gutters>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="35"
                    v-bind="attrs"
                    v-on="on"
                    color="black"
                    @click="()=>{
                    currentPassDataIndex = index;
                    controllDialog(true,1,'','');
                  }"
                    style="cursor:pointer"
                  >mdi-information-outline
                  </v-icon>
                </template>
                <span>審核意見</span>
              </v-tooltip>
              <div
                style="font-size: 25px;line-height:40px;"
                class="d-flex ml-3 pa-0 pr-3"
              > {{item.list_data.app_smye }}-{{item.list_data.app_smty }}</div>
            </v-row>
          </v-col>
          <!-- plate number-->
          <v-col
            lg="2"
            md="2"
            cols="12"
          >
            <div :style="{'font-size':'30px','line-height':'40px','font-weight':hover?'bold':'normal'}">
              {{item.list_data.plate_number}}
            </div>
          </v-col>
          <!-- pass type-->
          <v-col
            lg="2"
            md="2"
            cols="4"
          >
            <div
              style="font-size: 23px;line-height:40px;"
              class="d-flex pa-0 pr-3"
            > {{changePassTypeToString(item.list_data.app_pass_type) }}</div>
          </v-col>
          <!--status-->
          <v-col
            lg="1"
            md="1"
            cols="4"
          >
            <div
              style="font-size: 23px;line-height:40px;"
              class="d-flex pa-0 pr-3"
            > {{changeStatusToString(item.list_data.todo_flag) }}</div>
          </v-col>
          <!--date-->
          <v-col
            lg="3"
            md="3"
            cols="12"
          >
            <div
              v-if="item.list_data.todo_date.length!=0"
              style="font-size: 20px;line-height:40px;"
              class="d-flex pa-0 pr-3 txt-overflow"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span
                    class="txt-overflow"
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{changeTodoFlagString(item.list_data)}}</span>
                </template>
                <span> {{changeTodoFlagString(item.list_data)}}</span>
              </v-tooltip>
            </div>

          </v-col>
          <!--action-->
          <v-col
            lg="2"
            md="2"
            cols="12"
            class="d-flex justify-end pr-2"
          >
            <div
              v-for="(btn,btnIndex) in item.button"
              :key="btn.type"
            >
              <!-- delete -->
              <v-tooltip
                bottom
                v-if="btn.type=='del_button'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="35"
                    :class="{'mr-7':btnIndex+1!=item.button.length}"
                    v-bind="attrs"
                    v-on="on"
                    :color="hover
                      ?btn.rules.disabled==1
                        ?'grey'
                        :'black'
                      :'grey'"
                    :style="btn.rules.disabled==1
                        ?'cursor:not-allowed'
                        :'cursor:pointer'"
                    @click="btn.rules.disabled==1
                      ?()=>{}                      
                      :deleteDialog(index)"
                  >mdi-delete-outline
                  </v-icon>
                </template>
                <span>{{btn.rules.disabled==1?changeDBMToString(btn.rules.delete_button_msg):btn.value}}</span>
              </v-tooltip>
              <!-- pay btn-->
              <v-tooltip
                bottom
                v-else-if="btn.type=='pay_button'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="35"
                    :class="{'mr-7':btnIndex+1!=item.button.length}"
                    v-bind="attrs"
                    v-on="on"
                    :color="hover
                      ?btn.rules.disabled==1
                        ?'grey'
                        :'black'
                      :'grey'"
                    :style="btn.rules.disabled==1
                        ?'cursor:not-allowed'
                        :'cursor:pointer'"
                    @click="btn.rules.disabled==1
                      ?()=>{}                      
                      :payDialog(index,item,btn)"
                  >mdi-cash
                  </v-icon>
                </template>
                <span>{{btn.rules.disabled==1?changePBMToString(btn.rules.payment_button_msg):btn.value}}</span>
              </v-tooltip>
              <!-- reapp btn-->
              <v-tooltip
                bottom
                v-else-if="btn.type=='reapp_button'"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    size="35"
                    :class="{'mr-7':btnIndex+1!=item.button.length}"
                    v-bind="attrs"
                    v-on="on"
                    :color="hover
                      ?btn.rules.disabled==1
                        ?'grey'
                        :'black'
                      :'grey'"
                    :style="btn.rules.disabled==1
                        ?'cursor:not-allowed'
                        :'cursor:pointer'"
                    @click="btn.rules.disabled==1
                      ?()=>{}
                      :renewPass(index,item)"
                  >mdi-clipboard-check-outline
                  </v-icon>
                </template>
                <span>{{btn.rules.disabled==1?changeRBMToString(btn.rules.reapp_button_msg):btn.value}}</span>
              </v-tooltip>
            </div>
          </v-col>
        </v-row>
      </v-hover>
      <!--No data-->
      <v-alert
        type="info"
        text
        v-if="getFirstDataState && passData.length==0"
      >
        無資料
      </v-alert>
      <!-- dialog -->
      <v-dialog
        v-model="dialog.show"
        max-width="600"
      >
        <!--message-->
        <v-card v-if="dialog.index==0">
          <v-card-title class="text-h5">
            {{dialog.title}}
          </v-card-title>

          <v-card-text class="text-h6">
            {{dialog.msg}}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog.show = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
        <!--advice-->
        <v-card v-else-if="dialog.index==1">
          <v-card-title class="text-h5">
            審核意見
          </v-card-title>
          <v-card-text>
            <v-row
              no-gutters
              class="py-2"
              v-for="(item) in passData[currentPassDataIndex].list_data.check_reason"
              :key="item.sno"
            >
              <v-row
                no-gutters
                class="mb-1"
                style="font-size:18px;font-weight:400;"
              >{{item.check_reason}}</v-row>
              <v-row no-gutters>
                <v-col
                  cols="12"
                  class="d-flex justify-end"
                  style="font-size:14px;color:grey;"
                > {{item.contact_info}}</v-col>
                <v-col
                  cols="12"
                  class="d-flex justify-end"
                  style="font-size:14px;color:grey;"
                > {{item.check_date}}</v-col>
              </v-row>
            </v-row>
            <v-row
              no-gutters
              v-if="passData[currentPassDataIndex] && passData[currentPassDataIndex].list_data.check_reason.length==0"
            >
              <v-col cols="12">
                <v-alert
                  type="info"
                  text
                >
                  無資料
                </v-alert>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="controllDialog(false,0,'','')"
              >
                close
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
        <!--delete-->
        <v-card v-else-if="dialog.index==2">
          <v-card-title class="text-h5">
            確定刪除?
          </v-card-title>
          <v-card-text>

          </v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                text
                @click="controllDialog(false,0,'','')"
              >
                no
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="deleteItem()"
              >
                yes
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
        <!--bill-->
        <v-card v-else-if="dialog.index==3">
          <v-card-title class="text-h5">
            繳費詳細資料
          </v-card-title>
          <v-card-text>
            <v-form readonly>
              <v-text-field
                v-model="dialog.form.app_smye"
                label="學年"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="dialog.form.app_smty"
                label="學期"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="dialog.form.plate_number"
                label="車牌號碼"
                outlined
              ></v-text-field>
              <v-select
                v-model="dialog.form.app_pass_type"
                :items="info.app_pass_type"
                item-text="code_value"
                item-value="code_no"
                label="類別"
                outlined
              ></v-select>
            </v-form>
            <v-alert
              text
              type="info"
              icon="mdi-currency-usd "
            >
              {{dialog.form.title}}
            </v-alert>
            <v-alert
              text
              type="warning"
            >
              PDF將會開啟另一視窗產生
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-spacer></v-spacer>

              <v-btn
                color="error"
                text
                @click="controllDialog(false,0,'','')"
              >
                不同意
              </v-btn>
              <v-btn
                color="primary"
                text
                @click="exportPDF()"
              >
                同意
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
// import pdf from 'vue-pdf'

export default {
  name: "App",

  components: {},
  data: () => ({
    testMode: false,
    target: `gGroups_i=${gGroups}&gSys_s=${gSys_s}&gFunc_s=${gFunc_s}`,
    themeColor: "",
    overlay: false,
    getFirstDataState: false,
    step: 1,
    valid: true,
    passData: [],
    currentPassDataIndex: 0,
    info: {
      app_pass_type: [],
      vr_data: [],
      vehicle_category: [],
      todo_flag: [],
      violation_msg: [],
      alert_msg: [],
      driver_license_pass_msg: [],
      delete_button_msg: [],
      payment_button_msg: [],
      reapp_button_msg: [],
    },
    dialog: {
      index: 0,
      show: false,
      title: "",
      msg: "",
      form: {
        app_no: "",
        app_smye: 0,
        app_smty: 0,
        app_pass_type: "",
        plate_number: "",
        title: "",
        price: "",
        app_identity: "",
      },
    },
  }),
  created() {
    const self = this;
    if (
      location.href.indexOf("localhost") != -1 ||
      location.href.indexOf("github")
    )
      self.testMode = true;
    else self.testMode = false;
  },
  mounted() {
    const self = this;
    var getColor = () => {
      //text to hex
      var getHex = function (text) {
        var hex;
        switch (text) {
          case "blue":
            hex = "#3b5998";
            break;
          case "green":
            hex = "#098c6e";
            break;
          case "red":
            hex = "#b72e4a";
            break;
          case "highway":
            hex = "#c60";
            break;
          case "violet":
            hex = "#8b00ff";
            break;
        }
        return hex;
      };
      //conditional
      if (window.localStorage.getItem("_client_color")) {
        self.themeColor = getHex(window.localStorage.getItem("_client_color"));
      } else {
        self.themeColor = getHex(window.localStorage.getItem("_default_color"));
      }
    };
    //first call
    getColor();

    //add listener to local storage
    window.addEventListener("storage", () => {
      getColor();
    });

    //main porcess
    self.mainProcess();
  },
  updated() {
    const self = this;
    self.updateHeight();
  },
  computed: {
    years: function () {
      const self = this;
      var list = [];
      var currentTime = Date.now();
      if (
        self.passData.vehicle_license_list &&
        self.passData.vehicle_license_list.length != 0
      ) {
        //inital
        var restrictions =
          self.passData.vehicle_license_list[self.currentPassDataIndex]
            .app_restrictions;
        //list add
        restrictions.rules.forEach((element) => {
          var startTime = Date.parse(element.canapp_date_b);
          var endTime = Date.parse(element.canapp_date_e);
          if (startTime <= currentTime && endTime >= currentTime)
            list.push(element);
        });
      }
      return list;
    },
    passes: function () {
      const self = this;
      var list = [];
      var currentTime = Date.now();
      if (
        self.passData.vehicle_license_list &&
        self.passData.vehicle_license_list.length != 0 &&
        self.form.app_smye.length != 0
      ) {
        //list add
        self.years.forEach((element) => {
          var startTime = Date.parse(element.canapp_date_b);
          var endTime = Date.parse(element.canapp_date_e);
          if (
            startTime <= currentTime &&
            endTime >= currentTime &&
            element.canapp_smye == self.form.app_smye
          ) {
            var item = {};
            item.value = element.canapp_pass_type;
            var text = self.changePassTypeToString(element.canapp_pass_type);
            item.text = text.code_value;
            list.push(item);
          }
        });
      }
      return list;
    },
  },
  methods: {
    mainProcess: async function () {
      const self = this;
      try {
        var passInfo;
        self.overlay = true;
        passInfo = await self.getPassInfo();
        self.setPassInfo(passInfo);
        self.passData = await self.getPassData();
        self.getFirstDataState = true;
        self.overlay = false;
      } catch (error) {
        throw new Error(error);
      }
    },
    /**
     * dialog
     */

    controllDialog: function (state, index, title, msg) {
      const self = this;
      self.dialog.show = state;
      self.dialog.index = index;
      self.dialog.title = title;
      self.dialog.msg = msg;
    },
    setForm: function (item, btn) {
      const self = this;
      var form = self.dialog.form;
      form.app_no = item.list_data.app_no;
      form.app_smye = item.list_data.app_smye;
      form.app_smty = item.list_data.app_smty;
      form.app_pass_type = item.list_data.app_pass_type;
      form.plate_number = item.list_data.plate_number;
      form.app_identity = item.list_data.app_identity;

      form.title = btn.payment_form.title;
      form.price = btn.payment_form.price;
    },
    payDialog: function (index, item, btn) {
      const self = this;
      self.currentPassDataIndex = index;
      self.setForm(item, btn);
      self.controllDialog(true, 3, "", "");
    },
    deleteDialog: function (index) {
      const self = this;
      self.currentPassDataIndex = index;
      self.controllDialog(true, 2, "", "");
    },

    /**
     * change text
     */
    changeCategoryToString: function (number) {
      const self = this;
      var index;
      var text = "";

      index = self.info.vehicle_category.findIndex(
        (item) => item.code_no == parseInt(number)
      );
      text = self.info.vehicle_category[index].code_value;
      return text;
    },
    changePassTypeToString: function (number) {
      const self = this;
      var text = "";
      text = self.info.app_pass_type.find((data) => number == data.code_no);
      return text.code_value;
    },
    changeStatusToString: function (number) {
      const self = this;
      var text = "";
      text = self.info.todo_flag.find((data) => number == data.code_no);
      return text.code_value;
    },
    changeDBMToString: function (number) {
      const self = this;
      var text = "";
      text = self.info.delete_button_msg.find((data) => number == data.code_no);
      return text.code_value;
    },
    changePBMToString: function (number) {
      const self = this;
      var text = "";
      text = self.info.payment_button_msg.find(
        (data) => number == data.code_no
      );
      return text.code_value;
    },
    changeRBMToString: function (number) {
      const self = this;
      var text = "";
      text = self.info.reapp_button_msg.find((data) => number == data.code_no);
      return text.code_value;
    },
    changeTodoFlagString: function (item) {
      const self = this;
      var text = "";
      switch (parseInt(item.todo_flag)) {
        case 0:
          text = "申請日期  " + item.app_date;
          break;
        case 1:
          if (item.app_identity == "2")
            if (
              item.payment_start_date.length != 0 &&
              item.payment_end_date.length != 0
            )
              text =
                "繳費期間  " +
                item.payment_start_date +
                " ~ " +
                item.payment_end_date;
            else text = "非繳費期間";
          else text = "即日起可繳費";
          break;
        case 5:
          text = "審核日期  " + item.todo_date;
          break;
        case 9:
          text = "已繳費日期  " + item.pay_date;
          break;
      }
      return text;
    },
    /**
     * action
     */
    deleteItem: function () {
      const self = this;
      var item = {
        app_no: self.passData[self.currentPassDataIndex].list_data.app_no,
      };
      if (self.testMode) {
        console.log(item);
      } else {
        self.postPassData(0, item);
      }
    },
    exportPDF: function () {
      const self = this;
      var item = {
        app_no: self.dialog.form.app_no,
        app_smye: self.dialog.form.app_smye,
        app_smty: self.dialog.form.app_smty,
        plate_number: self.dialog.form.plate_number,
        app_pass_type: self.dialog.form.app_pass_type,
        app_identity: self.dialog.form.app_identity,
        price: self.dialog.form.price,
      };
      if (self.testMode) {
        console.log(item);
      } else {
        self.postPassData(1, item);
      }
    },
    renewPass: function (index, item) {
      const self = this;
      self.currentPassDataIndex = index;
      var plate_number = item.list_data.plate_number;

      var url =
        "./dyupass_app.php?" + self.target + "&plate_number=" + plate_number;

      if (self.testMode) console.log(url);
      else location.href = url;
    },
    newPass: function () {
      const self = this;
      var url = "./dyupass_app.php?" + self.target;

      location.href = url;
    },
    /**
     * Data process
     */
    getPassData: function () {
      const self = this;
      return new Promise((resovle, reject) => {
        if (self.testMode)
          axios
            .get(
              "./dyupass_apped_list/tools/json/testData.json?" + Math.random()
            )
            .then((respones) => {
              resovle(respones.data.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-102"
              );
              reject(e);
            });
        else
          axios
            .get("../kernel/dyupass_apped_list_oci.php?" + self.target)
            .then((respones) => {
              resovle(respones.data.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-102"
              );
              reject(e);
            });
      });
    },
    postPassData: function (type, item) {
      const self = this;
      self.overlay = true;
      //type 0:刪除 1:繳費
      switch (type) {
        case 0:
          axios
            .post("../kernel/dyupass_apped_list_save.php?" + self.target, item)
            .then(async (respones) => {
              if (respones.data.result == 1) {
                parent.sysDisplayMessage("", 0, "", "", null, "刪除成功");
                self.passData = await self.getPassData();
                self.controllDialog(false, 0, "", "");
              } else {
                parent.sysDisplayMessage(
                  "",
                  -1,
                  "",
                  "",
                  null,
                  "刪除失敗: " + respones.data.msg
                );
              }
              self.overlay = false;
            })
            .catch((e) => console.log(e));
          break;
        case 1:
          axios
            .post("../kernel/dyupass_payfee.php?" + self.target, item)
            .then(async (respones) => {
              if (respones.data.result == 1) {
                window.open(respones.data.data);
                self.controllDialog(false, 0, "", "");
              } else {
                parent.sysDisplayMessage(
                  "",
                  -1,
                  "",
                  "",
                  null,
                  respones.data.msg
                );
              }
              self.overlay = false;
            })
            .catch((e) => console.log(e));

          break;
      }
    },
    getPassInfo: function () {
      const self = this;
      return new Promise((resovle, reject) => {
        if (self.testMode)
          axios
            .get(
              "./dyupass_apped_list/tools/json/dyupass_tw.json?" + Math.random()
            )
            .then((respones) => {
              resovle(respones.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-101"
              );
              reject(e);
            });
        else
          axios
            .get("../json/tw/dyupass_tw.json?" + Math.random())
            .then((respones) => {
              resovle(respones.data);
            })
            .catch((e) => {
              parent.sysDisplayMessage(
                "",
                -1,
                "",
                "",
                null,
                "取得資訊失敗:-101"
              );
              reject(e);
            });
      });
    },
    setPassInfo: function (data) {
      const self = this;
      self.info.app_pass_type = data.app_pass_type;
      self.info.vr_data = data.vr_data;
      self.info.vehicle_category = data.vehicle_category;
      self.info.todo_flag = data.todo_flag;
      self.info.pay_flag = data.pay_flag;
      self.info.violation_msg = data.violation_msg;
      self.info.alert_msg = data.alert_msg;
      self.info.driver_license_pass_msg = data.driver_license_pass_msg;
      self.info.delete_button_msg = data.delete_button_msg;
      self.info.payment_button_msg = data.payment_button_msg;
      self.info.reapp_button_msg = data.reapp_button_msg;
    },

    /**
     * others
     * */
    //更新視窗高度
    updateHeight: function () {
      const self = this;
      self.$nextTick(() => {
        setTimeout(() => {
          if (document.getElementById("app").scrollHeight > 900) {
            var windowHeight = document.body.scrollHeight + 1;
            window.parent.postMessage(
              '{"event": "changeHeight", "value": ' + windowHeight + "}",
              "*"
            );
          }
        }, 1000);
      });
    },
  },
};
</script>
<style scoped lang="scss">
.row-border {
  height: var(--test);
  border-bottom: 1px solid #d8d8d8;
  position: relative;
  &:hover {
    -webkit-box-shadow: 4px 4px 8px #5a5a5a;
    box-shadow: 4px 4px 8px #5a5a5a;
    background-color: #fff;
    color: #000 !important;
    border-left: 5px solid red;
    transition: 400ms;
    .process-state {
      font-weight: bold;
    }
  }
  .icon {
    color: grey;
    &:hover {
      color: black;
    }
  }
}

.txt-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>