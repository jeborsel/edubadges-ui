<script>
  import { navigate } from "svelte-routing";
  import { EntityForm } from "../teachers";
  import { Field, Select, File, TextInput } from "../forms";
  import { createBadgeclass, editBadgeclass } from "../../api";

  export let entityId;
  export let badgeclass = {};
  export let issuers = [];

  const entity = "badgeclass";
  let errors = {};
  let isCreate = !entityId;

  function onSubmit() {
    errors = {};

    let newBadgeclass = badgeclass;
    if (badgeclass.issuer) newBadgeclass.issuer = badgeclass.issuer.entityId;

    const args = isCreate ? [newBadgeclass] : [entityId, newBadgeclass];
    const apiCall = isCreate ? createBadgeclass : editBadgeclass;

    apiCall(...args)
      .then(res => {
        console.log("success");
        // navigate(`/manage/badgeclass/${res.entityId}`);
      })
      .catch(err => err.then(res => (errors = res)));
  }
</script>

<EntityForm {entity} submit={onSubmit} create={isCreate}>
  {#if isCreate}
    <Field {entity} attribute="issuer" errors={errors.issuer}>
      <Select
        bind:value={badgeclass.issuer}
        error={errors.issuer}
        items={issuers} />
    </Field>
  {/if}

  <Field {entity} attribute="image" errors={errors.image}>
    <File bind:value={badgeclass.image} error={errors.image} />
  </Field>

  <Field {entity} attribute="name" errors={errors.name}>
    <TextInput bind:value={badgeclass.name} error={errors.name} />
  </Field>

  <Field {entity} attribute="description" errors={errors.description}>
    <TextInput
      bind:value={badgeclass.description}
      error={errors.description}
      area />
  </Field>

  <Field {entity} attribute="criteria_text" errors={errors.criteria_text}>
    <TextInput
      bind:value={badgeclass.criteria_text}
      error={errors.criteria_text} />
  </Field>

  <Field {entity} attribute="criteria_url" errors={errors.criteria_url}>
    <TextInput
      bind:value={badgeclass.criteria_url}
      error={errors.criteria_url} />
  </Field>
</EntityForm>