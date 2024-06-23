import React from 'react'

export const useEffectDebug = (dependancy: any[], key: string) => {
  React.useEffect(() => {
    console.log({ [key]: dependancy })
  }, [dependancy, key]);
}
