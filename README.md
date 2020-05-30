# Vanilla Rough Notation

A Vanilla Web Component port of the popular [Rough Notation](https://github.com/pshihn/rough-notation) libary.

[CodeSandbox](https://codesandbox.io/embed/dark-tdd-nkvbl?fontsize=14&hidenavigation=1&theme=dark)

### Usage

```html
<vanilla-rough-notation showOnLoad type="highlight" color="#FF6d00">
    <h2>WC Rough Notation</h2>
</vanilla-rough-notation>
```

##### Groups

```html
<vanilla-rough-notation-group id="group-to-show">
    <vanilla-rough-notation type="highlight" color="lightyellow" order="3">
        <h2>Rough notation group</h2>
    </vanilla-rough-notation>

    <vanilla-rough-notation type="underline" color="green" order="1">
        <p>By wrapping multiple rough notation elements into a group,</p>
    </vanilla-rough-notation>

    <vanilla-rough-notation order="2">
        <p>you can show them in animating in order</p>
    </vanilla-rough-notation>
</vanilla-rough-notation-group>
```

## vanilla-rough-notation

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

### Methods

| Method      | Type          |
| ----------- | ------------- |
| `hide`      | `(): void`    |
| `isShowing` | `(): boolean` |
| `remove`    | `(): void`    |
| `show`      | `(): void`    |

## vanilla-rough-notation-group

### Properties

| Property             | Attribute            | Type                | Default |
| -------------------- | -------------------- | ------------------- | ------- |
| `annotationElements` | `annotationElements` | `WcRoughNotation[]` | []      |
| `showOnLoad`         | `showOnLoad`         | `boolean`           | false   |

### Methods

| Method | Type       |
| ------ | ---------- |
| `show` | `(): void` |
