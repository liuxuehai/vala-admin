<template>
  <div class="p-4 flex flex-col">
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <template #toolbar>
        <a-button type="primary" @click="addModel">新增</a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, ColumnChangeParam, useTable } from '@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';

  import { userPageQuery } from '@/api/sys/user';
  import { useGo } from '@/hooks/web/usePage';

  const go = useGo();

  function onChange() {
    console.log('onChange', arguments);
  }
  const [registerTable] = useTable({
    canResize: true,
    title: '用户列表',
    api: userPageQuery,
    columns: getBasicColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
    rowKey: 'userId',
    showTableSetting: true,
    onChange,
    onColumnsChange: (data: ColumnChangeParam[]) => {
      console.log('ColumnsChanged', data);
    },
    showSelectionBar: false, // 显示多选状态栏
  });

  function addModel() {
    go('/user/info?model=add');
  }
</script>
