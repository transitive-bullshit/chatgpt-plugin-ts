# ChatGPT Plugin TS <!-- omit in toc -->

> TODO: this is an active WIP as of April 3, 2023.. source and NPM package with utils and types coming soon...

[![Build Status](https://github.com/transitive-bullshit/chatgpt-plugin-ts/actions/workflows/test.yml/badge.svg)](https://github.com/transitive-bullshit/chatgpt-plugin-ts/actions/workflows/test.yml) [![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/transitive-bullshit/chatgpt-plugin-ts/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg)](https://prettier.io)

- [Intro](#intro)
- [Notes](#notes)
- [License](#license)

## Intro

TODO

## Notes

- `name_for_human`
  - 30 character max
- `name_for_model`
  - 50 character max
- `description_for_human`
  - 120 character max
- `description_for_model`
  - 8000 character max
  - Max decreases over time
- API response body length
  - 100k character limit
  - Decreases over time
  - Subject to limitations
- TODO: `defineConfig` function to help validate `ai-plugin.json` configs?

## License

MIT © [Travis Fischer](https://transitivebullsh.it)

If you found this project interesting, please consider [sponsoring me](https://github.com/sponsors/transitive-bullshit) or <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
