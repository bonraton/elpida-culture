import { useState } from 'react';

export default function usePopupState() {
  const [isOpen, setIsOpen] = useState(false);

  const changePopupStatus = () => setIsOpen(!isOpen);

  return { isOpen, changePopupStatus };
}
