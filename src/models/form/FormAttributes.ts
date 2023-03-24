type method = 'GET' | 'POST';
type target = '_blank' | '_self' | '_parent' | '_top' | 'framename';
type id = string;

export interface FormAttributes {
  id?: id;
  method?: method;
  target?: target;
};

export type Callback = () => void;

export interface FormEvents {
  click?: Callback[],
  hover?: Callback[],
};
