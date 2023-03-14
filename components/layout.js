import React, {createContext} from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const changeSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(()=>{
        window.addEventListener('resize', changeSize);

        return ()=>{
            window.removeEventListener('resize', changeSize);
        }
    },[windowSize]);
    return (
        <DataContext.Provider>
             {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
