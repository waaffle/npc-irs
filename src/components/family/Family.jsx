import styles from '../profile/profile.module.scss'
import { useState } from 'react';
import { TextField, Button, Grid2, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const Family = ({ user }) => {
    const [familyMembers, setFamilyMembers] = useState(user?.family || []);
    const [newMember, setNewMember] = useState({ role: '', fullName: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember({
            ...newMember,
            [name]: value,
        });
    };

    const handleAddMember = () => {
        if (newMember.role && newMember.fullName) {
            setFamilyMembers([...familyMembers, newMember]);
            setNewMember({ role: '', fullName: '' });
        }
    };
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Члены семьи</div>
            <div >
                {familyMembers.map((person) => (
                    <div key={person.fullName} className={styles.family}>
                        <div className={styles.key}>{person?.role}</div>
                        <div className={styles.value}>{person?.fullName}</div>
                    </div>
                ))}
            </div>
            <Box mt={4}>
                <Grid2 container rowSpacing={2} columnSpacing={{ xs: 2, md: 3 }}>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <FormControl fullWidth>
                            <InputLabel id="role-label">Роль</InputLabel>
                            <Select
                                labelId="role-label"
                                name="role"
                                value={newMember.role}
                                onChange={handleInputChange}
                                label="Роль"
                            >
                                <MenuItem value="Mуж">Муж</MenuItem>
                                <MenuItem value="Жена">Жена</MenuItem>
                                <MenuItem value="Отец">Отец</MenuItem>
                                <MenuItem value="Мать">Мать</MenuItem>
                                <MenuItem value="Дочь">Дочь</MenuItem>
                                <MenuItem value="Сын">Сын</MenuItem>
                                <MenuItem value="Сестра">Сестра</MenuItem>
                                <MenuItem value="Брат">Брат</MenuItem>
                                <MenuItem value="Бабушка">Бабушка</MenuItem>
                                <MenuItem value="Дедушка">Дедушка</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <TextField
                            fullWidth
                            label="Полное имя"
                            name="fullName"
                            value={newMember.fullName}
                            onChange={handleInputChange}
                            variant="outlined"
                        />
                    </Grid2>
                </Grid2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddMember}
                    sx={{ mt: 3 }}
                >
                    Добавить члена семьи
                </Button>
            </Box>
        </div>
    );
};