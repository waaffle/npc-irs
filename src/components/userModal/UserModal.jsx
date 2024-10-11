import { motion } from 'framer-motion';
import { useState } from "react";
import { Education } from "../education/Education";
import { Family } from "../family/Family";
import { MainInfo } from "../mainInfo/MainInfo";
import { Profile } from "../profile/Profile";
import { Tabs } from "../tabs/Tabs";
import { Tasks } from "../tasks/Tasks";
import styles from "./userModal.module.scss";

export const UserModal = ({ user, closeModal }) => {
    const [activeTab, setActiveTab] = useState("profile");

    const [editableUser, setEditableUser] = useState({
        gender: user?.gender || '',
        fullName: user?.fullName || '',
        phone: user?.phone || '',
        telegram: user?.telegram || '',
        email: user?.email || '',
        age: user?.age || '',
        dateOfBirth: user?.dateOfBirth.split('.').reverse().join('-') || '',
        post: user?.post || '',
        salary: user?.salary || '',
        address: user?.address || '',
        picture: user?.picture || '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUser({
            ...editableUser,
            [name]: value,
        });
    };
    const handleSave = () => {
        alert('Обновлённые данные о пользователе: ' + JSON.stringify(editableUser, null, 2));
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            scale: 1,
            transition: {
                duration: 0.1,
            },
        },
    };

    return (

        <div className={styles.modalOverlay} onClick={closeModal}>
            <motion.div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button className={styles.closeBtn} onClick={closeModal}>
                    <img src="/cross.svg" alt="" />
                </button>
                <div className={styles.tabsContainer}>
                    <Tabs categories={user?.categories} activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className={styles.info}>
                        <div className={styles.content}>
                            {activeTab === 'profile' && <Profile editableUser={editableUser} handleChange={handleChange} handleSave={handleSave} />}
                            {activeTab === 'family' && <Family user={user} />}
                            {activeTab === 'education' && <Education education={user?.education} />}
                            {activeTab === 'tasks' && <Tasks tasks={user?.tasks} />}
                        </div>
                        <div className={styles.mainInfo}><MainInfo user={editableUser} /></div>
                    </div>
                </div>
            </motion.div>
        </div>

    );
}

