import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grommet, Box, Chart } from 'grommet';
import { grommet } from 'grommet/themes';

var Example = function Example() {
  return React.createElement(Grommet, {
    theme: grommet
  }, React.createElement(Box, {
    align: "center",
    pad: "large",
    gap: "large"
  }, React.createElement(Chart, {
    type: "line",
    dash: true,
    values: [20, 30, 15]
  }), React.createElement(Chart, {
    type: "line",
    dash: true,
    round: true,
    values: [20, 30, 15]
  }), React.createElement(Chart, {
    type: "line",
    dash: true,
    thickness: "xsmall",
    values: [20, 30, 15]
  }), React.createElement(Chart, {
    type: "line",
    dash: true,
    round: true,
    thickness: "xsmall",
    values: [20, 30, 15]
  }), React.createElement(Chart, {
    type: "bar",
    dash: true,
    values: [[10, 20], [20, 30], [30, 15]]
  })));
};

storiesOf('Chart', module).add('Dash', function () {
  return React.createElement(Example, null);
});