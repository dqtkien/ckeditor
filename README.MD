# Kevin Rich Text Editor

![Runtime](https://img.shields.io/node/v/@sab-international/rich-text-editor.svg) ![Release](https://img.shields.io/npm/v/@sab-international/rich-text-editor.svg) ![License](https://img.shields.io/npm/l/@sab-international/rich-text-editor.svg) ![Dependencies](https://david-dm.org/sab-international/rich-text-editor.svg)

A customized build of [CKEditor](https://ckeditor.com/ckeditor-5), a rich text editor.

## Development

- [Git repository](https://github.com/KevinDangVN/ckeditor)

- [npm package](https://www.npmjs.com/package/@kevin-oisp/kevin-ckeditor)

## Quick start

First, install the build from npm:

```bash
npm i @kevin-oisp/kevin-ckeditor
```

And use it in your website:

```html
<div id="editor">
  <p>This is the editor content.</p>
</div>
<script src="./node_modules/@kevin-oisp/kevin-ckeditor/build/index.js"></script>
<script>
  ClassicEditor.create(document.querySelector("#editor"))
    .then((editor) => {
      window.editor = editor;
    })
    .catch((error) => {
      console.error("There was a problem initializing the editor.", error);
    });
</script>
```

Or in your JavaScript application:

```js
import ClassicEditor from "@kevin-oisp/kevin-ckeditor";

ClassicEditor.create(document.querySelector("#editor"))
  .then((editor) => {
    window.editor = editor;
  })
  .catch((error) => {
    console.error("There was a problem initializing the editor.", error);
  });
```

```js (ReactJS)
import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@kevin-oisp/kevin-ckeditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </header>
    </div>
  );
}

export default App;
```
