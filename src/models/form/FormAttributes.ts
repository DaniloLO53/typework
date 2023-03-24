type method = 'GET' | 'POST';
type target = '_blank' | '_self' | '_parent' | '_top' | 'framename';

export interface FormAttributes {
  method?: method;
  target?: target;
};
