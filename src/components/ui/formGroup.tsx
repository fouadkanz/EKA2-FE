import { ReactNode } from 'react';

export type FormGroupProps = {
  children: ReactNode;
};
function FormGroup({children}:FormGroupProps) {
  return (
    <div className="flex flex-col space-y-2 mb-2">
      {children}
    </div>
  )
}

export default FormGroup
