import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import { useState } from 'react';
import styles from './mainInfo.module.scss';

export const MainInfo = ({ user }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setSelectedFile(fileUrl);
        }
    };

    return (
        <div className={styles.mainInfo}>
            <div
                className={styles.avatarContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className={styles.avatar} src={selectedFile || user?.picture} alt="avatar" />
                <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="file-upload"
                        type="file"
                        onChange={handleFileUpload}
                    />
                    <label htmlFor="file-upload">
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{ bgcolor: '#ffffffef', color: '#111010', '&:hover': { bgcolor: '#c5c5c5' } }}
                        >
                            Загрузить фото
                            <input
                                className={styles.visuallyHidden}
                                type="file"
                                onChange={handleFileUpload}
                                multiple
                            />
                        </Button>
                    </label>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{user.fullName}</div>
                {user?.phone && <a href="#" className={styles.detail}>
                    <img className={styles.img} src="/phone.svg" alt="" />
                    {user?.phone}
                </a>}
                {user?.email && <a href="#" className={styles.detail}>
                    <img className={styles.img} src="/email.svg" alt="" />
                    {user?.email}
                </a>}
                {user?.telegram && <a href="#" className={styles.detail}>
                    <img className={styles.img} src="/telegram.svg" alt="" />
                    {user?.telegram}
                </a>}
            </div>
        </div>
    );
};