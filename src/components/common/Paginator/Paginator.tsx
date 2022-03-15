import React, {HTMLAttributes} from "react";
import styles from './Paginator.module.css';
import cn from 'classnames';

type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
} & React.DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

let Paginator: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let FirstPages = () => {
        return (
            <>
                {currentPage != 1 && <span onClick={(e) => {
                    onPageChanged(currentPage - 1)
                }}>{'< '}</span>}
                {currentPage > 5 &&
                <span onClick={(e) => {
                    onPageChanged(1)
                }}>1</span>
                }
                {currentPage > 5 && <span className={styles.cursor}>......</span>}
            </>
        )
    }

    let LastsPages = () => {
        return (
            <>
                {pagesCount - currentPage >= 5 && <span className={styles.cursor}>......</span>}
                {pagesCount - currentPage >= 5 && <span onClick={(e) => {
                    onPageChanged(pagesCount)
                }}>{pagesCount}</span>}

                {currentPage != pagesCount && <span onClick={(e) => {
                    onPageChanged(currentPage + 1)
                }}>{' >'}</span>}
            </>
        )
    }

    return <div className={styles.pagination}>
        <FirstPages/>
        {pages.map(p => {
            if (currentPage - p <= 4 && currentPage - p >= -4) {
                return (
                    <span
                        className={cn({[styles.selectedPage]: currentPage === p})}
                        key={p}
                        onClick={(e) => {
                            // <span className={styles.selectedPage} onClick={(e) => {
                            onPageChanged(p)
                        }}>{p + ' | '}
                    </span>
                )
            }
        })}
        <LastsPages/>
    </div>
}

export default Paginator;