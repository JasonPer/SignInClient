<template>
	<view style="height: 100px;">
		<view style="margin-top: 30%;">
			<view style="display: flex;justify-content: center;"><input type="text" placeholder="请输入您的姓名" class="search" v-model="uName" /></view>
			<view style="display: flex;justify-content: center;"><input type="text" placeholder="请输入您的密码" class="search"
				 v-model="uMobile" /></view>
			<button class="btn" @click="handInput" type="primary">登录</button>
		</view>
	</view>
</template>

<script>
	import BjxInputs from '@/components/bjx-inputs/bjx-inputs.vue';

	export default {
		data() {
			return {
				pd: '',
				uName: '',
				uMobile: '',
				uLocation: '',	
				data: [],
			};
		},
		components: {
			'bjx-inputs': BjxInputs
		},
		onLoad() {

		},
		methods: {
			getDetailedList() {
				this.dianji();
			},
			dianji() {
				if (this.uName == '' || this.uName == null) {
					uni.showToast({
						title: '您输入的姓名不正确！',
						duration: 1000,
						icon: 'none'
					});
					return;
				}
				if (this.uMobile == '' || this.uMobile == null) {
					uni.showToast({
						title: '您输入的电话号码不正确！',
						duration: 1000,
						icon: 'none'
					});
					return;
				}
				let indentityData = this.uName + this.uMobile;
				uni.setStorage({
					key:"a1",
					data:indentityData,
					success:function(){
						console:'成功'
					}
				})
				
				// 跳转
				uni.showToast({
					title: '登录成功',
					duration: 1000,
					icon: 'success'
				});
				uni.navigateTo({
					
					url: '../admin/admin'
				});
				uni.getLocation({
				    type: 'wgs84',
				    success: function (res) {
				        console.log('当前位置的经度：' + res.longitude);
				        console.log('当前位置的纬度：' + res.latitude);
						this.uLocation = res.address.city;
				    },
					fail: (err) => {
					 		console.log(err);
					 
				 	}
				});
				uni.showToast({
				    title: this.uLocation,
				    duration: 1000
				});

			},
			handInput() {
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
