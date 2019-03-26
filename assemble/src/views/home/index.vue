<template>
  <div>
    <mt-header title="拼团">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--  -->
    <mt-button type="primary" @click="goToPersonal">去我的</mt-button>
    <mt-button type="primary" @click="getList">获取数据</mt-button>

  </div>
</template>
<script>
    import url from '../../bin/url';
    export default {
        name: 'home',
        data() {
            return {};
        },
        created() {
            this.getCode();
        },
        methods: {
            //   去个人中心
            goToPersonal(id) {
                this.$router.push({
                    name: 'personal',
                    params: {
                        obj: JSON.stringify({
                            type: 'profession',
                            data: {
                                id: '我就是参数'
                            }
                        })
                    }
                });
            },
            // 获取接口
            getList() {
                const _param = `?_=${new Date().getTime()}`;
                const a = '/' + '1';
                console.log(_param);
                const _obj = {
                    buttonType: '2'
                };
                this.$fetch.post(url.wei + a, _obj).then(data => {
                    console.log(data);
                    if (data) {
                        this.total = data.Total || 0;
                        this.searchData = data;
                    }
                });
            },
            // 获取微信
            getCode() { // 非静默授权，第一次有弹框
                const code = ""; // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
                const local = window.location.href;
                if (code == null || code === '') {
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${window.APPID}&redirect_uri=${encodeURIComponent(local)}&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect`;
                } else {
                    this.getOpenId(code); // 把code传给后台获取用户信息
                }
            },
            getOpenId(code) { // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
                const _this = this;
                this.$http.post('/api/user/wechat/login', {
                    code
                }).then(res => {
                    const datas = res.data;
                    if (datas.code === 0) {
                        console.log('成功');
                    }
                }).catch(error => {
                    console.log(error);
                });
            }

        },
        mounted() {
            console.log(url);
            console.log(this.$fetch);
        }
    };
</script>
<style scoped>
</style>