import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCharactersAction, getMoreCharactersAction } from '../../redux/reducers/reducer';
import CharListItem from './CharListItem';
import CharInfo from './CharListItem';

const CharList = () => {
    const dispatch = useDispatch();
    const {chars} = useSelector(state => state)

    useEffect(() => {
        dispatch(getCharactersAction())
    }, [dispatch]);

    return (
        <div className="max-w-4xl mx-auto pb-8">
            <div className="w-full">
                {chars.map((i) => {
                    return (
                        <CharListItem key={i.id} {...i} />
                    )
                })}
            </div>
            <div className="w-full">
                {chars.map((i) => {
                    return (
                        <CharInfo key={i.id} {...i} />
                    )
                })}
            </div>
            <div>
                <button 
                    className="flex flex-row items-center justify-center w-full mt-4 py-3 px-5 rounded-lg
                        bg-blue-500 hover:bg-blue-600 
                        text-white font-semibold transition-colors duration-200 ease-in-out
                        disabled:opacity-50 disabled:bg-blue-500"     
                    onClick={() => dispatch(getMoreCharactersAction())}>
                    <span>More character</span>
                </button>
            </div>
        </div>
    )
}

export default CharList;