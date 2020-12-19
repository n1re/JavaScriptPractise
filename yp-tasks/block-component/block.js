class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  _element = null;
  _meta = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(this.constructor.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(this.constructor.EVENTS.INIT, this.init.bind(this));
    eventBus.on(this.constructor.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(this.constructor.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(this.constructor.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(this.constructor.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(this.constructor.EVENTS.FLOW_RENDER);
  }

	// Может переопределять пользователь, необязательно трогать
  componentDidMount(oldProps) {}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response === true) {
      this.eventBus().emit(this.constructor.EVENTS.FLOW_RENDER);
    }
  }

	// Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    for (const key of Object.keys(newProps)) {
      if (newProps[key] !== oldProps[key]) {
        return true;
      }
    }

    return false;
  }

  setProps = nextProps => {
    if (typeof nextProps === 'object' && nextProps !== null) {
      const oldProps = {...this.props};
      Object.assign(this.props, nextProps);
      this.eventBus().emit(this.constructor.EVENTS.FLOW_CDU, oldProps, this.props);
    }
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element.innerHTML = block;
  }

	// Может переопределять пользователь, необязательно трогать
  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      deleteProperty() {
        throw new Error('Нет доступа');
      }
    });
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this._element.style.display = 'block';
  }

  hide() {
    this._element.style.display = 'none';
  }
}