<template>
    <div id="app">
        <!-- <cl-button type="info" @click="show = true">信息按钮</cl-button> -->

        <cl-dialog title="温馨提示" :visible.sync="show" appendToBody>
            <template v-slot:title> 自定义标题 </template>
            <template> 内容 </template>
            <template v-slot:footer>
                <cl-button type="primary" plain>主要</cl-button>
                <cl-button type="success" plain>成功</cl-button>
            </template>
        </cl-dialog>
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
