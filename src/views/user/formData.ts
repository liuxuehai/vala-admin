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
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: async (rule, value) => {
          if (!value) {
            /* eslint-disable-next-line */
            return Promise.reject('用户名称值不能为空');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
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
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: async (rule, value) => {
          if (!value) {
            /* eslint-disable-next-line */
            return Promise.reject('用户手机号值不能为空');
          }
          const pattern = /^1\d{10}$/;
          if (!pattern.test(value)) {
            return Promise.reject('用户手机号格式不正确');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'password',
    component: 'InputPassword',
    label: '用户密码',
    colProps,
    required: true,
    rules: [
      {
        required: true,
        // @ts-ignore
        validator: async (rule, value) => {
          if (!value) {
            /* eslint-disable-next-line */
            return Promise.reject('用户密码值不能为空');
          }
          return Promise.resolve();
        },
        trigger: 'change',
      },
    ],
  },
  {
    field: 'remark',
    component: 'InputTextArea',
    label: '备注',
    colProps,
    required: false,
  },
];

export const shortSchemas: FormSchema[] = [
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
