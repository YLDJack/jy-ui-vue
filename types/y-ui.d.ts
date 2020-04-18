import Vue from 'vue'
import { YUIComponent } from './components'

import { YTooltip } from './tooltip'
import { YButton } from './button'
import { YTab } from './tab'
import { YTabPane } from './tabPane'
import { YInput } from './input'

export function install (vue: typeof Vue): void

export type Component = YUIComponent

export class Tooltip extends YTooltip {}
export class Button extends YButton {}
export class Tab extends YTab {}
export class TabPane extends YTabPane {}
export class Input extends YInput {}