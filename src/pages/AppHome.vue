<script setup lang="ts">
import { readonly, ref, watch } from 'vue';

const useFizBazz = () => {
  const count = ref(0);
  const fizBazzList = ref<Array<{ count: number; str: string }>>([]);

  const countUp = () => {
    ++count.value;
  };
  watch(count, (newVal) => {
    if (newVal % 15 === 0) {
      fizBazzList.value.push({ count: newVal, str: 'fizBazz' });
    } else if (newVal % 3 === 0) {
      fizBazzList.value.push({ count: newVal, str: 'fiz' });
    } else if (newVal % 5 === 0) {
      fizBazzList.value.push({ count: newVal, str: 'bazz' });
    }
  });

  return { count: readonly(count), countUp, fizBazzList: readonly(fizBazzList) };
};

const { count, countUp, fizBazzList } = useFizBazz();
</script>
<template>
  <div>
    <h1>home</h1>
    <v-btn text="カレンダー" @click="$router.push({ name: 'calendar' })"> </v-btn>
  </div>
  <v-spacer> </v-spacer>
  <!-- fizBazz -->
  <div>
    <v-btn text="countUp" @click="countUp" data-testid="fizbazz_countup_btn"></v-btn>
    <span data-testid="fizbazz_counter">{{ count }}</span>
    <v-card>
      <v-list data-testid="fizbazz_item_container">
        <v-list-item
          v-for="(item, i) in fizBazzList"
          :key="i"
          :value="item"
          color="primary"
          :data-testid="`fizbazz_${item.count}${item.str}`"
        >
          <v-list-item-title>{{ item.str }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<style lang="css" scoped></style>
