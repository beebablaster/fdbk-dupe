import { useLanguage } from '@/locales/useLanguage';
import { useWarningStore } from '@/store/useWarningsStore';
import { useEffect, useState } from 'react';

type KeyLock = 'CapsLock';
export const useKeyLockObserver = (key: KeyLock) => {
  const [toggled, setToggled] = useState(false);
  const setWarning = useWarningStore((state) => state.setWarning);
  const clearWarning = useWarningStore((state) => state.clearWarning);
  const translate = useLanguage();

  useEffect(() => {
    const onKeyUp = (event: KeyboardEvent) => {
      const isToggled = event.getModifierState?.(key);
      if(isToggled) {
        setWarning(key, key + " " + translate("is on"));
      } else {
        clearWarning(key);
      }
      setToggled(keyToggled => isToggled ?? keyToggled);
    };

    
    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return toggled;
};