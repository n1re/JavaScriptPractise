(function () {
  class Templator {
    constructor(template) {
      this._template = template;
    }

    replace(key, value, string) {
      const regExp = new RegExp(`{{[ \t]*${key}[ \t]*}}`);
      return string.replace(regExp, value);
    }

    compile(ctx) {
      let compiling = this._template;

      for (const key in ctx) {
        const value = ctx[key];

        if (typeof value === 'string' || typeof value === 'number') {
          compiling = this.replace(key, value, compiling);
        } else if (typeof value === 'object' && value !== null) {
          for (const _key in value) {
            compiling = this.replace(`${key}.${_key}`, value[_key], compiling);
          }
        } else if (typeof value === 'function') {
          window[key] = value;
          compiling = this.replace(key, `window.${key}()`, compiling);
        }
      }

      return compiling;
    }
  }

  window.Templator = Templator;
})();