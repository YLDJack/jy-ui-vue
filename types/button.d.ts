import { YUIComponent } from './components'

export type Type = 'primary' | 'success' | 'warning' | 'danger' | 'text' | 'dashed' | 'normal'
export type Size = 'large' | 'medium' | 'small' | 'mini'

/** Button Component */
export declare class YButton extends YUIComponent {
  /** Icon name */
  icon: string

  /** Button type */
  type: Type

  /** Size of button  */
  size: Size

  /** disabled state of button */
  disabled: boolean

  /** loading state of button */
  loading: boolean
}
