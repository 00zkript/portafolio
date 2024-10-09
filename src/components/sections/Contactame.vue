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
    <section class="section bg-white ">
        
        <div class="section-header">
            <h2 class="section-title text-black-russian-800">{{ content.title }}</h2>
            <p class="section-subtitle text-gray-600">{{ content.sub_title }}</p>
        </div>
    
        <div class="section-content">
            <form @submit="submit" method="POST" class="mx-auto mt-16 max-w-xl">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ content.form.first_name }}</label>
                        <div class="mt-2.5">
                            <input :placeholder="content.form.first_name" v-model="first_name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">{{ content.form.last_name }}</label>
                        <div class="mt-2.5">
                            <input :placeholder="content.form.last_name" v-model="last_name" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">{{ content.form.email }}</label>
                        <div class="mt-2.5">
                            <input :placeholder="content.form.email" v-model="email" type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">{{ content.form.message }}</label>
                        <div class="mt-2.5">
                            <textarea :placeholder="content.form.message" v-model="message" name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div v-if="statusSuccess" class="bg-green-200 p-3 text-green-800 rounded-md flex justify-between items-center">
                        <div>{{ content.form.message_success }} </div>
                        <button type="button" @click="statusSuccess = false" class="material-symbols--close"></button>
                    </div>
                    <div v-if="statusError" class="bg-red-200 p-3 text-red-800 rounded-md flex justify-between items-center">
                        <div>{{ content.form.message_error }} </div>
                        <button type="button" @click="statusError = false" class="material-symbols--close"></button>
                    </div>
                </div>
                <div class="mt-10">
                    <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{ content.form.send }}</button>
                </div>
            </form>
        </div>
    </section>
</template>