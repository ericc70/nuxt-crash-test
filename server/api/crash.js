export default defineEventHandler(async (event) => {
    // const { age } = useQuery(event);
    // const { mail } = await useBodi(event);

    // call api
    const { data } = await $fetch('https://fakerapi.it/api/v1/persons?_locale=fr_FR');

    return data;
});