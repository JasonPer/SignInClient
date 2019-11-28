<template>
	<view>
		<text>请选择你的身份：</text>	
	<view class="choseButton">
		<button class="button" @click="admin" type="primary">管理员</button>
		<button class="button" @click="user"  type="primary">用户</button>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			admin(){
				uni.navigateTo({
					url: '../adminIndex/adminIndex'
				});
			},
			user(){
				uni.navigateTo({
					url: '../userIndex/userIndex'
				})
			}
			
		}
	}
</script>

<style>
.choseButton{
	margin-top: 100rpx;
}
.button{
		width: 500upx;
		height: 100upx;
		line-height: 150upx;
		margin-top: 100upx;
	}
</style>
