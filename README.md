# Morfana

Library for morphemes higlighting specializing in Russian language.
Inspired by [kityan/morfana](https://github.com/kityan/morfana) library

## Commands

| Command          | Description                   |
| ---------------- | ----------------------------- |
| build            | build es and generate types   |
| build:es         | build es                      |
| build:types      | build types                   |
| coverage         | check test coverage           |
| lint             | lint code with eslint         |
| start            | run docs for developing       |
| storybook        | run storybook for developing  |
| build-storybook  | build docs                    |
| test             | run tests                     |
| type-check       | check typings                 |
| type-check:watch | start ts server in watch mode |

## Syntax

| Markdown prefix | Morpheme |
| --------------- | -------- |
| pr              | prefix   |
| su              | suffix   |
| po              | postfix  |
| ro              | root     |
| en              | ending   |
| st              | stem     |

Word description looks like this:

```js
ro:0-5;en:6-8;st:1-5;
```

## Customisation

Config has a variety of options for customisation.
Replace letter or morpheme wrapper to ad interactivity.

| Parameter                | Type                       | Description                                                         |
| ------------------------ | -------------------------- | ------------------------------------------------------------------- |
| strokeWidth              | number                     | Morpheme view stroke width (px)                                     |
| strokeColor              | string                     | Morpheme view stroke color                                          |
| markupItemsDelimeter     | string                     | Markup items delimeter                                              |
| markupKeyValDelimeter    | string                     | Markup key/value delimeter                                          |
| markupRangeDelimeter     | string                     | Markup range start/end delimeter                                    |
| zeroEndingSymbol         | string                     | Zero ending symbol                                                  |
| letterHeight             | number                     | Letter component height (px)                                        |
| letterWidth              | number                     | Letter component width (px)                                         |
| morphemeSpacing          | number                     | Morphemes horisontal spacing (px)                                   |
| morphemeHeightRatio      | number                     | 0-1 Morphemes root node height ratio. Adjusts morhemes paths heihgt |
| letterComponent          | `FC<LetterProps>`          | Custom Letter component                                             |
| morphemeWrapperComponent | `FC<MorphemeWrapperProps>` | Custom morpheme wrapper component                                   |
| morphemesViewsMap        | MorphemesViews             | Custom morpheme views component map                                 |
| morphemesTypesMap        | MorphemesTypes             | Custom morpheme types map (used in markup)                          |
| errorsLogLevel           | ErrorsLogLevel             | Errors log level                                                    |
| logger                   | Logger                     | Logger with 3 methods: info, warn, error                            |

## Methods

Morfana's class methods

| Method                  | Description                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| setConfig               | Set instance config                                                                        |
| getConfig               | Get instance config                                                                        |
| log                     | Log error or other message (according to current log level)                                |
| validateMarkup          | Check validity of markup elements string e.g. "ro:1-5", return valid values                |
| parseMarkup             | Parse markup string e.g. "ro:1-5;en:6-8;st:1-5;" into array "ro:1-5", "en:6-8", "st:1-5"   |
| getMarkupData           | Prepare markup data, e.g. from array of 'ro:1-5' to array of { type: 'ro', range: [1, 5] } |
| prepareWord             | Prepare word for parsing (add zero ending symbol)                                          |
| getSymbolsMap           | Get symbols map with morhpemes data                                                        |
| process                 | Process markup and word to get symbols map and markup data for the markup display          |
| getMarkupFromMarkupData | Get markup string from markupData                                                          |

## Components

### MarkedWord

Component renders word and morphemes based on the markup string. Uses Word as a view component.

### Word

Component that renders word and morphemes based on symbols map and markup data.

### Letter

Component that renders symbol in a box of certain configured dimentions. Can be replaced in config in order to add styles or functionality.

### Morpheme

Component that renders morpheme. Can be replaced in config in order to add styles or functionality.

### MorphemeWrapper

Component that wraps morpheme.

## Recomendations

It is recomended to use monospace font in order to avoid akward letter spacing.
