import { createContext, useState } from 'react';
import RootStore from './RootStore';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

const RootStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [rootStore] = useState(() => new RootStore());

    return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>;
};

export default RootStoreProvider;
