/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
export default class ClassicEditor extends ClassicEditorBase {}

const customColorPalette = [
  {
    color: "hsl(4, 90%, 58%)",
    label: "Red",
  },
  {
    color: "hsl(340, 82%, 52%)",
    label: "Pink",
  },
  {
    color: "hsl(291, 64%, 42%)",
    label: "Purple",
  },
  {
    color: "hsl(262, 52%, 47%)",
    label: "Deep Purple",
  },
  {
    color: "hsl(231, 48%, 48%)",
    label: "Indigo",
  },
  {
    color: "hsl(207, 90%, 54%)",
    label: "Blue",
  },
  {
    color: "#02A6F2",
    label: "Light Blue",
  },
  {
    color: "#00BDD6",
    label: "Cyan",
  },
  {
    color: "#009485",
    label: "Teal",
  },
  {
    color: "#4CAE4F",
    label: "Green",
  },
  {
    color: "#8BC34B",
    label: "Light Green",
  },
  {
    color: "#CBDC38",
    label: "Lime",
  },
  {
    color: "#FDD835",
    label: "Yellow",
  },
  {
    color: "#FFC105",
    label: "Amber",
  },
  {
    color: "#FF9900",
    label: "Orange",
  },
  {
    color: "#F4511F",
    label: "Deep Orange",
  },
  {
    color: "#6C4C41",
    label: "Brown",
  },
  {
    color: "#9E9E9E",
    label: "Grey",
  },
  {
    color: "#607C8A",
    label: "Blue Grey",
  },
  {
    color: "#FFFFFF",
    label: "White",
  },

  // ...
];

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  Font,
  UploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Subscript,
  Superscript,
  BlockQuote,
  Highlight,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TextTransformation,
  SimpleUploadAdapter,
  ImageResize,
  LinkImage,
  Alignment,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  toolbar: {
    shouldNotGroupWhenFull: true,
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "alignment",
      "link",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "|",
      "indent",
      "outdent",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "highlight",
      "removeHighlight",
      "|",
      "code",
      "subscript",
      "superscript",
      "strikethrough",
      "mediaEmbed",
      "undo",
      "redo",
    ],
  },
  image: {
    styles: ["alignLeft", "alignCenter", "alignRight", "full", "side"],
    resizeOptions: [
      {
        name: "imageResize:original",
        value: null,
        icon: "original",
      },
      {
        name: "imageResize:50",
        value: "50",
        icon: "medium",
      },
      {
        name: "imageResize:75",
        value: "75",
        icon: "large",
      },
    ],
    toolbar: [
      "imageStyle:full",
      "imageStyle:side",
      "|",
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "|",
      "imageTextAlternative",
      "imageResize:50",
      "imageResize:75",
      "imageResize:original",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
    tableProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },
    tableCellProperties: {
      borderColors: customColorPalette,
      backgroundColors: customColorPalette,
    },
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
};
