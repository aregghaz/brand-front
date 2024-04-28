import React from 'react'

function Pagination({activePage, totalPages, nextPage, prevPage, showMore}) {
    return (
        <div className="pagination">
            <button className="show-more" onClick={() => showMore()}>
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.06189 9.7385C1.02104 9.42042 1 9.09641 1 8.76755C1 4.47765 4.58172 1 9 1C11.5006 1 13.7332 2.11394 15.2002 3.85862M15.2002 3.85862V1M15.2002 3.85862V3.91276L12.2002 3.91283M16.9381 7.79661C16.979 8.11469 17 8.4387 17 8.76755C17 13.0575 13.4183 16.5351 9 16.5351C6.61061 16.5351 4.46589 15.518 3 13.9054M3 13.9054V13.6223H6M3 13.9054V16.5351" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Показать еще
            </button>
        </div>
    )
}

export default Pagination