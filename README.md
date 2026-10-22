# Mockreate Figma Plugin

Mockreate is a Figma plugin to generate random data quickly to fill tables and designs in general.

[Install plugin in Figma](https://www.figma.com/community/plugin/1096384653667384513/Mockreate)

## Development

Install dependencies with `npm install`, then run `npm run dev` to serve the plugin UI from `src/ui.html`.

Run `npm run build` to bundle the UI into the root `ui.html` referenced by `manifest.json`. The build inlines its JavaScript and CSS for Figma.

Avatars are downloaded at runtime from [datasets/avatars on GitHub](https://github.com/monzanifabio/figma-mockreate/tree/main/datasets/avatars). Select shape layers, choose Avatars, and generate to replace their fills with random images. PNG and JPEG files are supported. The directory listing is cached for the plugin session; new sessions discover added images without a rebuild. An internet connection is required, and GitHub API rate limits apply.

### What can you create with Mockreate?

Mockreate allows you to generate random data from default datasets, random math and import your custom JSON data. (Watch the demo video below)

[![Click for video demo](https://raw.githubusercontent.com/monzanifabio/figma-mockreate/main/img/cover.png)](https://www.loom.com/share/af90c8ef179842fdb8ed1a662e280fb2?sid=f6ebf442-6de8-47dc-8634-38aeceebdfea)
<sup>Click image for demo video</sup>

**Features and datasets:**

- First names (sort between Male, Female or both)
- Last names
- Full names (first and last names)
- Usernames
- Emails
- Phone numbers (choose phone prefix and lenght)
- Date (choose year and formatting options)
- Time (choose formatting options)
- Number range (pick 2 numbers and it will generate random numbers in between)
- Money (generate random amounts given a range and a currency)
- Credit card numbers
- Ethereum public addresses
- Avatars (fill selected shape layers with random avatar images)
- Custom dataset (import your custom json data via url)

**Layout options:**

- Select the number of generated results
- Font size
- Spacing between rows
- Add a header name for your data
- See data preview before adding it to the workspace

### Todo

- [x] Add a data preview
- [ ] Add more datasets
- [ ] UI improvements?
