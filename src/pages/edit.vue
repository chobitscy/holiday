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
        <el-button class="generate" type="primary" @click="result()" :disabled="disabled">生成</el-button>
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
    export default {
        name: "edit",
        data() {
            return {
                values: {
                    applicant: null,
                    cla: null,
                    reason: null,
                    counselor: null,
                    commitment: null
                },
                checked: false,
                dialogVisible: false
            }
        },
        created(){
            const data = localStorage.getItem('values');
            if (data !== null) this.values = JSON.parse(data);
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
                this.$router.push('/result')
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
        margin-top: 5px !important;
    }

</style>