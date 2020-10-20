(function () {

  class Tooltip {
    constructor() {
        this.el = document.createElement('div');
        this.el.style.position = 'absolute';

        this.el.classList.add(this.name);
        document.body.appendChild(this.el);

        this.onHide = this.onHide.bind(this);
        this.onShow = this.onShow.bind(this);
      
        this.listeners = [];
      }

      get name() {
          return 'tooltip';
      }
    
      get activeCls() {
        return 'tooltip_active';
      }

      get indent() {
          return 5;
      }

      delegate(eventName, element, cssSelector, callback) {
          const fn = event => {
              if (!event.target.matches(cssSelector)) {
                  return;
              }

              callback(event);
          };

          element.addEventListener(eventName, fn);
          this.listeners.push({ fn, element, eventName });

          return this;
      }

      onShow(event) {
        const target = event.target;
        const text = target.dataset.tooltip;
        const { top, bottom, left, height } = target.getBoundingClientRect();
        this.el.style.left = `${left}px`;
        const toolTipHeight = 16 + 2 + 10;
        if (top < toolTipHeight) {
          this.el.style.top = `${bottom}px`;
        } else {
          this.el.style.top = `${top - toolTipHeight}px`;
        }
        this.el.textContent = text;
        this.el.classList.add(this.activeCls);
        //Реализуйте этот метод
      }

      onHide() {
        this.el.classList.remove(this.activeCls);
        //Реализуйте этот метод
      }

      attach(root) {
          this
              .delegate('mouseover', root, '[data-tooltip]', this.onShow)
              .delegate('mouseout', root, '[data-tooltip]', this.onHide);
      }

      detach() {
        this.listeners.forEach(listner => {
          const { element, eventName, fn } = listner;
          element.removeEventListener(eventName, fn);
        });
        this.listeners = [];
        //Реализуйте этот метод
      }
  }

  window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);