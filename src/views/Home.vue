<template>
  <div>
    <h1>Home</h1>
    <p>{{ userStore.userData?.email }}</p>

    <add-form></add-form>

    <p v-if="databaseStore.loadingDoc">loading docs...</p>
    <a-space
      direction="vertical"
      style="width: 100%"
      v-if="!databaseStore.loadingDoc"
    >
      <a-card
        v-for="item of databaseStore.documents"
        :key="item.id"
        :title="item.short"
      >
        <template #extra>
          <a-space>
            <a-popconfirm
              title="Are you sure delete this task?"
              ok-text="Si"
              cancel-text="No"
              @confirm="confirm(item.id)"
              @cancel="cancel"
            >
              <a-button
                danger
                :disabled="databaseStore.loading"
                :loading="databaseStore.loading"
              >
                Eliminar</a-button
              >
              <a-button
                type="primary"
                @click="router.push(`/editar/${item.id}`)"
                >Editar</a-button
              >
            </a-popconfirm>
          </a-space>
        </template>
        <p>Url Extensa</p>
      </a-card>
    </a-space>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { useDatabaseStore } from "../stores/database";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";

const userStore = useUserStore();
const databaseStore = useDatabaseStore();
const router = useRouter();

databaseStore.getUrls();

const confirm = async (id) => {
  const error = await databaseStore.deleteUrl(id);
  if (!error) return message.success("Se elimino con exito");

  return message.error(error);
};

const cancel = () => {
  message.error("No se elimino");
};
</script>
