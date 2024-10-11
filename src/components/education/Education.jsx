import { useState } from 'react';
import styles from '../profile/profile.module.scss'
import { TextField, Box, Grid2, Button } from '@mui/material';

export const Education = ({ education }) => {
    const [editableEducation, setEditableEducation] = useState({
        university: education?.university || '',
        years: education?.years || '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableEducation({
            ...editableEducation,
            [name]: value,
        });
    };

    const handleSave = () => {
        alert(`Изменения сохранены
Университет: ${editableEducation.university},
Годы обучения: ${editableEducation.years}`)
    }


    if (!education) return null;

    return (
        <div className={styles.profile}>
            <div className={styles.title}>Образование</div>
            <Box mt={2} >
                <Grid2 container rowSpacing={{ xs: 1, md: 2 }} columnSpacing={{ xs: 2, md: 3 }}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Университет"
                            name="university"
                            value={editableEducation.university}
                            onChange={handleInputChange}
                            variant="outlined"
                            margin='normal'
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Годы обучения"
                            name="years"
                            value={editableEducation.years}
                            onChange={handleInputChange}
                            variant="outlined"
                            margin='normal'
                        />
                    </Grid2>
                </Grid2>
            </Box>
            <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleSave}>
                Сохранить изменения
            </Button>
        </div>
    );
};