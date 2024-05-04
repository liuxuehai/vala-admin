import { FormSchema } from '@/components/Form';

const colProps = {
  span: 8,
};

export const schemas: FormSchema[] = [
  {
    field: 'userName',
    component: 'Input',
    label: '用户名',
    colProps,
    componentProps: {
      placeholder: '用户名',
    },
    required: true,
  },
  {
    field: 'realName',
    component: 'Input',
    label: '用户真实名称',
    colProps,
    componentProps: {
      placeholder: '用户真实名称',
    },
    required: true,
  },
  {
    field: 'userPhone',
    component: 'Input',
    label: '用户手机号',
    colProps,
    componentProps: {
      placeholder: '用户手机号',
    },
    required: true,
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '备注',
    colProps,
    required: false,
  },
];
