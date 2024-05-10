import { FormProps, BasicColumn } from '@/components/Table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '用户ID',
      dataIndex: 'userId',
      fixed: 'left',
      width: 10,
      defaultHidden: true,
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      width: 200,
      customRender: ({ record }) => {
        return (
          <router-link to={{ path: '/user/info', query: { model: 'view', userId: record.userId } }}>
            {record.userName}
          </router-link>
          // <Button
          //   type="link"
          //   size="small"
          //   text={record.userName}
          //   onClick={() => {
          //     console.log(record.userName);
          //   }}
          //   href={`#/user/info?model=view&userId=${record.userId}`}
          // >
          //   {record.userName}
          // </Button>
        );
      },
    },
    {
      title: '用户真实名称',
      dataIndex: 'realName',
      width: 200,
    },
    {
      title: '用户手机号',
      dataIndex: 'userPhone',
      width: 100,
    },
    {
      title: '备注',
      width: 150,
      dataIndex: 'remark',
    },
    {
      title: '创建时间',
      width: 150,
      dataIndex: 'createTime',
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
