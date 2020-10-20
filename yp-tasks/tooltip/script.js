(function () {

  class Tooltip {
    constructor() {
        this.el = document.createElement('div');
        this.el.style.position = 'absolute';

        this.el.classList.add(this.name);
        document.body.appendChild(this.el);
      
        this.listeners = [];
      }

      get name() {
          return 'tooltip';
      }
    
      get activeCls() {
        return `${this.name}_active`;
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

      onShow = (event) => {
        /**
         * @todo use position: fixed
         */
        const targetEl = event.target;

        this.el.textContent = targetEl.dataset.tooltip;
        this.el.classList.add(this.activeCls);

        const targetRect = targetEl.getBoundingClientRect();
        const thisRect = this.el.getBoundingClientRect();

        let top = targetRect.bottom + this.indent;
        const left = targetRect.left;

        if (top + thisRect.height > document.documentElement.clientHeight) {
          top = targetRect.top - thisRect.height - this.indent;
        }

        this.el.style.top = `${top + window.scrollY}px`;
        this.el.style.left = `${left + window.scrollX}px`;
      }

      onHide = () => {
        this.el.classList.remove(this.activeCls);
        //Реализуйте этот метод
      }

      attach(root) {
          /**
           * @todo use mouseenter and mouseleave
           */
          this
              .delegate('mouseover', root, '[data-tooltip]', this.onShow)
              .delegate('mouseout', root, '[data-tooltip]', this.onHide);
      }

      detach() {
        for (const { element, eventName, fn } of this.listeners) {
          element.removeEventListner(eventName, fn);
        }

        this.listeners = [];
      }
  }

  window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);