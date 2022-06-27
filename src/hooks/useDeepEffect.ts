import { isEqual } from 'lodash';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line
import type { DependencyList, EffectCallback } from 'react';

const depsEqual = (a: DependencyList, b: DependencyList = []) => {
  return isEqual(a, b);
};

const useDeepEffect = (effect: EffectCallback, deps: DependencyList) => {
  const ref = useRef<DependencyList>();
  const singleRef = useRef<number>(0);

  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    singleRef.current += 1;
  }

  useEffect(effect, [singleRef.current]);
};

export default useDeepEffect;
