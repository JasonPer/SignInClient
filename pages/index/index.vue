<template>
	<view style="height: 100px;">
		<view style="margin-top: 30%;">
			<view style="display: flex;justify-content: center;"><input type="text" placeholder="请输入您的姓名" class="search" v-model="uName" /></view>
			<view style="display: flex;justify-content: center;"><input type="text" placeholder="请输入您的手机号" class="search" v-model="uMobile" /></view>
			<button class="btn" @click="handInput" type="primary">登录</button>
		</view>
	</view>
</template>

<script>
import BjxInputs from '@/components/bjx-inputs/bjx-inputs.vue';
import StudentUsualGradeService from '../../common/service/StudentUsualGradeService.js';
export default {
	data() {
		return {
			studentUsualGradeService: new StudentUsualGradeService(),
			pd: '',
			uName: '',
			uMobile: '',
			data: [],
			stuName: ''
		};
	},
	components: {
		'bjx-inputs': BjxInputs
	},
	onLoad() {
		
	},
	methods: {
		//获取作业详情列表数据
		getDetailedList() {
			this.studentUsualGradeService
				.getStudentUsualGrade(this.value)
				.then(result => {
					if (result.data) {
						this.stuName = result.data.studentName;
						this.dianji();
					}
				})
				.catch(err => {})
				.finally(() => {});
		},
		dianji() {
			if (this.value == '') {
				uni.showToast({
					title: '学号不能为空！',
					duration: 1000,
					icon: 'none'
				});
				return;
			}
			if (this.stuName == '' || this.stuName == null) {
				uni.showToast({
					title: '您输入的学号不正确！',
					duration: 1000,
					icon: 'none'
				});
				return;
			}
			// 跳转
			uni.showToast({
				title: '登录成功',
				duration: 1000,
				icon: 'success'
			});
			uni.navigateTo({
				url: '../details/details?stuCode=' + this.value
			});
		},
		handInput() {
			// console.log(',,', this.value);
			this.getDetailedList();
		}
	}
};
</script>

<style>
.btn {
	border-radius: 50%;
	width: 150upx;
	height: 150upx;
	line-height: 150upx;
	margin-top: 100upx;
}
.search {
	text-align: center;
	width: 235px;
	height: 38px;
	border-radius: 10px;
	margin-top: 36px;
	border: 1px solid #ccc;
	background-color: transparent;
	transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
</style>
