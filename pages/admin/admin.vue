<template>
    <view>
        <text>hello</text>
        <button @tap="test">打开相机</button>
    </view>
</template>

<script>
	export default {
	    data: {
	        src: ''
	    },
	    methods: {
	        test: function () {
	            uni.createCameraContext()
	        }
	    }
	}
</script>

<style>

</style>
