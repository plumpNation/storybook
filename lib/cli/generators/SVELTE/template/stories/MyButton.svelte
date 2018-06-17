<button on:click="onClick(event)">
  <slot></slot>
</button>

<style>
  button {
    border: 1px solid #eee;
    border-radius: 3;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 15;
    padding: 3px 10px;
    margin: 10;
  }
</style>

<script>
  export default {
    data() {
      return {};
    },

    methods: {
      onClick() {
        this.fire('click', event);
      },
    },
  };
</script>
