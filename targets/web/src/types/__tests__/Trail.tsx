import React from 'react';
import { assert, test, _ } from 'spec.ts';
import { animated, Trail, SpringValue } from '../..';

const View = animated('div');

declare const items: [1, 2];

test('basic usage', () => (
  <Trail items={items} from={{ opacity: 0 }} to={{ opacity: 1, color: 'blue' }}>
    {item => props => {
      assert(item, _ as 1 | 2);
      assert(props, _ as {
        [key: string]: SpringValue<any>;
        // FIXME: should include "opacity" and "color"
      });
      return <View style={props}>{item}</View>;
    }}
  </Trail>
));
