<script lang="ts" setup>
  import { reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';

  const state = reactive({ count: 0 });

  const increment = () => {
    state.count += 1;
  };
</script>

<template>
  <PageWrapper title="用户管理">
    <button @click="increment">{{ state.count }}</button>
    s
  </PageWrapper>
</template>
