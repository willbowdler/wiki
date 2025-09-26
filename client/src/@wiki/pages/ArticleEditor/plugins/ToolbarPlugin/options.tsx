import {
  MdCode,
  MdHighlight,
  MdFormatAlignJustify,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdSubscript,
  MdSuperscript,
  MdFormatAlignCenter,
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdUndo,
  MdRedo,
} from 'react-icons/md';
import { RxDividerVertical } from 'react-icons/rx';

const RICH_TEXT_ACTIONS = {
  bold: 'bold',
  italics: 'italics',
  underline: 'underline',
  strikethrough: 'strikethrough',
  superscript: 'superscript',
  subscript: 'subscript',
  highlight: 'highlight',
  code: 'code',
  leftAlign: 'leftAlign',
  centerAlign: 'centerAlign',
  rightAlign: 'rightAlign',
  justifyAlign: 'justifyAlign',
  divider: 'divider',
  undo: 'undo',
  redo: 'redo',
};

export const RICH_TEXT_OPTIONS = [
  { id: RICH_TEXT_ACTIONS.bold, icon: <MdFormatBold />, label: 'Bold' },
  { id: RICH_TEXT_ACTIONS.italics, icon: <MdFormatItalic />, label: 'Italics' },
  {
    id: RICH_TEXT_ACTIONS.underline,
    icon: <MdFormatUnderlined />,
    label: 'Underline',
  },
  { id: RICH_TEXT_ACTIONS.divider, icon: <RxDividerVertical /> },
  {
    id: RICH_TEXT_ACTIONS.highlight,
    icon: <MdHighlight />,
    label: 'Highlight',
  },
  {
    id: RICH_TEXT_ACTIONS.strikethrough,
    icon: <MdFormatStrikethrough />,
    label: 'Strikethrough',
  },
  {
    id: RICH_TEXT_ACTIONS.superscript,
    icon: <MdSuperscript />,
    label: 'Superscript',
  },
  {
    id: RICH_TEXT_ACTIONS.subscript,
    icon: <MdSubscript />,
    label: 'Subscript',
  },
  { id: RICH_TEXT_ACTIONS.code, icon: <MdCode />, label: 'Code' },
  { id: RICH_TEXT_ACTIONS.divider, icon: <RxDividerVertical /> },
  {
    id: RICH_TEXT_ACTIONS.leftAlign,
    icon: <MdFormatAlignLeft />,
    label: 'Align Left',
  },
  {
    id: RICH_TEXT_ACTIONS.centerAlign,
    icon: <MdFormatAlignCenter />,
    label: 'Align Center',
  },
  {
    id: RICH_TEXT_ACTIONS.rightAlign,
    icon: <MdFormatAlignRight />,
    label: 'Align Right',
  },
  {
    id: RICH_TEXT_ACTIONS.justifyAlign,
    icon: <MdFormatAlignJustify />,
    label: 'Align Justify',
  },
  { id: RICH_TEXT_ACTIONS.divider, icon: <RxDividerVertical /> },
  { id: RICH_TEXT_ACTIONS.undo, icon: <MdUndo />, label: 'Undo' },
  { id: RICH_TEXT_ACTIONS.redo, icon: <MdRedo />, label: 'Redo' },
];

export const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
