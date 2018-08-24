import React from 'react';

const toArray = obj => (Array.isArray(obj) ? obj : [obj]);

const defaultMapContextToProps = (...props) =>
  props.reduce((acc, obj, index) => {
    let innerKeys = Object.keys(obj).reduce((innerObj, key) => {
      innerObj[key] = obj[key];
      return innerObj;
    }, {});
    return { ...acc, ...innerKeys };
  }, {});

export const connectStore = Store => Child => props => (
  <Store>
    <Child {...props} />
  </Store>
);

export const subscribe = (...args) => {
  return Wrapped =>
    function SubscribeWrap(props) {
      let contextRefs = [];
      let mapContextToProps = defaultMapContextToProps;
      if (args.length === 1) {
        contextRefs = toArray(args[0]);
      } else if (args.length === 2) {
        contextRefs = toArray(args[0]);
        mapContextToProps = args[1];
      }
      if (typeof mapContextToProps !== 'function') {
        // 'theme' or ['theme', 'user', 'language']
        const values = mapContextToProps;
        mapContextToProps = (...args) =>
          toArray(values).reduce(
            (acc, key, index) => ({ ...acc, [key]: args[index] }),
            {}
          );
      }

      return contextRefs.reduceRight(
        (inner, ctx) => (...args) => (
          <ctx.Consumer>{value => inner(...args, value)}</ctx.Consumer>
        ),
        (...values) => {
          let context = mapContextToProps(...values);
          context = typeof context === 'object' ? context : { context };
          return <Wrapped {...props} {...context} />;
        }
      )();
    };
};
