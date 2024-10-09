import { useState } from 'react';
import styles from './tabs.module.scss'
import cn from 'classnames'

export const Tabs = ({ categories, activeTab, setActiveTab }) => {

    return (
        <div className={styles.tabs}>
            {Object.keys(categories).map((key, i) => (
                <button className={cn(styles.button, activeTab === key && styles.active, activeTab === key && i === 0 && styles.first)} key={key} onClick={() => setActiveTab(key)}>
                    {categories[key]}
                </button>
            ))}
        </div>
    );
};