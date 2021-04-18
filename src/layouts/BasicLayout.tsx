
// 页面的头部
import React from 'react';
import styles from "./BasicLayout.less"


const BasicLayout: React.FC = ({ children}) => {
    return (
        <div className={styles.main}>
            <article>
                {children}
            </article>
        </div>
    )
}

    
export default BasicLayout