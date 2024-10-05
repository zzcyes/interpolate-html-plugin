# Interpolate HTML Plugin

A webpack plugin that allows you to interpolate custom variables into `index.html`. This plugin is compatible with the latest versions of HtmlWebpackPlugin, supporting both `getCompilationHooks` and `getHooks` methods.

## Installation

```bash
npm install interpolate-html-plugin --save-dev
```

## Usage

In your webpack configuration:

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
    plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
            }),
            new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
                'MY_VARIABLE': 'my value',
                'ANOTHER_VARIABLE': 42,
                // Add more variables as needed
            }),
        ],
};
```

Then, in your `index.html`:


```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><%= APP_TITLE %></title>
    <meta name="description" content="<%= APP_DESCRIPTION %>" />
  </head>
  <body>
    <h1><%= APP_TITLE %></h1>   
  </body>
</html>
```
