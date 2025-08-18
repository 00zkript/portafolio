<script setup>
    import translations from '../../data/contactame.json';
    import { computed, ref } from 'vue';
    import { useStore } from '@nanostores/vue';
    import { languageStore } from '../../stores/languageStore';

    const store = useStore(languageStore);

    const content = computed(() => {
        const lang = store.value.language;
        return translations[lang] || translations['esp'];
    });

    const first_name = ref(null);
    const last_name = ref(null);
    const email = ref(null);
    const message = ref(null);
    const statusSuccess = ref(false);
    const statusError = ref(false);

    

    const submit = e => {
        e.preventDefault();

        const data = {
            service_id: 'service_64efwrs',
            template_id: 'template_xiexy6a',
            user_id: 'JR8p3crX8b-ijKd9k',
            template_params: {
                nombres: first_name.value,
                apellidos: last_name.value,
                correo: email.value,
                mensaje: message.value,
            }
        };

        
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {

                statusSuccess.value = true;
                setTimeout(() => {
                    statusSuccess.value = false;
                }, 1000 * 5);

                first_name.value = null;
                last_name.value = null;
                email.value = null;
                message.value = null;

            } else {
                return response.json().then(error => {
                    throw new Error('Oops... ' + JSON.stringify(error));
                });
            }
        })
        .catch(error => {
            statusError.value = true;
            setTimeout(() => {
                statusError.value = false;
            }, 1000 * 5);
        });

    }


</script>

<template>
  <section class="py-16 px-6 md:px-12 lg:px-24 relative z-10">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4">{{ content.title }}</h2>
      <p class="text-lg text-gray-300">{{ content.sub_title }}</p>
    </div>
    <div class="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8">
      <form @submit="submit" method="POST">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold text-gray-300">{{ content.form.first_name }}</label>
            <input
              :placeholder="content.form.first_name"
              v-model="first_name"
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              class="mt-2 block w-full rounded-md bg-white/20 backdrop-blur-md border-0 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold text-gray-300">{{ content.form.last_name }}</label>
            <input
              :placeholder="content.form.last_name"
              v-model="last_name"
              type="text"
              name="last-name"
              id="last-name"
              autocomplete="family-name"
              class="mt-2 block w-full rounded-md bg-white/20 backdrop-blur-md border-0 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-semibold text-gray-300">{{ content.form.email }}</label>
            <input
              :placeholder="content.form.email"
              v-model="email"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="mt-2 block w-full rounded-md bg-white/20 backdrop-blur-md border-0 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-semibold text-gray-300">{{ content.form.message }}</label>
            <textarea
              :placeholder="content.form.message"
              v-model="message"
              name="message"
              id="message"
              rows="4"
              class="mt-2 block w-full rounded-md bg-white/20 backdrop-blur-md border-0 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
        </div>
        <div class="mt-6">
          <div
            v-if="statusSuccess"
            class="bg-green-500/20 backdrop-blur-md p-4 text-green-300 rounded-md flex justify-between items-center"
          >
            <div>{{ content.form.message_success }}</div>
            <button
              type="button"
              @click="statusSuccess = false"
              class="text-green-300 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div
            v-if="statusError"
            class="bg-red-500/20 backdrop-blur-md p-4 text-red-300 rounded-md flex justify-between items-center"
          >
            <div>{{ content.form.message_error }}</div>
            <button
              type="button"
              @click="statusError = false"
              class="text-red-300 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
        <div class="mt-8">
          <button
            type="submit"
            class="block w-full rounded-md bg-indigo-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-500"
          >
            {{ content.form.send }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>