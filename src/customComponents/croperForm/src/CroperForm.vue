<script lang="ts" setup>
  import { ref } from 'vue';

  const info = ref('');
  const cropperImg = ref('');

  function handleCropend({ imgBase64, imgInfo }) {
    info.value = imgInfo;
    cropperImg.value = imgBase64;
  }
</script>

<template>
  <CropperImage ref="refCropper" :src="cropperImg" @cropend="handleCropend" style="width: 40vw" />
</template>
