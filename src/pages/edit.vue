<template>
    <div class="edit-container">
        <el-input placeholder="申请人" v-model="values.applicant"/>
        <el-input placeholder="班级" v-model="values.cla"/>
        <el-input placeholder="理由" v-model="values.reason"/>
        <el-input placeholder="辅导员" v-model="values.counselor"/>
        <el-input placeholder="承诺书" v-model="values.commitment"/>
        <div style="display:flex;justify-content: center">
            <el-checkbox v-model="checked">
                <div @click="dialogVisible = true">同意《个人安全协议》</div>
            </el-checkbox>
        </div>
        <el-button type="primary" @click="result()" :disabled="disabled">生成</el-button>
        <el-button type="warning" @click="update" :disabled="updateDisabled">提交</el-button>
        <el-button type="success">清除缓存</el-button>
        <el-dialog title="个人安全协议" :visible.sync="dialogVisible" width="90%" center>
            <ul>
                <li>本网站提供的服务仅用于个人学习、研究。</li>
                <li>通过使用本站服务随之而来的风险与本站无关。</li>
                <li>请确保个人安全</li>
            </ul>
        </el-dialog>
    </div>
</template>

<script>
    import FingerprintJS from '@fingerprintjs/fingerprintjs'
    import {check, insert} from "../utils/api";

    export default {
        name: "edit",
        data() {
            return {
                values: {
                    applicant: null,
                    cla: null,
                    reason: null,
                    counselor: null,
                    commitment: null,
                    visitorId: null
                },
                checked: false,
                updateDisabled: false,
                dialogVisible: false
            }
        },
        created() {
            FingerprintJS.load().then(fp => {
                fp.get().then(result => {
                    this.values.visitorId = result.visitorId;
                });
            });
            const data = localStorage.getItem('values');
            if (data !== null) this.values = JSON.parse(data);
            const date = new Date().toLocaleDateString();
            if (date !== '2021/3/13') {
                this.updateDisabled = true
            }
        },
        computed: {
            disabled() {
                if (localStorage.getItem('values') !== null) return !this.checked;
                if (!Object.values(this.values).every(v => !!v)) return true;
                else return !this.checked;
            }
        },
        methods: {
            result() {
                if (localStorage.getItem('values') === null) localStorage.setItem('values', JSON.stringify(this.values));
                check({
                    'name': this.values.applicant,
                    'visitorId': this.values.visitorId
                }).then(res => {
                    if (res === 1) this.$router.push('/result');
                    else this.$message.error('账户验证失败');
                });
            },
            update() {
                insert({
                    'name': this.values.applicant,
                    'visitorId': this.values.visitorId
                }).then(res => {
                    if (res === 1) this.$message.success('提交成功！');
                    else this.$message.error('提交失败！');
                })
            }
        }
    }
</script>

<style scoped>

    .edit-container {
        margin: 10px;
    }

    .edit-container .el-input {
        margin: 5px 0 !important;
    }

    .el-button {
        width: 100% !important;
        margin: 5px 0 !important;
    }

</style>