<script setup>
import { reactive } from "vue";
import { useDatabaseStore } from "../stores/database";
import { message } from "ant-design-vue";

const databaseStore = useDatabaseStore();

const formState = reactive({
  url: "",
});

const onFinish = async (value) => {
  console.log("todo bien" + value);
  const error = await databaseStore.addUrl(formState.url);
  if (!error) {
    formState = "";
    return message.success("URL Agregada");
  }

  switch (error) {
    default:
      message.error(
        "Ocurrió un error en el servidor 💋 intentelo más tarde..."
      );
      break;
  }
};
</script>

<template>
  <a-form
    name="addForm"
    autocomplete="off"
    :model="formState"
    layour="vertical"
    @finish="onFinish"
  >
    <a-form-item
      name="url"
      label="Ingrese una Url"
      :rules="[
        {
          required: true,
          whitescape: true,
          pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
          message: 'Ingrese una Url validad',
        },
      ]"
    >
      <a-input v-model:value="formState.url"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="databaseStore.loading"
        :loading="databaseStore.loading"
      >
        Add Url
      </a-button>
    </a-form-item>
  </a-form>
</template>
