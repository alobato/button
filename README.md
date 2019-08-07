# Button

> Button react component

## Install

```sh
yarn add @alobato/button
```

## Usage

```js
import Button, { ButtonRaw }  from '@alobato/button'
...
<Button onClick={() => navigate('new')}>New</Button>

<Button loading={saving} onClick={handleSave}>Save</Button>

<ButtonRaw><IconClose /></ButtonRaw>
```
