<template>
    <div id="app">
        <zb-button type="info" @click="show = true">打开弹框</zb-button>

        <zb-dialog title="温馨提示" :visible.sync="show" appendToBody>
            <template v-slot:title> 自定义标题 </template>
            <template> 内容 </template>
            <template v-slot:footer>
                <zb-button type="primary" plain>主要</zb-button>
                <zb-button type="success" plain>成功</zb-button>
            </template>
        </zb-dialog>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            show: false,
        };
    },
    methods: {},
};
</script>

<style lang="scss"></style>
