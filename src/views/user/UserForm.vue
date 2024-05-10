<template>
  <PageWrapper title="用户" contentBackground contentClass="p-4">
    <BasicForm @register="register" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicForm, useForm } from '@/components/Form';
  import { schemas, shortSchemas } from './formData';
  import { useMessage } from '@/hooks/web/useMessage';
  import { PageWrapper } from '@/components/Page';
  import { useRouter } from 'vue-router';
  import { unref, onMounted, ref, computed } from 'vue';
  import { getUserInfoV2, saveOrUpdate } from '@/api/sys/user';
  import { UserInfoModel } from '@/api/sys/model/userModel';
  // import { useGo } from '@/hooks/web/usePage';

  defineOptions({ name: 'UserFormPage' });

  const { currentRoute, replace, go } = useRouter();
  const model = unref(currentRoute).query.model;
  const userId = unref(currentRoute).query.userId;

  // const go = useGo();

  const isDisabled = computed(() => {
    let ret = true;

    if (model && model != 'view') {
      ret = false;
    }
    return ret;
  });

  const buttonText = computed(() => {
    let ret = '返回';
    if (!isDisabled.value) {
      ret = '保存';
    }
    return ret;
  });

  const { createMessage } = useMessage();
  var data = ref({});

  const [register, { validate, setProps, getFieldsValue }] = useForm({
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 15,
    },
    model: data,
    disabled: isDisabled.value,
    schemas: isDisabled.value ? shortSchemas : schemas,
    actionColOptions: {
      offset: 8,
      span: 23,
    },
    submitButtonOptions: {
      text: buttonText.value,
    },
    submitFunc: customSubmitFunc,
  });

  onMounted(async () => {
    data.value = await doUserInfo(userId);
    //setFieldsValue(data);
  });

  async function doUserInfo(userId: any): Promise<UserInfoModel | {}> {
    if (!userId) {
      return {};
    }
    const data = await getUserInfoV2(userId);
    return data;
  }

  async function customSubmitFunc() {
    if (buttonText.value == '保存') {
      save();
    } else {
      go(-1);
    }
  }
  async function save() {
    try {
      await validate();
      setProps({
        submitButtonOptions: {
          loading: true,
        },
      });
      const info = getFieldsValue();
      console.log(info);
      const data = await saveOrUpdate(info);
      createMessage.info('保存成功');
      // replace(`#/user/info?model=view&userId=${info.userId}`);
      replace({ path: '/user/info', query: { model: 'view', userId: data.userId } });
      // go('/user/info?model=view&userId=' + '1783487224998809602', true);
    } catch (error) {
      console.error(error);
    } finally {
      setProps({
        submitButtonOptions: {
          loading: false,
        },
      });
    }
  }
</script>
<style lang="less" scoped>
  .form-wrap {
    padding: 24px;
    background-color: @component-background;
  }
</style>
