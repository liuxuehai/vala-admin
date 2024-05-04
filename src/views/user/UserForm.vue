<template>
  <PageWrapper title="用户" contentBackground contentClass="p-4">
    <BasicForm @register="register" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicForm, useForm } from '@/components/Form';
  import { schemas } from './formData';
  import { useMessage } from '@/hooks/web/useMessage';
  import { PageWrapper } from '@/components/Page';

  defineOptions({ name: 'UserFormPage' });

  const { createMessage } = useMessage();
  const [register, { validate, setProps }] = useForm({
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 15,
    },
    schemas: schemas,
    actionColOptions: {
      offset: 8,
      span: 23,
    },
    submitButtonOptions: {
      text: '保存',
    },
    submitFunc: customSubmitFunc,
  });

  async function customSubmitFunc() {
    try {
      await validate();
      setProps({
        submitButtonOptions: {
          loading: true,
        },
      });
      setTimeout(() => {
        setProps({
          submitButtonOptions: {
            loading: false,
          },
        });
        createMessage.success('提交成功！');
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>
