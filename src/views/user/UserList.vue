<template>
  <div class="p-4 flex flex-col">
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <template #toolbar>
        <a-button type="primary" @click="getSelectRowKeyList">获取</a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, ColumnChangeParam, useTable } from '@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { useMessage } from '@/hooks/web/useMessage';
  import { userPageQuery } from '@/api/sys/user';

  const { createMessage } = useMessage();
  function onChange() {
    console.log('onChange', arguments);
  }
  const [registerTable, { getSelectRowKeys }] = useTable({
    canResize: true,
    title: '用户列表',
    api: userPageQuery,
    columns: getBasicColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
    rowKey: 'userId',
    showTableSetting: true,
    onChange,
    rowSelection: {
      type: 'checkbox',
    },
    onColumnsChange: (data: ColumnChangeParam[]) => {
      console.log('ColumnsChanged', data);
    },
    showSelectionBar: false, // 显示多选状态栏
  });

  function getSelectRowKeyList() {
    createMessage.info('请在控制台查看！');
    console.log(getSelectRowKeys());
  }
</script>
