<script>
  import I18n from "i18n-js";

  export let ectsValue;
  export let disabled = false;

  const decrement = () => {
    ectsValue = Math.max((ectsValue || 0) - 0.5, 0.5);
  }

  const increment = () => {
    ectsValue = Math.min((ectsValue || 0) + 0.5, 240);
  }

</script>

<style>

  .ects-points {
    display: flex;
    width: 100%;
    align-content: space-between;
  }

  input, span {
    height: 42px;
    width: 48px;
    border-radius: 8px;
    border: solid 1px var(--grey-8);
    font-size: 18px;
    text-align: center;
    display: block;
    margin-right: 20px;
  }

  span.control {
    color: var(--purple-8);
    cursor: pointer;
    line-height: 40px;
  }

  input.value {
    width: 52px;
  }

  p.info {
    font-size: 14px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Disabled */

  div[disabled="true"] {
    cursor: not-allowed !important;
  }
  div[disabled="true"] input{
    background-color: var(--grey-2);
  }
  
  div[disabled="true"] span{
    background-color: var(--grey-2);
  }


</style>

<div class="ects-points" {disabled}>
  <span class="control" on:click={decrement}>-</span>
  <input type="number" max="240" min="0" oninput="validity.valid||(value='');" class="value" bind:value={ectsValue}/>
  <span class="control" on:click={increment}>+</span>
  <p class="info">{@html I18n.t("models.badgeclass.info.ects")}</p>

</div>