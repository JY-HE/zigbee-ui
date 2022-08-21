<template>
    <transition name="dialog-fade">
        <!-- 遮罩 -->
        <div class="cl-dialog_wrapper" v-if="visible" :style="modalStyle" @click.self="modalClick">
            <div
                :class="['cl-dialog', mimicry ? 'is-mimicry' : '']"
                :style="{ width: width, 'margin-top': top }"
            >
                <div class="cl-dialog_header">
                    <!-- title 可通过具名 slot 传入 -->
                    <slot name="title">
                        <span class="cl-dialog_title">{{ title }}</span>
                    </slot>
                    <cl-button
                        icon="cl-icon-qingchu-miaobian"
                        class="cl-dialog_header_button"
                        @click.stop="closeDialog"
                        type="text"
                        v-if="showClose"
                    ></cl-button>
                </div>
                <div class="cl-dialog_body">
                    <slot></slot>
                </div>
                <div class="cl-dialog_footer" v-if="isShowFooter">
                    <!-- footer 可通过具名 slot 传入 -->
                    <slot name="footer">
                        <cl-button @click.stop="closeDialog">取消</cl-button>
                        <cl-button type="primary" @click.stop="determine">确定</cl-button>
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ClDialog',
    props: {
        // Dialog 的标题
        title: {
            type: String,
            default: '',
        },
        // Dialog 的宽度
        width: {
            type: String,
            default: '50%',
        },
        // 距离顶部
        top: {
            type: String,
            default: '15vh',
        },
        // 是否显示 Dialog，支持 .sync 修饰符
        visible: {
            type: Boolean,
            default: false,
        },
        // 是否拟态
        mimicry: {
            type: Boolean,
            default: false,
        },
        // 是否显示底部按钮
        footer: {
            type: Boolean,
            default: true,
        },
        // Dialog 自身是否插入至 body 元素上
        appendToBody: {
            type: Boolean,
            default: false,
        },
        // 是否显示关闭按钮
        showClose: {
            type: Boolean,
            default: true,
        },
        // 是否需要遮罩层
        modal: {
            type: Boolean,
            default: true,
        },
        // 是否可以点击遮罩层关闭 Dialog
        closeOnClickModal: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        modalStyle() {
            // 不需要遮罩层的样式
            if (!this.modal) {
                return {
                    'pointer-events': 'none',
                    background: 'transparent',
                };
            }
            return '';
        },
        isShowFooter() {
            return this.footer ?? this.$slots.footer;
        },
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                // 弹框打开事件回调
                this.$emit('open');
            }
        },
    },
    mounted() {
        // 将 Dialog 自身插入至 body 元素上
        this.appendToBody && document.querySelector('body').appendChild(this.$el);
    },
    methods: {
        modalClick() {
            if (this.closeOnClickModal) {
                // 弹框关闭事件回调
                this.$emit('close');
                this.$emit('update:visible', false);
            }
        },
        closeDialog() {
            this.$emit('close');
            this.$emit('update:visible', false);
        },
        determine() {
            // 点击确定按钮事件回调
            this.$emit('determine');
            this.$emit('update:visible', false);
        },
    },
};
</script>

<style lang="scss">
.cl-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: -3vh;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);
    .cl-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;

        &_header {
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            .cl-dialog_title {
                line-height: 24px;
                font-size: 20px;
                color: #303133;
            }
            .cl-dialog_header_button {
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 20px;
                color: #303133;
            }
        }

        &_body {
            padding: 20px;
            color: #606266;
            font-size: 20px;
            word-break: break-all;
        }

        &_footer {
            padding: 10px 20px;
            text-align: right;
            box-sizing: border-box;
            .cloud-button:first-child {
                margin-right: 20px;
            }
        }
    }
    // 拟态风格
    .cl-dialog.is-mimicry {
        border-radius: 12px;
        box-shadow: inset 7px 14px 23px #dadada, inset -7px -14px 23px #eeeeee;
    }
}

// vue transition 组件自带过渡动画样式
.dialog-fade-enter-active {
    animation: fade 0.5s;
}

.dialog-fade-leave-active {
    animation: fade 0.39s reverse;
}
@keyframes fade {
    from {
        opacity: 0;
        transform: translateY(-3vh);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
