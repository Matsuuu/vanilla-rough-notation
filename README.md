# Vanilla Rough Notation

[![npm version](https://badge.fury.io/js/vanilla-rough-notation.svg)](https://badge.fury.io/js/vanilla-rough-notation)

A Vanilla Web Component port of the popular [Rough Notation](https://github.com/pshihn/rough-notation) libary.

[CodeSandbox](https://codesandbox.io/embed/dark-tdd-nkvbl?fontsize=14&hidenavigation=1&theme=dark)

[Demo page, if CodeSandbox is not working](https://matsuuu.github.io/vanilla-rough-notation/)

For more documentation about animation types and more, visit the [official repo](https://github.com/pshihn/rough-notation)

### Usage

```js
import 'vanilla-rough-notation';
```

```html
<rough-notation showOnLoad type="highlight" color="#FF6d00">
    <h2>WC Rough Notation</h2>
</rough-notation>
```

##### Groups

```html
<rough-notation-group id="group-to-show">
    <rough-notation type="highlight" color="lightyellow" order="3">
        <h2>Rough notation group</h2>
    </rough-notation>

    <rough-notation type="underline" color="green" order="1">
        <p>By wrapping multiple rough notation elements into a group,</p>
    </rough-notation>

    <rough-notation order="2">
        <p>you can show them in animating in order</p>
    </rough-notation>
</rough-notation-group>
```

## rough-notation

### Properties

| Property            | Attribute           | Type                           | Default        |
| ------------------- | ------------------- | ------------------------------ | -------------- |
| `animationDelay`    | `animationDelay`    | `number`                       | 0              |
| `animationDuration` | `animationDuration` | `number`                       | 800            |
| `annotation`        | `annotation`        | `RoughAnnotation \| undefined` |                |
| `color`             | `color`             | `string`                       | "currentColor" |
| `noAnimation`       | `noAnimation`       | `boolean`                      | false          |
| `order`             | `order`             | `number`                       | 0              |
| `padding`           | `padding`           | `number`                       | 5              |
| `showOnLoad`        | `showOnLoad`        | `boolean`                      | false          |
| `strokeWidth`       | `strokeWidth`       | `number`                       | 1              |
| `type`              | `type`              | `RoughAnnotationType`          | "underline"    |
| `multiline`         | `multiline`         | `boolean`                      | true           |
| `brackets`          | `brackets`          | `String | Array<String>`       | "right"        |
| `iterations`        | `iterations`        | `number`                       | 2              |

### Methods

| Method      | Type          |
| ----------- | ------------- |
| `hide`      | `(): void`    |
| `isShowing` | `(): boolean` |
| `remove`    | `(): void`    |
| `show`      | `(): void`    |

## rough-notation-group

### Properties

| Property             | Attribute            | Type                | Default |
| -------------------- | -------------------- | ------------------- | ------- |
| `annotationElements` | `annotationElements` | `WcRoughNotation[]` | []      |
| `showOnLoad`         | `showOnLoad`         | `boolean`           | false   |

### Methods

| Method | Type       |
| ------ | ---------- |
| `show` | `(): void` |
