import { YUIComponent } from './components'

export type Theme = 'Dark' | 'Light'
export type Position = 'top' | 'bottom' | 'left' | 'right'
export type Trigger = 'click' | 'hover'

/** Tooltip Component */
export declare class YTooltip extends YUIComponent {
  /** Tooltip theme */
  theme: Theme

  /** Display content, can be overridden by slot#content */
  content: string

  /** Position of Tooltip */
  position: Position

  /** Trigger of Tooltip */
  trigger: Trigger
}
