const model = {
  data() {
    return {
      property: 'value'
    }
  }
};
const containers = document.querySelectorAll('.app');
containers.forEach(c => Vue.createApp(model).mount(c));