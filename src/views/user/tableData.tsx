import { FormProps, BasicColumn } from '@/components/Table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '用户ID',
      dataIndex: 'userId',
      fixed: 'left',
      width: 200,
      defaultHidden: true,
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      width: 150,
    },
    {
      title: '用户真实名称',
      dataIndex: 'realName',
    },
    {
      title: '用户手机号',
      dataIndex: 'userPhone',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '备注',
      width: 150,
      sorter: true,
      dataIndex: 'remark',
    },
    {
      title: '创建时间',
      width: 150,
      sorter: true,
      dataIndex: 'createTime',
    },
  ];
}

export function getBasicShortColumns(): BasicColumn[] {
  return [
    {
      title: '用户ID',
      dataIndex: 'userId',
      fixed: 'left',
      width: 200,
      defaultHidden: true,
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      width: 150,
    },
    {
      title: '用户真实名称',
      dataIndex: 'realName',
    },
    {
      title: '用户手机号',
      dataIndex: 'userPhone',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'userName',
        label: '用户名称',
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
    ],
  };
}
